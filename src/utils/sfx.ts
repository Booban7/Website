/**
 * Procedurally generated sound effects using the Web Audio API.
 * All sounds (including the victory jingle) are original.
 */

export type SfxName = 'hover' | 'play' | 'return' | 'click' | 'victory'

let ctx: AudioContext | null = null

function getContext(): AudioContext | null {
  if (typeof window === 'undefined' || !('AudioContext' in window)) return null
  ctx ??= new AudioContext()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

interface Tone {
  freq: number
  at: number
  duration: number
  type?: OscillatorType
  volume?: number
  /** Frequency to glide to */
  slideTo?: number
  attack?: number
}

function playTones(tones: Tone[], masterVolume = 0.2) {
  const ac = getContext()
  if (!ac) return
  const master = ac.createGain()
  master.gain.value = masterVolume
  master.connect(ac.destination)
  const t0 = ac.currentTime + 0.02

  for (const { freq, at, duration, type = 'triangle', volume = 1, slideTo, attack = 0.01 } of tones) {
    const osc = ac.createOscillator()
    const gain = ac.createGain()
    osc.type = type
    const start = t0 + at
    const end = start + duration
    osc.frequency.setValueAtTime(freq, start)
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, end)
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(volume, start + attack)
    gain.gain.exponentialRampToValueAtTime(0.0001, end)
    osc.connect(gain).connect(master)
    osc.start(start)
    osc.stop(end + 0.02)
  }
}

/** Filtered noise burst – used for whooshes, rustles and thuds. */
function playNoise({
  at = 0,
  duration,
  from,
  to,
  volume = 0.5,
  type = 'bandpass',
}: {
  at?: number
  duration: number
  from: number
  to: number
  volume?: number
  type?: BiquadFilterType
}) {
  const ac = getContext()
  if (!ac) return
  const length = Math.ceil(ac.sampleRate * duration)
  const buffer = ac.createBuffer(1, length, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1

  const src = ac.createBufferSource()
  src.buffer = buffer
  const filter = ac.createBiquadFilter()
  filter.type = type
  filter.Q.value = 1.2
  const gain = ac.createGain()
  const start = ac.currentTime + 0.02 + at
  const end = start + duration
  filter.frequency.setValueAtTime(from, start)
  filter.frequency.exponentialRampToValueAtTime(to, end)
  gain.gain.setValueAtTime(0.0001, start)
  gain.gain.exponentialRampToValueAtTime(volume, start + duration * 0.3)
  gain.gain.exponentialRampToValueAtTime(0.0001, end)
  src.connect(filter).connect(gain).connect(ac.destination)
  src.start(start)
  src.stop(end + 0.02)
}

const N = {
  C3: 130.81, G3: 196.0, A3: 220.0, F3: 174.61,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.0, C6: 1046.5,
}

const effects: Record<SfxName, () => void> = {
  // Soft wooden knock
  hover: () =>
    playTones([{ freq: 520, at: 0, duration: 0.07, type: 'sine', volume: 0.5, slideTo: 380, attack: 0.003 }], 0.25),

  click: () =>
    playTones([
      { freq: N.E5, at: 0, duration: 0.08, volume: 0.6 },
      { freq: N.A5, at: 0.07, duration: 0.14, volume: 0.6 },
    ]),

  // Whoosh + thud on the table
  play: () => {
    playNoise({ duration: 0.35, from: 400, to: 2400, volume: 0.25 })
    playTones([{ freq: 140, at: 0.33, duration: 0.25, type: 'sine', volume: 1, slideTo: 55, attack: 0.004 }], 0.5)
    playNoise({ at: 0.33, duration: 0.15, from: 900, to: 200, volume: 0.35, type: 'lowpass' })
  },

  // Leaf rustle
  return: () => {
    playNoise({ duration: 0.25, from: 3000, to: 1200, volume: 0.15, type: 'highpass' })
    playNoise({ at: 0.08, duration: 0.2, from: 2500, to: 5000, volume: 0.1, type: 'highpass' })
  },

  // Original warm ~3s victory jingle (triangle "flute" lead, sine bass, horn-like harmony)
  victory: () => {
    const s = 0.12
    const lead: Array<[number, number, number]> = [
      [N.G4, 0, 1], [N.C5, 1, 1], [N.D5, 2, 1], [N.E5, 3, 3],
      [N.D5, 6, 1], [N.C5, 7, 1], [N.D5, 8, 2], [N.G4, 10, 2],
      [N.A4, 12, 1], [N.C5, 13, 1], [N.E5, 14, 1], [N.G5, 15, 3],
      [N.E5, 18, 1], [N.G5, 19, 1], [N.C6, 20, 8],
    ]
    const bass: Array<[number, number, number]> = [
      [N.C3, 0, 6], [N.G3, 6, 6], [N.A3, 12, 3], [N.F3, 15, 3], [N.G3, 18, 2], [N.C3, 20, 8],
    ]
    const harmony: Array<[number, number, number]> = [
      [N.C4, 3, 3], [N.B4, 8, 4], [N.C4, 15, 3], [N.E4, 20, 8], [N.G4, 20, 8],
    ]
    playTones(
      [
        ...lead.map(([freq, at, len]) => ({ freq, at: at * s, duration: len * s, volume: 0.9 })),
        ...bass.map(([freq, at, len]) => ({ freq, at: at * s, duration: len * s, type: 'sine' as const, volume: 1 })),
        ...harmony.map(([freq, at, len]) => ({
          freq, at: at * s, duration: len * s, type: 'sawtooth' as const, volume: 0.12, attack: 0.05,
        })),
      ],
      0.3,
    )
  },
}

export function playSfx(name: SfxName) {
  effects[name]()
}
