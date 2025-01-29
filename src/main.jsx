import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TabProvider } from './contexts/tabContext.jsx'
import { MenuProvider } from './contexts/menuContext.jsx'
import { DirectoryProvider } from './contexts/directoryContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DirectoryProvider>
      <MenuProvider>
        <TabProvider>
          <App />
        </TabProvider>
      </MenuProvider>
    </DirectoryProvider>
  </StrictMode>
)
