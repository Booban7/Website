import { ThemeProvider } from '@/context/ThemeContext'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home/Home'

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  )
}
