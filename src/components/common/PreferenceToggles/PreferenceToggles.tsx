import { usePreferences } from '@/context/preferencesContextValue'
import { playSfx } from '@/utils/sfx'
import styles from './PreferenceToggles.module.scss'

export function PreferenceToggles() {
  const { soundEnabled, toggleSound, ambienceEnabled, toggleAmbience } = usePreferences()

  return (
    <div className={styles.toggles}>
      <button
        type="button"
        className={styles.toggle}
        aria-pressed={soundEnabled}
        aria-label="Sound effects"
        title={soundEnabled ? 'Mute sound' : 'Enable sound'}
        onClick={() => {
          if (!soundEnabled) playSfx('click')
          toggleSound()
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
          {soundEnabled ? (
            <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>
      <button
        type="button"
        className={styles.toggle}
        aria-pressed={ambienceEnabled}
        aria-label="Falling leaves"
        title={ambienceEnabled ? 'Hide falling leaves' : 'Show falling leaves'}
        onClick={toggleAmbience}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19C5 10 11 5 20 4c-1 9-6 15-15 15z" fill="currentColor" opacity={ambienceEnabled ? 1 : 0.35} />
          <path d="M5 19L14 10" stroke="#fbf9f3" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
