import { useEffect } from 'react'
import { useHorizontalScroll } from '../../hooks/useHorizontalSroll'
import { useTabContext } from '../../hooks/useTabContext'
import { Tab } from './Tab'

export function TabBar() {
  const scrollRef = useHorizontalScroll()
  const tabs = useTabContext()
  const selectedTab = tabs.current ? tabs.current.name : null

  useEffect(() => {
    if (selectedTab) {
      const tab = document.querySelector(`[data-tab="${selectedTab}"]`)
      tab?.scrollIntoView()
    }
  }, [selectedTab])

  if (tabs.tabList.length < 1) return

  return (
    <div
      ref={scrollRef}
      className="bg-dark-700 flex font-medium text-lg h-[38px] grow select-none overflow-x-auto scrollbar-hide"
    >
      {tabs.tabList.map((tab) => (
        <Tab tab={tab} key={tab.name} />
      ))}
    </div>
  )
}
