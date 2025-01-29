import { useDiretoryStateContext } from '../../../hooks/useDirectoryContext'

import { DirectoryList } from './DirectoryList'

export function Files() {
  const directory = useDiretoryStateContext()

  return <DirectoryList directory={directory.directoryState} />
}
