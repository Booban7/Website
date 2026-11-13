import { MotionConfig } from 'framer-motion'
import { PreferencesProvider } from '@/context/PreferencesContext'
import { Home } from '@/pages/Home/Home'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <PreferencesProvider>
        <Home />
      </PreferencesProvider>
    </MotionConfig>
  )
}
