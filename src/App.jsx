import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'
import Collaboration from './pages/Collaboration'

function App() {
  const getCurrentPath = () => window.location.pathname.replace(/\/+$/, '') || '/'
  const [path, setPath] = useState(getCurrentPath)

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(getCurrentPath())
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  if (path === '/get-in-touch') {
    return <GetInTouch />
  }

  if (path === '/collaborations') {
    return <Collaboration />
  }

  return <Home />
}

export default App
