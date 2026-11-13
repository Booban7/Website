export interface ExpStatus {
  level: number
  /** 0–1 progress toward the next level */
  progress: number
  daysIntoLevel: number
  daysInLevel: number
  daysToNext: number
  /** 1-based career year, e.g. 5 → "5th year" */
  year: number
  /** True on the first day of a new level */
  justLeveledUp: boolean
}

const DAY_MS = 86_400_000

const addMonths = (date: Date, months: number) =>
  new Date(date.getFullYear(), date.getMonth() + months, date.getDate())

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

/**
 * One level per full month since the career start date.
 * The bar fills day by day across the current month-long cycle.
 */
export function calculateExp(startIso: string, now: Date = new Date()): ExpStatus {
  const [y, m, d] = startIso.split('-').map(Number)
  const start = new Date(y, m - 1, d)
  const today = startOfDay(now)

  let months = (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth())
  if (addMonths(start, months) > today) months -= 1
  months = Math.max(0, months)

  const levelStart = addMonths(start, months)
  const nextLevel = addMonths(start, months + 1)

  const daysInLevel = Math.round((nextLevel.getTime() - levelStart.getTime()) / DAY_MS)
  const daysIntoLevel = Math.round((today.getTime() - levelStart.getTime()) / DAY_MS)

  return {
    level: months + 1,
    progress: Math.min(1, daysIntoLevel / daysInLevel),
    daysIntoLevel,
    daysInLevel,
    daysToNext: daysInLevel - daysIntoLevel,
    year: Math.floor(months / 12) + 1,
    justLeveledUp: months > 0 && daysIntoLevel === 0,
  }
}

export function ordinal(n: number): string {
  const rem100 = n % 100
  if (rem100 >= 11 && rem100 <= 13) return `${n}th`
  const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th'
  return `${n}${suffix}`
}
