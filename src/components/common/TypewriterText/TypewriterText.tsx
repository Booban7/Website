import { useTypewriter } from '@/hooks/useTypewriter'
import styles from './TypewriterText.module.scss'

export function TypewriterText({ text, speedMs }: { text: string; speedMs?: number }) {
  const { output, done, skip } = useTypewriter(text, speedMs)

  return (
    <p className={styles.text} onClick={skip}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {output}
        {!done && <span className={styles.caret}>|</span>}
      </span>
    </p>
  )
}
