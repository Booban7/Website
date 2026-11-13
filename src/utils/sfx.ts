/**
 * Procedurally generated retro sound effects using the Web Audio API.
 * All sounds (including the victory jingle) are original compositions.
 */

export type SfxName = 'cursor' | 'confirm' | 'victory'

let ctx: AudioContext | null = null

function getContext(): AudioContext | null {
  if (typeof window === 'undefined' || !('AudioContext' in window)) return null
  ctx ??= new AudioContext()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

interface Note {
  /** Frequency in Hz (0 = rest) */
  freq: number
  /** Start time in seconds, relative to playback start */
  at: number
  duration: number
  type?: OscillatorType
  volume?: number
}

function playNotes(notes: Note[]) {
  const ac = getContext()
  if (!ac) return
  const master = ac.createGain()
  master.gain.value = 0.18
  master.connect(ac.destination)
  const t0 = ac.currentTime + 0.02

  for (const { freq, at, duration, type = 'square', volume = 1 } of notes) {
    if (!freq) continue
    const osc = ac.createOscillator()
    const gain = ac.createGain()
    osc.type = type
    osc.frequency.value = freq
    const start = t0 + at
    const end = start + duration
    gain.gain.setValueAtTime(0, start)
    gain.gain.linearRampToValueAtTime(volume, start + 0.01)
    gain.gain.setValueAtTime(volume * 0.8, Math.max(start + 0.01, end - 0.05))
    gain.gain.linearRampToValueAtTime(0, end)
    osc.connect(gain).connect(master)
    osc.start(start)
    osc.stop(end + 0.02)
  }
}

// Note frequencies (equal temperament)
const N = {
  C4: 261.63, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, Bb4: 466.16,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0, C6: 1046.5,
  C3: 130.81, F3: 174.61, G3: 196.0,
}

const cursor = (): Note[] => [{ freq: 1760, at: 0, duration: 0.04, volume: 0.5 }]

const confirm = (): Note[] => [
  { freq: N.E5, at: 0, duration: 0.06, volume: 0.6 },
  { freq: N.A5, at: 0.06, duration: 0.1, volume: 0.6 },
]

/** Original ~3s triumphant jingle: rising arpeggio → bright resolve. */
const victory = (): Note[] => {
  const s = 0.11 // sixteenth-ish step
  const lead: Array<[number, number, number]> = [
    // [freq, startStep, lengthSteps]
    [N.G4, 0, 1], [N.C5, 1, 1], [N.E5, 2, 1], [N.G5, 3, 3],
    [N.F5, 6, 1], [N.E5, 7, 1], [N.D5, 8, 2], [N.E5, 10, 2],
    [N.A4, 12, 1], [N.C5, 13, 1], [N.F5, 14, 1], [N.A5, 15, 3],
    [N.G5, 18, 1], [N.A5, 19, 1], [N.C6, 20, 8],
  ]
  const bass: Array<[number, number, number]> = [
    [N.C3, 0, 6], [N.G3, 6, 6], [N.F3, 12, 6], [N.C3, 18, 2], [N.G3, 20, 1], [N.C3, 21, 7],
  ]
  const harmony: Array<[number, number, number]> = [
    [N.E4, 3, 3], [N.F4, 15, 3], [N.E4, 20, 8], [N.G4, 20, 8],
  ]
  return [
    ...lead.map(([freq, at, len]) => ({ freq, at: at * s, duration: len * s * 0.95 })),
    ...bass.map(([freq, at, len]) => ({ freq, at: at * s, duration: len * s * 0.95, type: 'triangle' as const, volume: 1.4 })),
    ...harmony.map(([freq, at, len]) => ({ freq, at: at * s, duration: len * s * 0.95, volume: 0.5 })),
  ]
}

const library: Record<SfxName, () => Note[]> = { cursor, confirm, victory }

export function playSfx(name: SfxName) {
  playNotes(library[name]())
}
