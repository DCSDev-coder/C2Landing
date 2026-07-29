import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'
import Collaboration from './pages/Collaboration'
import Tier from './pages/Tier'

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
