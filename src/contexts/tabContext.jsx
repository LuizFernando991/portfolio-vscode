import { createContext } from 'react'
import { useState, useCallback } from 'react'

const initialTabs = [
  { name: 'Home', type: 'file', extension: 'js' },
  { name: 'Teste', type: 'file', extension: 'js' },
  {
    name: 'Teste2',
    type: 'file',
    extension: 'js',
    component: <div>Place holder</div>
  }
]

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

  const switchTabs = (tab) => {
    setTabHistory((prev) => [tab, ...prev.filter((t) => t.name !== tab.name)])
  }

  const value = {
    current: tabHistory[0],
    tabList,
    addTab,
    removeTab,
    switchTabs
  }

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}
