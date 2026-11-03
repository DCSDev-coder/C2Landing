export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getSectionIds(items) {
  return items
    .map((item) => item.sectionId)
    .filter(Boolean)
}

function getNavOffset() {
  const navShell = document.querySelector('.c2-nav__shell')
  return navShell ? navShell.getBoundingClientRect().height : 0
}

export function scrollToSection(sectionId, behavior = 'smooth') {
  if (!sectionId) {
    window.scrollTo({ top: 0, behavior })
    return
  }

  let attempts = 0
  const maxAttempts = 20

  const tryScroll = () => {
    const target = document.getElementById(sectionId)

    if (target) {
      const navOffset = getNavOffset()
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 12
      window.scrollTo({ top: Math.max(top, 0), behavior })
      return
    }

    attempts += 1
    if (attempts < maxAttempts) {
      setTimeout(tryScroll, 35)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  tryScroll()
}

export function navigateTo(event, href, sectionId = null) {
  event?.preventDefault?.()

  const currentPath = normalizePath(window.location.pathname)
  const nextPath = normalizePath(new URL(href, window.location.origin).pathname)
  const isSameDestination = currentPath === nextPath

  if (isSameDestination) {
    scrollToSection(sectionId, 'smooth')
    return
  }

  window.history.pushState({}, '', nextPath)
  window.dispatchEvent(new PopStateEvent('popstate'))

  // Wait for React route component to mount, then scroll smoothly to the target section
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      if (sectionId) {
        scrollToSection(sectionId, 'smooth')
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }, 40)
  })
}

export function getActiveHomeSection(sectionIds) {
  if (typeof window === 'undefined') {
    return sectionIds[0] ?? null
  }

  const navOffset = getNavOffset()
  let activeSection = sectionIds[0] ?? null

  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const rect = section.getBoundingClientRect()

    const isVisibleInViewport = rect.bottom >= navOffset + 24 && rect.top <= window.innerHeight - 24

    if (isVisibleInViewport) {
      activeSection = sectionId
    }
  })

  return activeSection
}

export function isHrefActive(href, currentPath, sectionId = null, activeSectionId = null) {
  const path = normalizePath(new URL(href, window.location.origin).pathname)
  if (path !== currentPath) {
    return false
  }

  if (currentPath === '/') {
    return sectionId ? sectionId === activeSectionId : false
  }

  return true
}
