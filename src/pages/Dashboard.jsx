import { Navbar } from '../components/Navbar'
import { NoTab } from '../components/NoTab'
import { useTabContext } from '../hooks/useTabContext'

export function Dashboard() {
  const tabs = useTabContext()

  return (
    <div className="font-sans relative w-full h-full flex overflow-hidden">
      <div className="flex-1 flex flex-col w-full overflow-hidden gap-2">
        <Navbar />
        {tabs.current ? tabs.current.component : <NoTab />}
      </div>
    </div>
  )
}
