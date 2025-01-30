import { useTabContext } from '../hooks/useTabContext'

export function TabLink({ tab, className, children }) {
  const tabs = useTabContext()

  return (
    <button onClick={() => tabs.addTab(tab)} className={className}>
      {children}
    </button>
  )
}
