import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GetInTouch from './pages/GetInTouch'
import Collaboration from './pages/Collaboration'
import Tier from './pages/Tier'
import Download from './pages/Download'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import DeleteAccount from './pages/DeleteAccount'
import NotFound from './pages/NotFound'

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
    const pageMeta = {
      '/': {
        title: 'C2 Coffee + Candle | Coffee Shop, Signature Blends, Barista Drinks & Cafe Moments',
        description: 'C2 Coffee + Candle is a coffee shop in Eco Forest, Semenyih serving signature blends, barista-crafted drinks, mocktails, matcha, chocolate, and warm cafe experiences.',
      },
      '/download': {
        title: 'Download App | C2 Coffee + Candle Mobile Ordering & Loyalty Rewards',
        description: 'Download the official C2 Coffee + Candle app on Google Play to order drinks, earn coffee tokens, unlock VIP tiers, and enjoy seamless cafe pickups.',
      },
      '/get-in-touch': {
        title: 'Get In Touch & Visit Us | C2 Coffee + Candle Eco Forest Semenyih',
        description: 'Find directions, opening hours, and contact details for C2 Coffee + Candle in Eco Forest, Semenyih, Selangor. Dine in or take away today.',
      },
      '/collaborations': {
        title: 'Collaborations & Events | C2 Coffee + Candle Partner Programs',
        description: 'Partner with C2 Coffee + Candle for popups, brand collaborations, creative events, and sensory coffee + candle activations.',
      },
      '/tiers': {
        title: 'C2 Loyalty Tiers & Rewards | Member Perks & Exclusive Benefits',
        description: 'Explore C2 Coffee member tiers from Bronze to Black Diamond. Enjoy complimentary coffee tokens, birthday perks, and member-only specials.',
      },
      '/privacy-policy': {
        title: 'Privacy Policy | C2 Coffee + Candle',
        description: 'Privacy Policy and data practices for C2 Coffee + Candle website and mobile app users.',
      },
      '/terms-of-service': {
        title: 'Terms of Service | C2 Coffee + Candle',
        description: 'Terms of Service for C2 Coffee + Candle website, services, and mobile ordering.',
      },
      '/refund-policy': {
        title: 'Refund Policy | C2 Coffee + Candle',
        description: 'Customer refund, return, and cancellation policies for C2 Coffee + Candle orders.',
      },
      '/delete-account': {
        title: 'Delete Account | C2 Coffee + Candle Mobile App',
        description: 'Request account deletion and data removal for your C2 Coffee mobile application account.',
      },
    }

    const current = pageMeta[location.pathname] || {
      title: 'C2 Coffee + Candle | Eco Forest, Semenyih',
      description: 'C2 Coffee + Candle specialty coffee and lifestyle cafe in Eco Forest, Semenyih.',
    }

    document.title = current.title
    const descMeta = document.querySelector('meta[name="description"]')
    if (descMeta) {
      descMeta.setAttribute('content', current.description)
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://c2coffeeandcandle.com${location.pathname === '/' ? '' : location.pathname}`)
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
    '/tiers': <Tier />,
    '/download': <Download />,
    '/refund-policy': <RefundPolicy />,
    '/privacy-policy': <PrivacyPolicy />,
    '/terms-of-service': <TermsOfService />,
    '/delete-account': <DeleteAccount />,
  }

  return routes[location.pathname] ?? <NotFound />
}

export default App
