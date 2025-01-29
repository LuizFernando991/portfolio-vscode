import { useCallback, useEffect, useState } from 'react'
import { useHorizontalScroll } from '../../hooks/useHorizontalSroll'
import { useTabContext } from '../../hooks/useTabContext'
import { Tab } from './Tab'

export function TabBar() {
  const scrollRef = useHorizontalScroll()
  const tabs = useTabContext()
  const selectedTab = tabs.current ? tabs.current.name : null
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [targetIndex, setTargetIndex] = useState(null)
  const [targetPosition, setTargetPosition] = useState(null)

  const handleTabDragStart = useCallback((index) => {
    setDraggedIndex(index)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null)
    setTargetIndex(null)
  }, [])

  const getTargetIndex = useCallback(
    (e) => {
      const scrollContainer = scrollRef.current
      const rect = scrollContainer.getBoundingClientRect()
      const x = e.clientX - rect.left + scrollContainer.scrollLeft

      const tabs = Array.from(scrollContainer.children)
      let accumulatedWidth = 0

      for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i]
        const tabWidth = tab.offsetWidth
        const start = accumulatedWidth
        const end = start + tabWidth

        if (x < end) {
          const midpoint = start + tabWidth / 2
          const position = x < midpoint ? 'left' : 'right'
          return { index: i, position }
        }
        accumulatedWidth = end
      }

      return { index: tabs.length - 1, position: 'right' }
    },
    [scrollRef]
  )

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault()
      const { index, position } = getTargetIndex(e)
      setTargetIndex(index)
      setTargetPosition(position)
    },
    [getTargetIndex]
  )

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      const draggedIdx = parseInt(e.dataTransfer.getData('text/plain'), 10)
      const { index: targetIdx, position } = getTargetIndex(e)

      let insertIndex = position === 'left' ? targetIdx : targetIdx + 1

      if (draggedIdx < insertIndex) {
        insertIndex--
      }

      if (draggedIdx === insertIndex) {
        handleDragEnd()
        return
      }

      const newTabList = [...tabs.tabList]
      const [draggedTab] = newTabList.splice(draggedIdx, 1)
      newTabList.splice(insertIndex, 0, draggedTab)
      tabs.reorderTabs(newTabList)
      handleDragEnd()
    },
    [tabs, getTargetIndex, handleDragEnd]
  )

  useEffect(() => {
    if (selectedTab) {
      const tab = document.querySelector(`[data-tab="${selectedTab}"]`)
      tab?.scrollIntoView()
    }
  }, [selectedTab])

  if (tabs.tabList.length < 1) return null

  return (
    <div
      ref={scrollRef}
      className="bg-dark-700 flex font-medium text-lg h-[36px] grow select-none overflow-x-auto scrollbar-hide"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
    >
      {tabs.tabList.map((tab, index) => {
        const showLeftBorder =
          (targetIndex === index && targetPosition === 'left') ||
          (targetIndex === index - 1 && targetPosition === 'right')
        const showRightBorder =
          (targetIndex === index && targetPosition === 'right') ||
          (targetIndex === index + 1 && targetPosition === 'left')

        return (
          <Tab
            tab={tab}
            key={tab.name}
            index={index}
            onDragStart={() => handleTabDragStart(index)}
            isDragging={index === draggedIndex}
            showLeftBorder={showLeftBorder}
            showRightBorder={showRightBorder}
          />
        )
      })}
    </div>
  )
}
