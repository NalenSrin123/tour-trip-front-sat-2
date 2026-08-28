import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateListGuide from './pages/admin/guides/CreateListGuide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CreateListGuide />
  </StrictMode>,
)
