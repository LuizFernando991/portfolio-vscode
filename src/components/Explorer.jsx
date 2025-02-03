import { useMenuContext } from '../hooks/useMenuContext'

export function Explorer() {
  const menu = useMenuContext()
  return (
    <div className="absolute ml-12 h-full lg:static lg:ml-0 w-[100vw] max-w-72 z-50 bg-dark-700">
      {menu.currentPage.explorerComponent}
    </div>
  )
}
