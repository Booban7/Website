import styles from './LofotenLandscape.module.scss'

interface LofotenLandscapeProps {
  /** `full` = coloured hero illustration, `outline` = faint line echo for the footer */
  variant?: 'full' | 'outline'
  className?: string
}

// Jagged Lofoten-style ridgelines, peaks rising straight from the sea (viewBox 1440×520, waterline y=400)
const FAR =
  'M0 400 V330 L80 292 L140 302 L210 246 L262 272 L330 226 L384 258 L452 236 L520 278 L600 262 L680 290 L760 270 L840 296 L930 268 L1010 290 L1100 262 L1180 284 L1260 258 L1340 282 L1440 270 V400Z'

const MID =
  'M0 400 V346 L60 324 L118 254 L150 274 L190 182 L214 212 L240 160 L270 232 L320 262 L372 302 L432 334 L520 352 L620 364 L720 356 L800 336 L860 290 L900 248 L932 204 L956 232 L990 142 L1010 172 L1040 118 L1076 212 L1112 250 L1160 232 L1222 292 L1300 314 L1380 330 L1440 338 V400Z'

const NEAR = 'M1150 400 L1210 336 L1250 312 L1292 252 L1322 272 L1362 214 L1402 258 L1440 236 V400Z'

const SNOW = [
  'M229 184 L240 160 L254 192 L246 186 L239 195Z',
  'M183 197 L190 182 L199 200 L192 195Z',
  'M1026 146 L1040 118 L1056 156 L1047 149 L1038 160Z',
  'M981 161 L990 142 L1000 160 L992 156Z',
  'M925 216 L932 204 L940 220 L934 216Z',
  'M1356 226 L1362 214 L1370 230 L1364 226Z',
]

export function LofotenLandscape({ variant = 'full', className = '' }: LofotenLandscapeProps) {
  if (variant === 'outline') {
    return (
      <svg
        className={`${styles.landscape} ${styles.outline} ${className}`}
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path d={MID} />
        <path d="M0 400 H1440" />
      </svg>
    )
  }

  return (
    <svg
      className={`${styles.landscape} ${className}`}
      viewBox="0 100 1440 420"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Illustration of steep Lofoten mountains rising from a calm sea, with a small red fishing cabin on the shore"
    >
      <defs>
        <linearGradient id="lofoten-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c6d4dc" />
          <stop offset="1" stopColor="#8aa1b0" />
        </linearGradient>
        <clipPath id="lofoten-water">
          <rect x="0" y="400" width="1440" height="120" />
        </clipPath>
      </defs>

      {/* Mountains */}
      <path d={FAR} fill="#d3dee5" />
      <path d={MID} fill="#9fb4c2" />
      <g fill="#f8fafb">
        {SNOW.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={NEAR} fill="#5b6e7b" />

      {/* Shore with fishing cabin (rorbu) */}
      <path d="M520 400 Q610 382 740 400Z" fill="#5b6e7b" />
      <Cabin />

      {/* Sea + soft reflections */}
      <rect x="0" y="400" width="1440" height="120" fill="url(#lofoten-sea)" />
      <g clipPath="url(#lofoten-water)" transform="translate(0 800) scale(1 -1)" opacity="0.18">
        <path d={MID} fill="#5b6e7b" />
        <path d={NEAR} fill="#2c4250" />
        <Cabin />
      </g>
      <path d="M0 400.5 H1440" stroke="#f8fafb" strokeWidth="1.5" opacity="0.8" />
      <g stroke="#f8fafb" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <path d="M380 430 h60 M860 452 h90 M1080 438 h50 M180 470 h70 M560 490 h40 M1260 478 h80" />
      </g>
    </svg>
  )
}

/** Red rorbu on stilts, sitting on the waterline */
function Cabin() {
  return (
    <g transform="translate(380 0)">
      <g stroke="#2c4250" strokeWidth="2">
        <path d="M232 392 V402 M246 392 V402 M260 392 V402 M274 392 V402" />
      </g>
      <rect x="228" y="368" width="50" height="25" fill="#b5483a" />
      <path d="M224 370 L253 350 L282 370Z" fill="#2c4250" />
      <rect x="246" y="378" width="9" height="15" fill="#f8fafb" />
      <rect x="234" y="375" width="7" height="7" fill="#f8fafb" />
      <rect x="265" y="375" width="7" height="7" fill="#f8fafb" />
    </g>
  )
}
