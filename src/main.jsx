import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TabProvider } from './contexts/tabContext.jsx'
import { MenuProvider } from './contexts/menuContext.jsx'
import { DirectoryProvider } from './contexts/directoryContext.jsx'
import { TerminalProvider } from './contexts/terminalContext.jsx'
import App from './App.jsx'
import './translations/i18n'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DirectoryProvider>
      <MenuProvider>
        <TabProvider>
          <TerminalProvider>
            <App />
          </TerminalProvider>
        </TabProvider>
      </MenuProvider>
    </DirectoryProvider>
  </StrictMode>
)
