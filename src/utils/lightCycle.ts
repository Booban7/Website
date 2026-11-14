/**
 * Midnight-sun light cycle driven by scroll progress (0 = top, 1 = bottom).
 * Values are written to CSS custom properties on <html>, so the scene
 * updates without React re-renders.
 */

type ColorKey =
  | 'sky-top'
  | 'sky-bottom'
  | 'sun'
  | 'sun-glow'
  | 'far'
  | 'mid'
  | 'near'
  | 'snow'
  | 'sea-top'
  | 'sea-bottom'
  | 'glitter'
  | 'window'
  | 'page'

interface LightStop {
  at: number
  colors: Record<ColorKey, string>
  /** Sun position in landscape SVG units (waterline is y = 400) */
  sun: { x: number; y: number }
  glitterOpacity: number
  windowGlow: number
}

export const LIGHT_STOPS: LightStop[] = [
  {
    // Cool morning
    at: 0,
    colors: {
      'sky-top': '#d9e6ef', 'sky-bottom': '#f4f7f9', sun: '#fff7df', 'sun-glow': '#fff2c9',
      far: '#d3dee5', mid: '#9fb4c2', near: '#5b6e7b', snow: '#f8fafb',
      'sea-top': '#c6d4dc', 'sea-bottom': '#8aa1b0', glitter: '#ffffff', window: '#e6edf1', page: '#f8fafb',
    },
    sun: { x: 250, y: 60 },
    glitterOpacity: 0.3,
    windowGlow: 0,
  },
  {
    // Bright midday
    at: 0.35,
    colors: {
      'sky-top': '#b4d0e6', 'sky-bottom': '#eef5fa', sun: '#fffdf4', 'sun-glow': '#fff9e0',
      far: '#cddbe5', mid: '#93adbf', near: '#4d6475', snow: '#ffffff',
      'sea-top': '#b5cddd', 'sea-bottom': '#6f92a8', glitter: '#ffffff', window: '#e6edf1', page: '#f8fafb',
    },
    sun: { x: 520, y: -170 },
    glitterOpacity: 0.15,
    windowGlow: 0,
  },
  {
    // Golden afternoon
    at: 0.7,
    colors: {
      'sky-top': '#e6d6c0', 'sky-bottom': '#f9e7c9', sun: '#ffd27a', 'sun-glow': '#ffc86b',
      far: '#e2d1bf', mid: '#b8a594', near: '#6d5e58', snow: '#fff1dc',
      'sea-top': '#e8d3b5', 'sea-bottom': '#9a8a86', glitter: '#ffe2a3', window: '#ffc56b', page: '#fbf7ef',
    },
    sun: { x: 700, y: 170 },
    glitterOpacity: 0.55,
    windowGlow: 0.5,
  },
  {
    // Midnight sun – skims the sea but never sets
    at: 1,
    colors: {
      'sky-top': '#c7b5d6', 'sky-bottom': '#f8cbb8', sun: '#ffb68c', 'sun-glow': '#ff9f7c',
      far: '#dac0cf', mid: '#a68fa8', near: '#594a63', snow: '#ffe4dc',
      'sea-top': '#ebc1b6', 'sea-bottom': '#8b7591', glitter: '#ffd3b3', window: '#ffb04f', page: '#fbf4f1',
    },
    sun: { x: 810, y: 370 },
    glitterOpacity: 0.85,
    windowGlow: 1,
  },
]

const hexToRgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))

const mixHex = (a: string, b: string, t: number) => {
  const [ra, ga, ba] = hexToRgb(a)
  const [rb, gb, bb] = hexToRgb(b)
  const c = (x: number, y: number) => Math.round(x + (y - x) * t)
  return `rgb(${c(ra, rb)} ${c(ga, gb)} ${c(ba, bb)})`
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// Smoothstep for gentler transitions between stops
const ease = (t: number) => t * t * (3 - 2 * t)

/** Interpolated light state for a given scroll progress. */
export function getLight(progress: number) {
  const p = Math.min(1, Math.max(0, progress))
  const i = Math.max(0, LIGHT_STOPS.findIndex((s) => s.at >= p) - 1)
  const from = LIGHT_STOPS[i]
  const to = LIGHT_STOPS[Math.min(i + 1, LIGHT_STOPS.length - 1)]
  const span = to.at - from.at || 1
  const t = ease((p - from.at) / span)

  const colors = Object.fromEntries(
    (Object.keys(from.colors) as ColorKey[]).map((k) => [k, mixHex(from.colors[k], to.colors[k], t)]),
  ) as Record<ColorKey, string>

  return {
    colors,
    // Sun x moves linearly; y follows the eased keyframes for a natural arc
    sunX: lerp(from.sun.x, to.sun.x, (p - from.at) / span),
    sunY: lerp(from.sun.y, to.sun.y, t),
    glitterOpacity: lerp(from.glitterOpacity, to.glitterOpacity, t),
    windowGlow: lerp(from.windowGlow, to.windowGlow, t),
  }
}

export const SCENE_ID = 'lofoten-scene'

const written = new WeakMap<HTMLElement, Map<string, string>>()

/** Sets a CSS variable only if its value changed (avoids needless style recalcs). */
function setVar(el: HTMLElement, name: string, value: string) {
  let cache = written.get(el)
  if (!cache) written.set(el, (cache = new Map()))
  if (cache.get(name) === value) return
  cache.set(name, value)
  el.style.setProperty(name, value)
}

/**
 * Writes the light state for `progress` into CSS custom properties.
 * Scene variables go on the scene element only; the page tint (used by
 * panels and header) goes on <html> and changes rarely.
 */
export function applyLight(
  progress: number,
  scene: HTMLElement | null = document.getElementById(SCENE_ID),
  root: HTMLElement = document.documentElement,
) {
  const light = getLight(progress)
  const { page, ...sceneColors } = light.colors
  setVar(root, '--light-page', page)
  if (!scene) return
  for (const [key, value] of Object.entries(sceneColors)) {
    setVar(scene, `--light-${key}`, value)
  }
  setVar(scene, '--sun-x', `${light.sunX.toFixed(1)}px`)
  setVar(scene, '--sun-y', `${light.sunY.toFixed(1)}px`)
  setVar(scene, '--glitter-opacity', light.glitterOpacity.toFixed(2))
  setVar(scene, '--window-glow', light.windowGlow.toFixed(2))
}

/** Static scene used when the visitor prefers reduced motion */
export const REDUCED_MOTION_PROGRESS = 0.35

// ---------- Night: aurora mix driven by scroll ----------

interface AuroraStop {
  at: number
  green: number
  yg: number
  violet: number
  red: number
}

/** Scroll journey: green at the top → red/magenta in the middle → blue/violet at the end. */
export const AURORA_STOPS: AuroraStop[] = [
  { at: 0, green: 0.9, yg: 0.45, red: 0, violet: 0 },
  { at: 0.25, green: 0.55, yg: 0.2, red: 0.45, violet: 0 },
  { at: 0.5, green: 0.15, yg: 0.05, red: 0.9, violet: 0.15 },
  { at: 0.75, green: 0.05, yg: 0, red: 0.45, violet: 0.6 },
  { at: 1, green: 0.1, yg: 0, red: 0.1, violet: 0.95 },
]

export function getAurora(progress: number) {
  const p = Math.min(1, Math.max(0, progress))
  const i = Math.max(0, AURORA_STOPS.findIndex((s) => s.at >= p) - 1)
  const from = AURORA_STOPS[i]
  const to = AURORA_STOPS[Math.min(i + 1, AURORA_STOPS.length - 1)]
  const t = ease((p - from.at) / (to.at - from.at || 1))
  return {
    green: lerp(from.green, to.green, t),
    yg: lerp(from.yg, to.yg, t),
    violet: lerp(from.violet, to.violet, t),
    red: lerp(from.red, to.red, t),
  }
}

/** Writes the aurora mix for `progress` into CSS variables on the scene. */
export function applyAurora(progress: number, scene: HTMLElement | null = document.getElementById(SCENE_ID)) {
  if (!scene) return
  const a = getAurora(progress)
  setVar(scene, '--aurora-green', a.green.toFixed(2))
  setVar(scene, '--aurora-yg', a.yg.toFixed(2))
  setVar(scene, '--aurora-violet', a.violet.toFixed(2))
  setVar(scene, '--aurora-red', a.red.toFixed(2))
}

/** Still aurora shown when the visitor prefers reduced motion (mostly red, a little violet) */
export const REDUCED_MOTION_NIGHT_PROGRESS = 0.5
