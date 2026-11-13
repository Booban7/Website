import styles from './HandCursor.module.scss'

/** Pixel-art pointing glove, FF-menu style. */
export function HandCursor({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`${styles.hand} ${className}`}
      viewBox="0 0 16 10"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="#1a1a1a" d="M0 2h9v-1h6v1h1v6h-1v1H5v-1H4V7H1V6H0z" />
      <path fill="#ffffff" d="M1 3h8v-1h5v1h1v4h-1v1H6V7h4V6H5V5H1z" />
      <path fill="#b9bdd6" d="M6 7h8v1H6zM10 3h4v1h-4z" />
    </svg>
  )
}
