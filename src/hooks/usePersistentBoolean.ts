import { useCallback, useState } from 'react'

/** Boolean state persisted to localStorage. */
export function usePersistentBoolean(key: string, defaultValue: boolean) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored === null ? defaultValue : stored === 'true'
    } catch {
      return defaultValue
    }
  })

  const toggle = useCallback(() => {
    setValue((prev) => {
      const next = !prev
      try {
        localStorage.setItem(key, String(next))
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }, [key])

  return [value, toggle] as const
}
