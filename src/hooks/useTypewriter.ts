import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** Reveals text letter by letter, like an RPG dialog box. */
export function useTypewriter(text: string, speedMs = 28) {
  const reduced = usePrefersReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          window.clearInterval(id)
          return c
        }
        return c + 1
      })
    }, speedMs)
    return () => window.clearInterval(id)
  }, [text, speedMs, reduced])

  const shown = reduced ? text.length : count
  return { output: text.slice(0, shown), done: shown >= text.length, skip: () => setCount(text.length) }
}
