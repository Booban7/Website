import { useTypewriter } from '@/hooks/useTypewriter'
import styles from './TypewriterText.module.scss'

interface TypewriterTextProps {
  text: string
  speedMs?: number
}

export function TypewriterText({ text, speedMs }: TypewriterTextProps) {
  const { output, done, skip } = useTypewriter(text, speedMs)

  return (
    <p className={styles.text} onClick={skip}>
      {/* Full text for screen readers, animated text for sighted users */}
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {output}
        <span className={done ? styles.arrow : styles.caret}>{done ? '▼' : '_'}</span>
      </span>
    </p>
  )
}
