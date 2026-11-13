import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { SOUND_STORAGE_KEY } from '@/utils/constants'
import { SoundContext } from './soundContextValue'

const readInitial = () => {
  try {
    return localStorage.getItem(SOUND_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(readInitial)

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      try {
        localStorage.setItem(SOUND_STORAGE_KEY, String(next))
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle])
  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}
