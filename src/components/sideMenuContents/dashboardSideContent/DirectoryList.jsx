import { Directory } from './Directory'
import { DirectoryItem } from './DirectoryItem'

export function DirectoryList({ directory, level = 0 }) {
  const list = directory.map((item) => {
    if (item.type === 'folder')
      return <Directory directory={item} key={item.name} level={level} />

    return <DirectoryItem item={item} key={item.name} level={level} />
  })

  return <>{list}</>
}
