import classNames from 'classnames'

export function Header({ headingLevel, className, text }) {
  const Tag = `h${headingLevel}`

  return (
    <Tag
      className={classNames('text-purple', className)}
    >{`${'#'.repeat(headingLevel)} ${text}`}</Tag>
  )
}
