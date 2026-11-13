import { useMemo, type ReactNode } from 'react'
import { usePersistentBoolean } from '@/hooks/usePersistentBoolean'
import { AMBIENCE_STORAGE_KEY, SOUND_STORAGE_KEY } from '@/utils/constants'
import { PreferencesContext } from './preferencesContextValue'

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, toggleSound] = usePersistentBoolean(SOUND_STORAGE_KEY, false)
  const [ambienceEnabled, toggleAmbience] = usePersistentBoolean(AMBIENCE_STORAGE_KEY, true)

  const value = useMemo(
    () => ({ soundEnabled, toggleSound, ambienceEnabled, toggleAmbience }),
    [soundEnabled, toggleSound, ambienceEnabled, toggleAmbience],
  )
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}
