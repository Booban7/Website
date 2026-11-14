import { useLayoutEffect } from 'react'

/**
 * Elements marked `data-reveal` fade/rise in the first time they scroll into
 * view (they get `data-revealed`). The hidden starting state only applies once
 * this hook marks the page `data-reveal="ready"`, so without JS or with reduced
 * motion everything is simply visible.
 */
export function useReveal() {
  // Layout effect: anything already on screen is revealed before the first paint
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reveal = (el: Element) => el.setAttribute('data-revealed', '')

    // Reveal when the element's top passes 15% above the bottom of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    )

    const viewport = window.innerHeight
    for (const el of elements) {
      const { top, bottom } = el.getBoundingClientRect()
      if (top < viewport && bottom > 0) reveal(el)
      else observer.observe(el)
    }
    root.dataset.reveal = 'ready'

    return () => {
      observer.disconnect()
      delete root.dataset.reveal
    }
  }, [])
}
