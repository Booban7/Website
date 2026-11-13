import { createContext, useContext } from 'react'

export interface PreferencesContextValue {
  soundEnabled: boolean
  toggleSound: () => void
  ambienceEnabled: boolean
  toggleAmbience: () => void
}

export const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used inside <PreferencesProvider>')
  return ctx
}
