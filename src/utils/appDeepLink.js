import { navigateTo } from './navigation'

/**
 * Handles deep linking into the C2 Coffee mobile application.
 * If installed on the user's mobile device, it opens the app directly.
 * If the app is not installed (or if viewed on desktop), it seamlessly routes to the download page.
 */
export function openC2AppOrDownload(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault()
  }

  const isAndroid = /Android/i.test(navigator.userAgent)
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  const downloadUrl = `${window.location.origin}/download`

  if (isAndroid) {
    // Chrome Android Intent format: attempts app launch via package name, with browser fallback
    const androidIntent = `intent://c2coffeeandcandle.com/menu#Intent;scheme=c2coffee;package=com.c2coffeeandcandle.customer;S.browser_fallback_url=${encodeURIComponent(downloadUrl)};end`
    
    const startTime = Date.now()
    window.location.href = androidIntent

    setTimeout(() => {
      if (document.hidden || Date.now() - startTime > 1800) {
        return
      }
      if (typeof navigateTo === 'function') {
        navigateTo(null, '/download')
      } else {
        window.location.href = '/download'
      }
    }, 1200)
  } else if (isIOS) {
    // iOS custom URI scheme with timeout fallback to download page
    const startTime = Date.now()
    window.location.href = 'c2coffee://menu'

    setTimeout(() => {
      if (document.hidden || Date.now() - startTime > 1800) {
        return
      }
      if (typeof navigateTo === 'function') {
        navigateTo(null, '/download')
      } else {
        window.location.href = '/download'
      }
    }, 1200)
  } else {
    // Desktop devices smoothly route to the app download page
    if (typeof navigateTo === 'function') {
      navigateTo(event, '/download')
    } else {
      window.location.href = '/download'
    }
  }
}

