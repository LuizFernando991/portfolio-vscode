import { useContext } from 'react'
import { DirectoryContext } from '../contexts/directoryContext'

export function useDiretoryStateContext() {
  return useContext(DirectoryContext)
}
