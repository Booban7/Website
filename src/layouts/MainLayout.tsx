import type { ReactNode } from 'react'
import { LofotenScene } from '@/components/common/LofotenScene'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { useScrollLight } from '@/hooks/useScrollLight'

export function MainLayout({ children }: { children: ReactNode }) {
  useScrollLight()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <LofotenScene />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
