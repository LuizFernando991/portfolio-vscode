import { useLayoutEffect, useState } from 'react'

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export function useBreakpoint(ref) {
  const [width, setWidth] = useState(0)
  const [breakpoint, setBreakpoint] = useState('xs')

  function getBreakpoint(width) {
    if (width >= breakpoints['2xl']) return '2xl'
    if (width >= breakpoints.xl) return 'xl'
    if (width >= breakpoints.lg) return 'lg'
    if (width >= breakpoints.md) return 'md'
    if (width >= breakpoints.sm) return 'sm'
    return 'xs'
  }

  useLayoutEffect(() => {
    const container = ref?.current
    if (!container) return

    const updateSize = () => {
      const newWidth = container.clientWidth
      setWidth(newWidth)
      setBreakpoint(getBreakpoint(newWidth))
    }

    updateSize()

    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })

    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [ref])

  function isBreakpoint(breakpointKey) {
    const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    const currentIndex = orderedBreakpoints.indexOf(breakpoint)
    const targetIndex = orderedBreakpoints.indexOf(breakpointKey)

    return currentIndex >= targetIndex
  }

  return {
    width,
    breakpoint,
    isBreakpoint
  }
}
