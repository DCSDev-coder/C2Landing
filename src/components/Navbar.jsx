import React, { useEffect, useState } from 'react'
import logo from '../assets/images/C2HeaderLogo.png'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const navItems = ['ABOUT', 'GET IN TOUCH', 'COLLABORATIONS', 'TIERS', 'DOWNLOAD']

  useEffect(() => {
    const syncHeroState = () => {
      const hero = document.querySelector('.hero')

      if (!hero) {
        setIsPastHero(false)
        return
      }

      const heroBottom = hero.getBoundingClientRect().bottom
      setIsPastHero(heroBottom <= 113)
    }

    syncHeroState()
    window.addEventListener('scroll', syncHeroState, { passive: true })
    window.addEventListener('resize', syncHeroState)

    return () => {
      window.removeEventListener('scroll', syncHeroState)
      window.removeEventListener('resize', syncHeroState)
    }
  }, [])

  return (
    <nav className={`c2-nav ${isPastHero ? 'c2-nav--past-hero' : 'c2-nav--in-hero'}`}>
      <div className="c2-nav__shell">
        <div className="c2-nav__bar">
          <div className="c2-nav__brand">
            <img
              src={logo}
              alt="C2 Coffee Logo"
              className="c2-nav__logo"
            />
          </div>

          <div className="c2-nav__desktop">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`c2-nav__link ${item === 'ABOUT' ? 'c2-nav__link--active' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="c2-nav__toggle"
            aria-label="Toggle Menu"
          >
            <svg
              className="c2-nav__toggleIcon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`c2-nav__mobile ${isOpen ? 'c2-nav__mobile--open' : 'c2-nav__mobile--closed'}`}>
        <div className="c2-nav__mobileList">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsOpen(false)}
              className="c2-nav__mobileLink"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
