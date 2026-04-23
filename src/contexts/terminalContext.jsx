import { createContext, useState } from 'react'

const DEFAULT_HEIGHT = 280

export const TerminalContext = createContext()

export function TerminalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [history, setHistory] = useState([{ type: 'welcome' }])

  const toggleTerminal = () => setIsOpen((prev) => !prev)
  const openTerminal = () => setIsOpen(true)
  const closeTerminal = () => setIsOpen(false)

  const addToHistory = (entry) => {
    setHistory((prev) => [...prev, entry])
  }

  const clearHistory = () => {
    setHistory([])
  }

  const value = {
    isOpen,
    height,
    setHeight,
    history,
    toggleTerminal,
    openTerminal,
    closeTerminal,
    addToHistory,
    clearHistory
  }

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  )
}
