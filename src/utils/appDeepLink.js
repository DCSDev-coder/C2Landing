import { navigateTo } from './navigation'

/**
 * Handles navigation to the C2 Coffee app or download experience.
 * On Android, attempts to launch the installed app via intent, falling back to /download.
 * On iOS and desktop, seamlessly navigates to /download (or triggers Universal Links)
 * without ever prompting "Safari cannot open the page because the address is invalid".
 */
export function openC2AppOrDownload(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault()
  }

  const isAndroid = /Android/i.test(navigator.userAgent)
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  const downloadUrl = `${window.location.origin}/download`

  if (isAndroid) {
    // Android Intent: attempts app launch via registered package with seamless browser fallback
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
    return
  }

  // On iOS & Desktop:
  // Direct navigation to /download avoids the native Safari alert ("Safari cannot open the page because the address is invalid").
  // If the user has Universal Links configured for the C2 app on their phone, iOS opens the app immediately;
  // otherwise, it smoothly takes the user to the /download page with official App Store and Google Play options.
  if (typeof navigateTo === 'function') {
    navigateTo(event, '/download')
  } else {
    window.location.href = '/download'
  }
}
