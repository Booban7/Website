import type { ReactNode } from 'react'
import { FallingLeaves } from '@/components/common/FallingLeaves'
import { Footer } from '@/components/layout/Footer'
import { TopBar } from '@/components/layout/TopBar'
import styles from './GameLayout.module.scss'

interface GameLayoutProps {
  board: ReactNode
  hand: ReactNode
}

export function GameLayout({ board, hand }: GameLayoutProps) {
  return (
    <div className={styles.game}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopBar />
      {board}
      {hand}
      <Footer />
      <FallingLeaves />
    </div>
  )
}
