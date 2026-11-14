import type { SymbolName } from '@/types/card.types'

interface NorseSymbolProps {
  name: SymbolName
  className?: string
  /** Accessible label; omit for decorative use */
  title?: string
}

/**
 * Original bold Norse symbols drawn on a shared 100×100 grid.
 * Strokes/fills use currentColor so they can be themed via CSS.
 */
export function NorseSymbol({ name, className, title }: NorseSymbolProps) {
  return (
    <svg
      className={className}
      viewBox="-50 -50 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {SYMBOLS[name]}
    </svg>
  )
}

const eightArms = (render: (i: number) => React.ReactNode) =>
  Array.from({ length: 8 }, (_, i) => (
    <g key={i} transform={`rotate(${i * 45})`}>
      {render(i)}
    </g>
  ))

/** Helm of Awe (Ægishjálmur): eight forked arms around a centre ring */
const HelmOfAwe = (
  <>
    <circle r="8" />
    {eightArms(() => (
      <>
        <path d="M0 -8 V-42" />
        <path d="M-7 -22 L0 -27 L7 -22" />
        <path d="M-8 -34 V-42 M8 -34 V-42 M-8 -34 H8" />
      </>
    ))}
  </>
)

/** Vegvísir: eight staves with differing tips, in a ring */
const Vegvisir = (
  <>
    <circle r="46" strokeWidth="3" />
    <circle r="6" />
    {eightArms((i) => (
      <>
        <path d="M0 -6 V-38" />
        {i % 4 === 0 && <path d="M-7 -31 L0 -39 L7 -31" />}
        {i % 4 === 1 && (
          <>
            <path d="M-6 -24 H6" />
            <circle cy="-38" r="3.5" fill="currentColor" stroke="none" />
          </>
        )}
        {i % 4 === 2 && <path d="M-7 -39 V-32 H7 V-39" />}
        {i % 4 === 3 && <path d="M-6 -26 H6 M-6 -34 H6" />}
      </>
    ))}
  </>
)

/** Yggdrasil: the world tree, branches mirrored by roots, in a ring */
const Yggdrasil = (
  <>
    <circle r="46" strokeWidth="3" />
    <path d="M0 30 V-38" strokeWidth="6" />
    <path d="M0 0 Q-14 -6 -26 -24 M0 0 Q14 -6 26 -24" />
    <path d="M0 -12 Q-8 -20 -12 -34 M0 -12 Q8 -20 12 -34" />
    <path d="M-14 -10 Q-26 -10 -34 -6 M14 -10 Q26 -10 34 -6" strokeWidth="4" />
    <path d="M0 18 Q-14 22 -28 34 M0 18 Q14 22 28 34" />
    <path d="M0 24 Q-4 32 -11 40 M0 24 Q4 32 11 40" strokeWidth="4" />
    <g fill="currentColor" stroke="none">
      {[
        [-26, -24], [26, -24], [-12, -34], [12, -34], [0, -38], [-34, -6], [34, -6],
      ].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="5" />
      ))}
    </g>
  </>
)

const ravenPath =
  'M-40 24 L-30 15 Q-37 4 -28 -7 Q-23 -18 -12 -20 Q-5 -21 -3 -15 L6 -13 L-4 -9 Q-5 -1 -9 7 Q-14 18 -23 20 L-28 28 Z'

/** Huginn & Muninn: two ravens facing each other */
const Ravens = (
  <>
    <g fill="currentColor" stroke="none">
      <path d={ravenPath} transform="translate(-2 0)" />
      <path d={ravenPath} transform="translate(2 0) scale(-1 1)" />
    </g>
    <g fill="#fbf9f3" stroke="none">
      <circle cx="-13" cy="-14" r="2" />
      <circle cx="13" cy="-14" r="2" />
    </g>
    <path d="M-30 36 H30" strokeWidth="4" />
  </>
)

/** Triquetra-style interlace with ring */
const Triquetra = (
  <>
    <circle r="40" strokeWidth="3" />
    {[-90, 30, 150].map((a) => {
      const rad = (a * Math.PI) / 180
      return <circle key={a} cx={Math.cos(rad) * 13} cy={Math.sin(rad) * 13} r="20" strokeWidth="4" />
    })}
  </>
)

/** Round shield with crossed axes behind it */
const ShieldAxes = (
  <>
    <g strokeWidth="5">
      <path d="M-42 -42 L30 30 M42 -42 L-30 30" />
    </g>
    <g fill="currentColor" stroke="none">
      <path d="M-42 -42 Q-50 -26 -36 -20 L-26 -30 Q-32 -44 -42 -42Z" />
      <path d="M42 -42 Q50 -26 36 -20 L26 -30 Q32 -44 42 -42Z" />
    </g>
    <circle r="30" fill="#fbf9f3" strokeWidth="5" />
    <path d="M-29 -8 H29 M-29 8 H29" strokeWidth="2.5" />
    <circle r="9" fill="currentColor" stroke="none" />
  </>
)

const SYMBOLS: Record<SymbolName, React.ReactNode> = {
  helmOfAwe: HelmOfAwe,
  vegvisir: Vegvisir,
  yggdrasil: Yggdrasil,
  ravens: Ravens,
  triquetra: Triquetra,
  shieldAxes: ShieldAxes,
}
