import classNames from 'classnames'

export function Section({ className, children }) {
  return (
    <div className={classNames('space-y-3 mb-8', className)}>{children}</div>
  )
}
