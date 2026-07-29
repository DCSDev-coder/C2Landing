export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

function parseHref(href) {
  const url = new URL(href, window.location.origin)

  return {
    path: normalizePath(url.pathname),
    hash: url.hash,
  }
}

function getNavOffset() {
  const navShell = document.querySelector('.c2-nav__shell')
  return navShell ? navShell.getBoundingClientRect().height : 0
}

function scrollToHash(hash, behavior = 'smooth') {
  if (!hash) {
    window.scrollTo({ top: 0, behavior })
    return
  }

  const target = document.querySelector(hash)

  if (!target) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset() - 12
  window.scrollTo({ top: Math.max(top, 0), behavior })
}

export function navigateTo(event, href) {
  event?.preventDefault?.()

  const currentPath = normalizePath(window.location.pathname)
  const currentHash = window.location.hash
  const { path, hash } = parseHref(href)
  const isSameDestination = currentPath === path && currentHash === hash

  if (isSameDestination) {
    scrollToHash(hash, 'smooth')
    return
  }

  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (hash) {
        scrollToHash(hash, 'smooth')
        return
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  })
}

export function isHrefActive(href, currentPath, currentHash) {
  const { path, hash } = parseHref(href)

  if (path !== currentPath) {
    return false
  }

  if (!hash) {
    return !currentHash
  }

  if (hash === '#about' && currentPath === '/' && !currentHash) {
    return true
  }

  return currentHash === hash
}
