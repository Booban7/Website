import { useCallback, useEffect, useState } from 'react'
import type { CardId } from '@/types/card.types'
import { CARD_IDS } from '@/utils/constants'

const readHash = (): CardId => {
  const hash = window.location.hash.slice(1) as CardId
  return CARD_IDS.includes(hash) ? hash : 'hero'
}

/**
 * Which card is currently on the board. Synced with the URL hash
 * so sections are linkable and the back button works.
 */
export function usePlayedCard() {
  const [played, setPlayed] = useState<CardId>(readHash)

  useEffect(() => {
    const onHashChange = () => setPlayed(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const play = useCallback((id: CardId) => {
    if (id === 'hero') {
      history.pushState(null, '', window.location.pathname + window.location.search)
    } else {
      history.pushState(null, '', `#${id}`)
    }
    setPlayed(id)
  }, [])

  return { played, play, returnToHero: useCallback(() => play('hero'), [play]) }
}
