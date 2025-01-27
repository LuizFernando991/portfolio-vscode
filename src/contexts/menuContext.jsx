import { createContext } from 'react'
import { useState } from 'react'
import { pages } from '../utils/pages'

export const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(pages[0])
  const [explorerOpen, setExplorerOpen] = useState(true)

  const switchPages = (page) => {
    if (page.name === currentPage.name) {
      setExplorerOpen((prev) => !prev)
      return
    }
    setCurrentPage(page)
  }

  const value = {
    currentPage,
    explorerOpen,
    switchPages,
    setExplorerOpen
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
