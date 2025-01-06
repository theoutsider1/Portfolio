import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CanvasLoader from './components/CanvasLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<CanvasLoader/>}>
    <App />
    </Suspense>
  </StrictMode>
)
