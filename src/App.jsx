import { SideMenu } from './components/sideMenu/SideMenu'
import { useMenuContext } from './hooks/useMenuContext'

function App() {
  const menu = useMenuContext()
  return (
    <div className="font-sans min-h-screen h-full md:h-screen flex overflow-hidden">
      <div className="flex-1 flex w-full overflow-hidden">
        <SideMenu />
        {menu.currentPage.component}
      </div>
    </div>
  )
}

export default App
