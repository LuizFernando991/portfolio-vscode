import classNames from 'classnames'

export function Text({ as, className, children }) {
  const TextTag = as || 'p'

  return (
    <TextTag className={classNames('break-words whitespace-normal', className)}>
      {children}
    </TextTag>
  )
}
