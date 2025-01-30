import { SideMenu } from './components/sideMenu/SideMenu'
import { useMenuContext } from './hooks/useMenuContext'

function App() {
  const menu = useMenuContext()
  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex w-full overflow-hidden">
        <SideMenu />
        {menu.currentPage.component}
      </div>
      <div className="w-full h-4 bg-dark-800" />
    </div>
  )
}

export default App
