import { createContext } from 'react'
import { useState } from 'react'
import { directory } from '../utils/directory'

export const DirectoryContext = createContext()

export function DirectoryProvider({ children }) {
  const [directoryState, setDirectoryState] = useState(directory)

  const changeDefaultOpen = (open, level, name) => {
    // Função recursiva para atualizar o estado
    const updateOpenByLevelAndName = (items, currentLevel = 0) => {
      return items.map((item) => {
        if (currentLevel === level && item.name === name) {
          return { ...item, open } // Atualiza a propriedade `open` no item
        }

        // Se o item tem filhos, aplica recursivamente
        if (item.children && item.children.length > 0) {
          return {
            ...item,
            children: updateOpenByLevelAndName(item.children, currentLevel + 1)
          }
        }

        return item
      })
    }

    // Atualiza o estado usando a função recursiva
    setDirectoryState((prevState) => updateOpenByLevelAndName(prevState))
  }

  const value = {
    directoryState,
    changeDefaultOpen
  }

  return (
    <DirectoryContext.Provider value={value}>
      {children}
    </DirectoryContext.Provider>
  )
}
