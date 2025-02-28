import { useMenuContext } from './hooks/useMenuContext'
import { SideMenu } from './components/sideMenu/SideMenu'
import { FinalLine } from './components/FinalLine'

function App() {
  const menu = useMenuContext()
  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex w-full overflow-hidden">
        <SideMenu />
        {menu.currentPage.component}
      </div>
      <FinalLine />
    </div>
  )
}

export default App
