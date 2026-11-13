import { useCallback, useContext } from 'react'
import { SoundContext } from '@/context/soundContextValue'
import { playSfx, type SfxName } from '@/utils/sfx'

export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSound must be used inside <SoundProvider>')
  const { enabled, toggle } = ctx

  /** Plays only when the user has enabled sound. Pass `force` to always play. */
  const play = useCallback(
    (name: SfxName, force = false) => {
      if (enabled || force) playSfx(name)
    },
    [enabled],
  )

  return { enabled, toggle, play }
}
