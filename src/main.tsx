import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { AlignmentProvider } from './context/AlignmentContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlignmentProvider>
      <App />
    </AlignmentProvider>
  </StrictMode>,
)
