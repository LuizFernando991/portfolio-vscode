import { File } from '../../files/File'
import { useTabContext } from '../../../hooks/useTabContext'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '../../../hooks/useMenuContext'

export function DirectoryItem({ item, level }) {
  const paddingLeft = `${level * 14}px`

  const tabs = useTabContext()
  const { setExplorerOpen } = useMenuContext()
  const { t } = useTranslation()

  const selected = (tabs.current && tabs.current.name) === item.name
  const handleClick = () => {
    tabs.addTab({
      name: item.name,
      extension: item.extension,
      component: item.component
    })
    if (window.innerWidth <= 1024) {
      setExplorerOpen(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      onAuxClick={handleClick}
      className={classNames(
        'hover:bg-white-5a py-1 font-medium block w-full outline-none focus:shadow-item-selected focus:z-20 relative cursor-pointer',
        {
          'bg-white-5a': selected,
          'focus:bg-white-5a': !selected
        }
      )}
      style={{ paddingLeft: paddingLeft }}
    >
      <File name={t(`tabs.${item.name}`)} extension={item.extension} />
    </button>
  )
}
