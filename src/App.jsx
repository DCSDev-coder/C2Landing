import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'
import Collaboration from './pages/Collaboration'
import Merchandise from './pages/Merchandise'
import Tier from './pages/Tier'
import Download from './pages/Download'
import CounterDownload from './pages/CounterDownload'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import DeleteAccount from './pages/DeleteAccount'
import NotFound from './pages/NotFound'
import { notFoundSeo, pageSeo, siteUrl } from './data/seo'
import useScrollReveal from './hooks/useScrollReveal'

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
  useScrollReveal(location.pathname)

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
    const current = pageSeo[location.pathname] || notFoundSeo

    document.title = current.title
    const descMeta = document.querySelector('meta[name="description"]')
    if (descMeta) {
      descMeta.setAttribute('content', current.description)
    }

    const robotsMeta = document.querySelector('meta[name="robots"]')
    if (robotsMeta) {
      robotsMeta.setAttribute('content', current.robots)
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      if (pageSeo[location.pathname]) {
        canonicalLink.setAttribute('href', `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`)
      } else {
        canonicalLink.remove()
      }
    }

    const structuredData = document.querySelector('#structured-data')
    if (structuredData) {
      structuredData.textContent = current.schema ? JSON.stringify(current.schema) : ''
    }
  }, [location.pathname])

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

  if (location.pathname === '/') {
    return <Home />
  }

  const routes = {
    '/get-in-touch': <GetInTouch />,
    '/collaborations': <Collaboration />,
    '/merchandise': <Merchandise />,
    '/tiers': <Tier />,
    '/download': <Download />,
    '/download/counterdownload': <CounterDownload />,
    '/refund-policy': <RefundPolicy />,
    '/privacy-policy': <PrivacyPolicy />,
    '/terms-of-service': <TermsOfService />,
    '/delete-account': <DeleteAccount />,
  }

  return routes[location.pathname] ?? <NotFound />
}

export default App
