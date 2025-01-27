import { useContext } from 'react'
import { MenuContext } from '../contexts/menuContext'

export function useMenuContext() {
  const menu = useContext(MenuContext)

  if (!menu) {
    throw new Error('useMenuContext must be used within MenuaProvider')
  }

  return menu
}
