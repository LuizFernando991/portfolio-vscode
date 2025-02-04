import { useHorizontalScroll } from '../../hooks/useHorizontalSroll'
import { useTabContext } from '../../hooks/useTabContext'
import { useTabBar } from '../../hooks/useTabBar'
import { Tab } from './Tab'

export function TabBar() {
  const scrollRef = useHorizontalScroll()
  const tabs = useTabContext()
  const {
    draggedIndex,
    handleDragOver,
    handleDrop,
    handleTabDragStart,
    targetIndex,
    targetPosition,
    handleDragEnd
  } = useTabBar({ tabs, scrollRef })

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
