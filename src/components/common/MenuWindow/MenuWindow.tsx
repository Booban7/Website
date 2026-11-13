import type { ElementType, ReactNode } from 'react'
import styles from './MenuWindow.module.scss'

interface MenuWindowProps {
  title?: string
  children: ReactNode
  as?: ElementType
  className?: string
}

export function MenuWindow({ title, children, as: Tag = 'div', className = '' }: MenuWindowProps) {
  return (
    <Tag className={`${styles.window} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </Tag>
  )
}
