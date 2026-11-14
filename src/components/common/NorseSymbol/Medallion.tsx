import type { SymbolName } from '@/types/card.types'
import { NorseSymbol } from './NorseSymbol'
import styles from './Medallion.module.scss'

interface MedallionProps {
  symbol: SymbolName
  className?: string
}

/** Gold ring + knotwork inner band with a bold symbol in the centre. */
export function Medallion({ symbol, className = '' }: MedallionProps) {
  return (
    <div className={`${styles.medallion} ${className}`}>
      <NorseSymbol name={symbol} className={styles.symbol} />
    </div>
  )
}
