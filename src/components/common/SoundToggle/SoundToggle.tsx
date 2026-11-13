import { useSound } from '@/hooks/useSound'
import styles from './SoundToggle.module.scss'

export function SoundToggle() {
  const { enabled, toggle, play } = useSound()

  const handleClick = () => {
    toggle()
    // Feedback when turning sound on
    if (!enabled) play('confirm', true)
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={handleClick}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute sound effects' : 'Enable sound effects'}
    >
      SFX {enabled ? 'ON' : 'OFF'}
    </button>
  )
}
