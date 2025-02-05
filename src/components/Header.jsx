import classNames from 'classnames'

export function Header({ headingLevel, className, text, children }) {
  const Tag = `h${headingLevel}`

  return (
    <Tag className={classNames('text-purple', className)}>
      {`${'#'.repeat(headingLevel)}${text}`}
      {children}
    </Tag>
  )
}
