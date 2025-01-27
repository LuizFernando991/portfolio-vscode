import classNames from 'classnames'

export function MenuItem({ selected, Icon, onClick }) {
  const defaultContainerClasses =
    'flex items-center border-l-2 border-dark-600 p-2 cursor-pointer group'
  const selectedContainerClasses = {
    'border-l-pink': selected,
    'bg-dark-400': selected,
    'bg-dark-600': !selected
  }
  const iconDefualtClases = 'w-7 h-8 group-hover:text-white'
  const selectedIconClasses = {
    'text-white-50a': !selected
  }

  return (
    <button
      onClick={onClick}
      className={classNames(defaultContainerClasses, selectedContainerClasses)}
    >
      <Icon className={classNames(iconDefualtClases, selectedIconClasses)} />
    </button>
  )
}
