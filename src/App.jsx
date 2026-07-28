import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'

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

  return <Home />
}

export default App
