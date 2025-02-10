export function Header({ headingLevel, className, text, children }) {
  const Tag = `h${headingLevel}`

  return (
    <Tag className={className}>
      {`${'#'.repeat(headingLevel)}${text}`}
      {children}
    </Tag>
  )
}
