import { useMenuContext } from '../../hooks/useMenuContext'
import { MenuItem } from './MenuItem'
import { Explorer } from '../Explorer'
import { ResumeButton } from './ResumeButton'
import { Settings } from './Settings'
import { pages } from '../../utils/pages'

export function SideMenu() {
  const menu = useMenuContext()

  return (
    <>
      <div className="font-sans h-full flex flex-col justify-between bg-dark-600 w-12 min-w-12 relative">
        <div>
          {pages.map((page) => (
            <MenuItem
              Icon={page.icon}
              key={page.name}
              selected={menu.currentPage.name === page.name}
              onClick={() => menu.switchPages(page)}
            />
          ))}
        </div>
        <div>
          <ResumeButton />
          <Settings />
        </div>
      </div>
      {menu.explorerOpen && <Explorer />}
    </>
  )
}
