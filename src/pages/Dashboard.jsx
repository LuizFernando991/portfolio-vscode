import { useEffect, useRef } from 'react'
import { Navbar } from '../components/Navbar'
import { useTabContext } from '../hooks/useTabContext'

export function Dashboard() {
  const tabs = useTabContext()
  const tabRef = useRef(null)

  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.scrollTo({ top: 0, behaviour: 'smooth' })
    }
  }, [tabs])

  return (
    <div className="font-sans relative w-full h-full flex overflow-hidden">
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <Navbar />
        {tabs.current ? (
          <div
            ref={tabRef}
            className="h-full font-mono pt-2 pb-[100px] px-2 overflow-y-auto flex-1"
          >
            <div className="w-full h-full">{tabs.current.component}</div>
          </div>
        ) : (
          <div>Não tem tab</div>
        )}
      </div>
    </div>
  )
}
