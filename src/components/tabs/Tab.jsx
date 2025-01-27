import classNames from 'classnames'
import { File } from '../files/File'
import { useTabContext } from '../../hooks/useTabContext'
import { buttonIcons } from '../../assets/icons/button/button'

export function Tab({ tab }) {
  const tabs = useTabContext()
  const selected = tabs.current.name === tab.name

  const defaultClasses =
    'min-w-[175px] mr-[2px] pr-2 h-full flex justify-between items-center border-t-2 border-transparent focus-within:bg-dark-500'
  const selectedClasses = {
    'border-t-pink': selected,
    'bg-dark-500': selected,
    'bg-dark-600': !selected
  }
  const mergedClasses = classNames(defaultClasses, selectedClasses)

  return (
    <div className={mergedClasses}>
      <span
        data-tab={`${tab.name}`}
        onClick={() => tabs.switchTabs(tab)}
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
        className="z-10 rounded-md p-1 hover:bg-dark-400 active:bg-dark-300 focus:bg-dark-400 outline-none cursor-pointer"
      >
        <img src={buttonIcons['close']} className="w-4 h-4" alt="" />
      </button>
    </div>
  )
}
