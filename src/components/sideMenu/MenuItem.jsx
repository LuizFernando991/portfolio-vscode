import classNames from 'classnames'

export function MenuItem({ selected, Icon, iconClasses, as, ...props }) {
  const ButtonTag = as || 'button'

  return (
    <ButtonTag
      className={classNames(
        'w-full flex items-center border-l-2 border-dark-600 p-2 cursor-pointer group',
        {
          'border-l-pink': selected,
          'bg-dark-400': selected,
          'bg-dark-600': !selected
        }
      )}
      {...props}
    >
      <Icon
        className={classNames(
          'w-7 h-8 group-hover:text-white',
          {
            'text-white-50a': !selected
          },
          iconClasses
        )}
      />
    </ButtonTag>
  )
}
