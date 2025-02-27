import { createContext } from 'react'
import { useState, useCallback } from 'react'
import { tabsContent } from '../utils/tabs'

const initialTabs = [tabsContent.home, tabsContent.about]

export const TabContext = createContext()

export function TabProvider({ children }) {
  const [tabHistory, setTabHistory] = useState(initialTabs)
  const [tabList, setTabList] = useState(initialTabs)

  const addTab = useCallback(
    (tab) => {
      if (!tabList.find((t) => t.name === tab.name)) {
        setTabList((prev) => [...prev, tab])
      }

      switchTabs(tab)
    },
    [tabList]
  )

  const removeTab = (tab) => {
    setTabList((prev) => prev.filter((t) => t.name !== tab.name))
    setTabHistory((prev) => prev.filter((t) => t.name !== tab.name))
  }

  const reorderTabs = useCallback((newOrder) => {
    setTabList(newOrder)
  }, [])

  const switchTabs = (tab) => {
    setTabHistory((prev) => [tab, ...prev.filter((t) => t.name !== tab.name)])
  }

  const value = {
    current: tabHistory[0],
    tabList,
    addTab,
    removeTab,
    switchTabs,
    reorderTabs
  }

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}
