import { SoundProvider } from '@/context/SoundContext'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home/Home'

export default function App() {
  return (
    <SoundProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </SoundProvider>
  )
}
