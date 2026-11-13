import { LayoutGroup } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { Board } from '@/components/common/Board'
import { Hand } from '@/components/common/Hand'
import { cards } from '@/config/cards'
import { ContactPanel } from '@/features/contact'
import { ExperiencePanel } from '@/features/experience'
import { HeroPanel } from '@/features/hero'
import { ProjectsPanel } from '@/features/projects'
import { usePlayedCard } from '@/hooks/usePlayedCard'
import { useSound } from '@/hooks/useSound'
import { GameLayout } from '@/layouts/GameLayout'
import type { CardId } from '@/types/card.types'

export function Home() {
  const { played, play, returnToHero } = usePlayedCard()
  const { play: playSound } = useSound()

  // Only animate the fly-in after the user has interacted
  const [interacted, setInteracted] = useState(false)

  const handlePlay = useCallback(
    (id: CardId) => {
      setInteracted(true)
      play(id)
    },
    [play],
  )

  const handleClose = useCallback(() => {
    setInteracted(true)
    playSound('return')
    returnToHero()
  }, [playSound, returnToHero])

  // Esc returns the current card to the hand
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && played !== 'hero') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [played, handleClose])

  useEffect(() => {
    const title = cards.find((c) => c.id === played)?.title
    document.title = played === 'hero' ? 'Robin Davoust · Frontend Developer' : `${title} · Robin Davoust`
  }, [played])

  const playedCard = cards.find((c) => c.id === played) ?? cards[cards.length - 1]
  const hand = cards.filter((c) => c.id !== played)

  return (
    <LayoutGroup>
      <GameLayout
        board={
          <Board card={playedCard} skipLanding={!interacted}>
            {played === 'hero' && <HeroPanel />}
            {played === 'experience' && <ExperiencePanel onClose={handleClose} />}
            {played === 'projects' && <ProjectsPanel onClose={handleClose} />}
            {played === 'contact' && <ContactPanel onClose={handleClose} />}
          </Board>
        }
        hand={<Hand cards={hand} onPlay={handlePlay} />}
      />
    </LayoutGroup>
  )
}
