import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'
import Collaboration from './pages/Collaboration'
import Tier from './pages/Tier'

function scrollToSection(sectionId) {
  if (!sectionId) {
    return
  }

  const target = document.getElementById(sectionId)
  const navHeight = document.querySelector('.c2-nav__shell')?.getBoundingClientRect().height ?? 0

  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12
  window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' })
}

function App() {
  const getCurrentLocation = () => ({
    pathname: window.location.pathname.replace(/\/+$/, '') || '/',
    hash: window.location.hash,
  })
  const [location, setLocation] = useState(getCurrentLocation)

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(getCurrentLocation())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return
    }

    const sectionId = location.hash.replace(/^#/, '')

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSection(sectionId)
        window.history.replaceState({}, '', '/')
        setLocation(getCurrentLocation())
      })
    })
  }, [location])

  if (location.pathname === '/get-in-touch') {
    return <GetInTouch />
  }

  if (location.pathname === '/collaborations') {
    return <Collaboration />
  }

  if (location.pathname === '/tiers') {
    return <Tier />
  }

  return <Home />
}

export default App
