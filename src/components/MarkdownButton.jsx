import classNames from 'classnames'

export function MarkdownButton({ as, children, className, ...props }) {
  const ButtonTag = as || 'button'

  return (
    <ButtonTag
      className={classNames(
        'font-bold text-soft-blue opacity-70 hover:opacity-100 outline-none',
        className
      )}
      {...props}
    >
      {children}
    </ButtonTag>
  )
}
