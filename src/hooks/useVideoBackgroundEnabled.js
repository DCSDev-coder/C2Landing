import { useEffect, useState } from 'react'

export default function useVideoBackgroundEnabled() {
  const getInitialState = () => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches

    return !prefersReducedMotion && !isMobileViewport
  }

  const [isEnabled, setIsEnabled] = useState(getInitialState)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileViewportQuery = window.matchMedia('(max-width: 767px)')

    const syncState = () => {
      setIsEnabled(!reducedMotionQuery.matches && !mobileViewportQuery.matches)
    }

    syncState()

    reducedMotionQuery.addEventListener('change', syncState)
    mobileViewportQuery.addEventListener('change', syncState)

    return () => {
      reducedMotionQuery.removeEventListener('change', syncState)
      mobileViewportQuery.removeEventListener('change', syncState)
    }
  }, [])

  return isEnabled
}
