import classNames from 'classnames'
import { File } from '../files/File'
import { useTabContext } from '../../hooks/useTabContext'
import { buttonIcons } from '../../assets/icons/button/button'

export function Tab({
  tab,
  index,
  onDragStart,
  isDragging,
  showLeftBorder,
  showRightBorder
}) {
  const tabs = useTabContext()
  const selected = tabs.current.name === tab.name

  const handleDragStart = (e) => {
    tabs.switchTabs(tab)
    e.dataTransfer.setData('text/plain', index.toString())
    onDragStart()
  }

  return (
    <div
      className={classNames(
        'min-w-[175px] pr-2 h-full flex justify-between items-center border-2 border-l-1 border-r-1 border-transparent border-r-dark-500 focus-within:bg-dark-500 first:border-l-2 last:border-r-2',
        {
          'border-t-pink': selected,
          'bg-dark-500': selected,
          'bg-dark-600': !selected,
          'opacity-50': isDragging,
          'border-r-white': showRightBorder,
          'border-l-white': showLeftBorder
        }
      )}
      draggable
      onDragStart={handleDragStart}
    >
      <span
        data-tab={`${tab.name}`}
        onClick={() => tabs.switchTabs(tab)}
        onAuxClick={() => tabs.removeTab(tab)}
        className={classNames(
          'w-full h-full flex justify-between items-center cursor-pointer',
          {
            'text-white': selected,
            'text-white-50a': !selected
          }
        )}
      >
        <File name={tab.name} extension={tab.extension} />
      </span>
      <button
        onClick={() => tabs.removeTab(tab)}
        onAuxClick={() => tabs.removeTab(tab)}
        className="z-10 rounded-md p-1 hover:bg-dark-400 active:bg-dark-300 focus:bg-dark-400 outline-none cursor-pointer"
      >
        <img
          draggable={false}
          src={buttonIcons['close']}
          className="w-4 h-4"
          alt="close-button"
        />
      </button>
    </div>
  )
}
