import { useMenuContext } from '../../hooks/useMenuContext'
import { useTerminalContext } from '../../hooks/useTerminalContext'
import { MenuItem } from './MenuItem'
import { Explorer } from '../Explorer'
import { ResumeButton } from './ResumeButton'
import { Settings } from './Settings'
import { pages } from '../../utils/pages'
import { VscTerminal } from 'react-icons/vsc'

export function SideMenu() {
  const menu = useMenuContext()
  const terminal = useTerminalContext()

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
          <MenuItem
            Icon={VscTerminal}
            selected={terminal.isOpen}
            onClick={terminal.toggleTerminal}
            title="Toggle Terminal (Ctrl+J)"
          />
          <Settings />
        </div>
      </div>
      {menu.explorerOpen && <Explorer />}
    </>
  )
}
