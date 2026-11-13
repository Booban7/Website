import { useCallback } from 'react'
import { usePreferences } from '@/context/preferencesContextValue'
import { playSfx, type SfxName } from '@/utils/sfx'

export function useSound() {
  const { soundEnabled, toggleSound } = usePreferences()

  /** Plays only when the user has enabled sound. Pass `force` to always play. */
  const play = useCallback(
    (name: SfxName, force = false) => {
      if (soundEnabled || force) playSfx(name)
    },
    [soundEnabled],
  )

  return { enabled: soundEnabled, toggle: toggleSound, play }
}
