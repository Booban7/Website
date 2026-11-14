import { SCENE_ID } from '@/utils/lightCycle'
import { Aurora, AuroraReflection, NightSky } from './Night'
import styles from './LofotenScene.module.scss'

// Lofoten-style ridgelines (viewBox x 0–1440, waterline y = 400).
// An opening in the ridges lets the midnight sun skim the open sea.
const FAR =
  'M0 400 V330 L80 292 L140 302 L210 246 L262 272 L330 226 L384 258 L452 236 L520 278 L600 262 L680 290 L736 304 L766 400 L884 400 L918 300 L930 268 L1010 290 L1100 262 L1180 284 L1260 258 L1340 282 L1440 270 V400Z'

const MID =
  'M0 400 V346 L60 324 L118 254 L150 274 L190 182 L214 212 L240 160 L270 232 L320 262 L372 302 L432 334 L520 352 L620 366 L700 386 L744 400 L876 400 L902 296 L932 204 L956 232 L990 142 L1010 172 L1040 118 L1076 212 L1112 250 L1160 232 L1222 292 L1300 314 L1380 330 L1440 338 V400Z'

const NEAR = 'M1150 400 L1210 336 L1250 312 L1292 252 L1322 272 L1362 214 L1402 258 L1440 236 V400Z'

const SNOW = [
  'M229 184 L240 160 L254 192 L246 186 L239 195Z',
  'M183 197 L190 182 L199 200 L192 195Z',
  'M1026 146 L1040 118 L1056 156 L1047 149 L1038 160Z',
  'M981 161 L990 142 L1000 160 L992 156Z',
  'M925 216 L932 204 L940 220 L934 216Z',
  'M1356 226 L1362 214 L1370 230 L1364 226Z',
]

// Glitter streaks under the sun: [y offset below waterline, half-width]
const GLITTER: Array<[number, number]> = [
  [8, 34], [16, 24], [25, 40], [35, 20], [46, 30], [58, 16], [71, 24], [86, 12], [102, 18],
]

/**
 * Fixed full-screen Lofoten scene. All colours and the sun position come from
 * CSS custom properties set by `useScrollLight`.
 */
export function LofotenScene() {
  return (
    <div id={SCENE_ID} className={styles.scene} aria-hidden="true">
      <NightSky />
      <Aurora />
      <svg className={styles.land} viewBox="0 100 1440 420" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="scene-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className={styles.seaTop} />
            <stop offset="1" className={styles.seaBottom} />
          </linearGradient>
          <radialGradient id="scene-sun-glow">
            <stop offset="0" className={styles.glowStop} stopOpacity="0.9" />
            <stop offset="1" className={styles.glowStop} stopOpacity="0" />
          </radialGradient>
          <clipPath id="scene-water">
            <rect x="0" y="400" width="1440" height="120" />
          </clipPath>
        </defs>

        <Sun />

        <path d={FAR} className={styles.far} />
        <path d={MID} className={styles.mid} />
        <g className={styles.snow}>
          {SNOW.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={NEAR} className={styles.near} />

        <path d="M520 400 Q610 382 740 400Z" className={styles.near} />
        <Cabin withSmoke />

        {/* Sea, reflections and glitter */}
        <rect x="0" y="400" width="1440" height="120" fill="url(#scene-sea)" />
        <g clipPath="url(#scene-water)">
          <g transform="translate(0 800) scale(1 -1)" opacity="0.2">
            <Sun />
            <path d={MID} className={styles.near} />
            <path d={NEAR} className={styles.near} />
            <Cabin />
          </g>
          <g className={styles.glitter}>
            {GLITTER.map(([dy, w]) => (
              <rect key={dy} x={-w} y={400 + dy} width={w * 2} height="2" rx="1" />
            ))}
          </g>
        </g>
        <path d="M0 400.5 H1440" className={styles.waterline} />
      </svg>
      <AuroraReflection />
    </div>
  )
}

function Sun() {
  return (
    <g className={styles.sun}>
      <circle r="120" fill="url(#scene-sun-glow)" />
      <circle r="26" className={styles.sunDisc} />
    </g>
  )
}

const SMOKE_PUFFS = [0, 1, 2, 3]

/** Red rorbu on stilts with a chimney; windows glow in low light */
function Cabin({ withSmoke = false }: { withSmoke?: boolean }) {
  return (
    <g transform="translate(380 0)">
      <g className={styles.stilts}>
        <path d="M232 392 V402 M246 392 V402 M260 392 V402 M274 392 V402" />
      </g>
      {/* Chimney drawn before the roof so the roof hides its base */}
      <g className={styles.chimney}>
        <rect x="265" y="353" width="6" height="10" />
        <rect x="264" y="351" width="8" height="2.5" />
      </g>
      <rect x="228" y="368" width="50" height="25" className={styles.cabinWall} />
      <path d="M224 370 L253 350 L282 370Z" className={styles.cabinRoof} />
      <rect x="246" y="378" width="9" height="15" className={styles.door} />
      <g className={styles.windowGlow}>
        <rect x="232" y="373" width="11" height="11" rx="2" />
        <rect x="263" y="373" width="11" height="11" rx="2" />
      </g>
      <g className={styles.window}>
        <rect x="234" y="375" width="7" height="7" />
        <rect x="265" y="375" width="7" height="7" />
      </g>
      {withSmoke && (
        <g className={styles.smoke}>
          {SMOKE_PUFFS.map((i) => (
            <circle key={i} cx="268" cy="347" r="3.5" className={styles.puff} style={{ animationDelay: `${i * 1.5}s` }} />
          ))}
        </g>
      )}
    </g>
  )
}
