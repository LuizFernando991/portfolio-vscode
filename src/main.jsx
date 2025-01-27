import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TabProvider } from './contexts/tabContext.jsx'
import { MenuProvider } from './contexts/menuContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuProvider>
      <TabProvider>
        <App />
      </TabProvider>
    </MenuProvider>
  </StrictMode>
)
