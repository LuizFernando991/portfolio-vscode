import classNames from 'classnames'

export function BreakLine({ className }) {
  return <hr className={classNames('border-dark-200 my-3', className)} />
}
