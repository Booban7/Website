import type { CardArt as CardArtType } from '@/types/card.types'

/** Simple flat forest illustrations for card art. viewBox 120×80. */
export function CardArt({ art }: { art: CardArtType }) {
  return (
    <svg viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${art}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe6f2" />
          <stop offset="1" stopColor="#f3f1e4" />
        </linearGradient>
      </defs>
      <rect width="120" height="80" fill={`url(#sky-${art})`} />
      {art === 'fjord' && <Fjord />}
      {art === 'path' && <ForestPath />}
      {art === 'chest' && <Chest />}
      {art === 'raven' && <Raven />}
    </svg>
  )
}

const Pine = ({ x, y, s = 1, fill = '#2f5d47' }: { x: number; y: number; s?: number; fill?: string }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    fill={fill}
    d="M0 -30 L8 -16 L4 -16 L11 -6 L5 -6 L13 4 L-13 4 L-5 -6 L-11 -6 L-4 -16 L-8 -16 Z M-1.5 4 h3 v5 h-3z"
  />
)

const Birch = ({ x, h = 40 }: { x: number; h?: number }) => (
  <g>
    <rect x={x} y={80 - h} width="3" height={h} fill="#f7f5ee" stroke="#c9c3b3" strokeWidth="0.5" />
    {[0.2, 0.45, 0.7].map((p) => (
      <rect key={p} x={x} y={80 - h * p} width="2" height="1" fill="#3c3c3c" />
    ))}
    <circle cx={x + 1.5} cy={80 - h} r="9" fill="#a9c97f" opacity="0.85" />
  </g>
)

function Fjord() {
  return (
    <>
      <circle cx="92" cy="20" r="8" fill="#fff6d6" />
      <path d="M0 55 L25 22 L38 36 L55 14 L78 44 L95 28 L120 52 V80 H0Z" fill="#9fb8c8" />
      <path d="M50 20 L55 14 L60 21 L56 19Z M22 26 L25 22 L28 27Z" fill="#fff" />
      <rect y="56" width="120" height="24" fill="#7fb0d3" />
      <path d="M0 60 h120" stroke="#cfe6f2" strokeWidth="0.8" />
      <Pine x={10} y={70} s={0.9} />
      <Pine x={22} y={74} s={0.7} fill="#4f7d63" />
      <Pine x={108} y={72} s={0.85} />
    </>
  )
}

function ForestPath() {
  return (
    <>
      <path d="M0 50 Q60 38 120 50 V80 H0Z" fill="#c9d8b6" />
      <path d="M50 80 Q58 60 62 48 Q64 44 66 48 Q70 60 80 80Z" fill="#e9dcc3" />
      <Pine x={14} y={66} s={1.2} />
      <Pine x={34} y={56} s={0.8} fill="#4f7d63" />
      <Pine x={92} y={58} s={0.9} fill="#4f7d63" />
      <Pine x={108} y={70} s={1.3} />
      <Pine x={76} y={50} s={0.55} fill="#6f9a7f" />
      <Pine x={48} y={48} s={0.5} fill="#6f9a7f" />
    </>
  )
}

function Chest() {
  return (
    <>
      <path d="M0 58 Q60 50 120 58 V80 H0Z" fill="#c9d8b6" />
      <Birch x={14} h={60} />
      <Birch x={100} h={52} />
      <Birch x={88} h={36} />
      <ellipse cx="60" cy="72" rx="24" ry="4" fill="#2f5d47" opacity="0.2" />
      <rect x="40" y="50" width="40" height="22" rx="2" fill="#b07a45" />
      <path d="M40 50 Q60 34 80 50Z" fill="#c68c52" />
      <rect x="40" y="49" width="40" height="3" fill="#c9a24a" />
      <rect x="57" y="52" width="6" height="8" rx="1" fill="#e6c97a" />
      <path d="M44 36 L46 32 L48 36 M70 34 L72 30 L74 34" stroke="#e6c97a" strokeWidth="1.2" fill="none" />
    </>
  )
}

function Raven() {
  return (
    <>
      <path d="M0 64 Q60 56 120 64 V80 H0Z" fill="#c9d8b6" />
      <Pine x={12} y={74} s={0.9} />
      <Pine x={108} y={74} s={1} fill="#4f7d63" />
      <g transform="translate(60 36)">
        <path
          d="M-30 -6 Q-14 -18 -4 -6 Q4 -20 30 -12 Q12 -6 6 2 L14 4 L4 6 Q-2 12 -12 8 L-22 12 L-16 4 Q-24 2 -30 -6Z"
          fill="#2a2f3a"
        />
        <circle cx="9" cy="-1" r="1" fill="#fff" />
        <rect x="12" y="4" width="16" height="11" rx="1" fill="#fbf9f3" stroke="#c9a24a" strokeWidth="0.8" transform="rotate(12 20 9)" />
        <path d="M13 6 L20 11 L27 7" stroke="#c9a24a" strokeWidth="0.8" fill="none" transform="rotate(12 20 9)" />
      </g>
    </>
  )
}
