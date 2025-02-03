import { useRef } from 'react'
import { useMinimap } from '../hooks/useMinimap'

export function Minimap({ scrollContainerRef, of, scale = 0.15 }) {
  const minimapRef = useRef(null)
  const indicatorRef = useRef(null)

  const {
    handleIndicatorMouseDown,
    handleMinimapClick,
    indicatorHeight,
    minimapHeight
  } = useMinimap({ minimapRef, indicatorRef, scrollContainerRef, scale })

  return (
    <div onClick={handleMinimapClick} style={{ position: 'relative' }}>
      {/* The draggable indicator */}
      <div
        ref={indicatorRef}
        onMouseDown={handleIndicatorMouseDown}
        className="absolute bg-white-5a w-full select-none z-90"
        style={{
          // The top position is dynamically set via updateIndicatorPosition.
          height: `${indicatorHeight}px`
        }}
      />
      <div
        ref={minimapRef}
        className="w-screen z-90 origin-top-left pl-10 flex select-none pointer-events-none"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          height: `${minimapHeight}px`
        }}
      >
        {of}
      </div>
    </div>
  )
}
