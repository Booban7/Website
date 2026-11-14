import { useLayoutEffect } from 'react'
import {
  applyAurora,
  applyLight,
  REDUCED_MOTION_NIGHT_PROGRESS,
  REDUCED_MOTION_PROGRESS,
} from '@/utils/lightCycle'

const isDark = () => document.documentElement.dataset.theme === 'dark'

/**
 * Maps page scroll progress (0–1) to the scene:
 * light mode → sun position and daylight colours, dark mode → aurora colour mix.
 * Updates are batched to one per animation frame and written straight
 * to CSS variables, so scrolling never triggers React renders.
 */
export function useScrollLight() {
  // Layout effect so the scene is coloured before the first paint
  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    // Cached scroll range; reading scrollHeight every frame would force layout
    let max = 0
    const measure = () => {
      max = document.documentElement.scrollHeight - window.innerHeight
    }

    const update = () => {
      frame = 0
      const reduced = motion.matches
      if (isDark()) {
        applyAurora(reduced ? REDUCED_MOTION_NIGHT_PROGRESS : max > 0 ? window.scrollY / max : 0)
      } else {
        applyLight(reduced ? REDUCED_MOTION_PROGRESS : max > 0 ? window.scrollY / max : 0)
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const resizeObserver = new ResizeObserver(() => {
      measure()
      schedule()
    })
    resizeObserver.observe(document.body)

    // Re-apply when the theme changes
    const themeObserver = new MutationObserver(update)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const attach = () => {
      measure()
      update()
      if (motion.matches) return () => {}
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule)
      return () => {
        window.removeEventListener('scroll', schedule)
        window.removeEventListener('resize', schedule)
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    let detach = attach()
    const onMotionChange = () => {
      detach()
      detach = attach()
    }
    motion.addEventListener('change', onMotionChange)

    return () => {
      detach()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      motion.removeEventListener('change', onMotionChange)
    }
  }, [])
}
