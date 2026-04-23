import { useContext } from 'react'
import { TerminalContext } from '../contexts/terminalContext'

export function useTerminalContext() {
  const context = useContext(TerminalContext)
  if (!context) {
    throw new Error('useTerminalContext must be used within a TerminalProvider')
  }
  return context
}
