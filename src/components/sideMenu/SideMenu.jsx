import { useMenuContext } from '../../hooks/useMenuContext'
import { MenuItem } from './MenuItem'
import { Explorer } from '../Explorer'
import { pages } from '../../utils/pages'

export function SideMenu() {
  const menu = useMenuContext()
  return (
    <>
      <div className="font-sans min-h-screen h-full md:h-screen flex flex-col bg-dark-600 overflow-hidden w-12 min-w-12">
        {pages.map((page) => (
          <MenuItem
            Icon={page.icon}
            key={page.name}
            selected={menu.currentPage.name === page.name}
            onClick={() => menu.switchPages(page)}
          />
        ))}
      </div>
      {menu.explorerOpen && <Explorer />}
    </>
  )
}
