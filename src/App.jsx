import { useEffect } from 'react'
import { useMenuContext } from './hooks/useMenuContext'
import { useTerminalContext } from './hooks/useTerminalContext'
import { SideMenu } from './components/sideMenu/SideMenu'
import { FinalLine } from './components/FinalLine'
import { Terminal } from './components/terminal/Terminal'

function App() {
  const menu = useMenuContext()
  const terminal = useTerminalContext()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'j') {
        e.preventDefault()
        terminal.toggleTerminal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [terminal])

  return (
    <div className="font-sans h-[100dvh] flex flex-col overflow-hidden">
      <div className="flex-1 flex w-full overflow-hidden">
        <SideMenu />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            {menu.currentPage.component}
          </div>
          {terminal.isOpen && <Terminal />}
        </div>
      </div>
      <FinalLine />
    </div>
  )
}

export default App
