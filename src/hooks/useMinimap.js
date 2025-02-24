import { useCallback, useEffect, useState } from 'react'

export function useMinimap({
  scrollContainerRef,
  indicatorRef,
  minimapRef,
  scale
}) {
  const [indicatorHeight, setIndicatorHeight] = useState(40)
  const [minimapHeight, setMinimapHeight] = useState(0)

  const updateIndicatorPosition = useCallback(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer || !indicatorRef.current) return

    const scrollPercentage =
      scrollContainer.scrollTop /
      (scrollContainer.scrollHeight - scrollContainer.clientHeight)

    const maxTop = Math.max(minimapHeight - indicatorHeight, 0)
    const newTop = scrollPercentage ? scrollPercentage * maxTop : 0

    indicatorRef.current.style.top = `${newTop}px`
  }, [scrollContainerRef, indicatorRef, indicatorHeight, minimapHeight])

  const updateMinimapSize = useCallback(() => {
    const minimapContainer = minimapRef.current
    const scrollContainer = scrollContainerRef.current
    if (!minimapContainer || !scrollContainer) return

    const viewHeightPercent =
      scrollContainer.clientHeight / scrollContainer.scrollHeight

    const newIndicatorHeight =
      minimapContainer.scrollHeight * scale * viewHeightPercent

    const newMinimapheight = minimapContainer.scrollHeight * scale

    setIndicatorHeight(newIndicatorHeight)
    setMinimapHeight(newMinimapheight, newIndicatorHeight)
  }, [scale, scrollContainerRef, minimapRef])

  const calculateScroll = useCallback(
    (clientY) => {
      const rect = minimapRef.current.getBoundingClientRect()
      const yPosition = clientY - rect.top
      const scrollRatio = yPosition / minimapHeight
      return scrollRatio * scrollContainerRef.current.scrollHeight
    },
    [scrollContainerRef, minimapHeight, minimapRef]
  )

  const handleMinimapClick = (e) => {
    if (e.target === indicatorRef.current) return

    const targetScroll = calculateScroll(e.clientY)
    scrollContainerRef.current.scrollTo({
      top: targetScroll - scrollContainerRef.current.clientHeight / 2
    })
  }

  const handleIndicatorMouseDown = (e) => {
    e.preventDefault()
    const minimapRect = minimapRef.current.getBoundingClientRect()

    const offsetY = e.clientY - indicatorRef.current.getBoundingClientRect().top

    const handleMouseMove = (moveEvent) => {
      // Get the new Y position relative to the minimap container.
      const minimapY = moveEvent.clientY - minimapRect.top - offsetY
      // Clamp the new position within valid bounds.
      const clampedY = Math.max(
        0,
        Math.min(minimapY, minimapHeight - indicatorHeight)
      )
      // Calculate the new scroll percentage.
      const scrollPercentage = clampedY / (minimapHeight - indicatorHeight)
      const scrollContainer = scrollContainerRef.current
      if (!scrollContainer) return
      const newScrollTop =
        scrollPercentage *
        (scrollContainer.scrollHeight - scrollContainer.clientHeight)
      // Scroll the container accordingly.
      scrollContainer.scrollTo({ top: newScrollTop })
    }

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver(updateMinimapSize)
    resizeObserver.observe(container)

    updateMinimapSize()

    container.addEventListener('scroll', updateIndicatorPosition)
    window.addEventListener('resize', updateMinimapSize)
    return () => {
      resizeObserver.disconnect()
      container.removeEventListener('scroll', updateIndicatorPosition)
      window.removeEventListener('resize', updateMinimapSize)
    }
  }, [scrollContainerRef, updateMinimapSize, updateIndicatorPosition])

  return {
    minimapHeight,
    indicatorHeight,
    handleIndicatorMouseDown,
    handleMinimapClick
  }
}
