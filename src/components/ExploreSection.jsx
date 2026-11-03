import React, { useState } from 'react'
import datoAvatar from '../assets/images/dato.webp'
import datinAvatar from '../assets/images/datin.webp'
import almondIcon from '../assets/About Us/Explore/Almond.webp'
import chocolateIcon from '../assets/About Us/Explore/Chocolate Bar.webp'
import cocoaIcon from '../assets/About Us/Explore/Cocoa.webp'
import './ExploreSection.css'

const blends = [
  {
    id: 'dato',
    title: 'Dato Blend',
    tagline: 'Bold & Smoky',
    roast: 'Medium-Dark Roast',
    badge: 'HOUSE ROAST • 01',
    avatar: datoAvatar,
    tone: 'dato',
    origin: 'Kenya • Indonesia',
    about:
      'Crafted from Kenya and Indonesian beans, delivering a bold, smoky cup with chocolatey depth, toasted nut warmth, and a lingering body.',
    notes: [
      {
        title: 'SMOKY',
        description: 'Deep roasted character with a bold finish',
        icon: cocoaIcon,
        alt: 'Smoky',
      },
      {
        title: 'CHOCOLATEY',
        description: 'Rich cocoa notes that round out the cup',
        icon: chocolateIcon,
        alt: 'Chocolatey',
      },
      {
        title: 'NUTTY & BOLD',
        description: 'Toasted nut character with full body',
        icon: almondIcon,
        alt: 'Nutty and bold',
      },
    ],
  },
  {
    id: 'datin',
    title: 'Datin Blend',
    tagline: 'Chocolatey & Medium Acidity',
    roast: 'Medium-Light Roast',
    badge: 'HOUSE ROAST • 02',
    avatar: datinAvatar,
    tone: 'datin',
    origin: 'Kenya • Papua New Guinea',
    about:
      'Made from beans sourced from Kenya and Papua New Guinea. It offers a chocolate-forward profile with dark grape sweetness and a clean finish.',
    notes: [
      {
        title: 'CHOCOLATE',
        description: 'Smooth chocolate at the front of the cup',
        icon: chocolateIcon,
        alt: 'Chocolate',
      },
      {
        title: 'DARK GRAPE',
        description: 'Subtle dark grape sweetness and depth',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="3" />
            <circle cx="15" cy="9" r="3" />
            <circle cx="7" cy="14" r="3" />
            <circle cx="12" cy="14" r="3" />
            <circle cx="17" cy="14" r="3" />
            <path d="M12 5c0-2 1.2-3 3-3" />
            <path d="M12 2c-1.5 0-2.5.6-3.5 1.8" />
          </svg>
        ),
      },
      {
        title: 'CLEAN',
        description: 'Tidy finish with gentle brightness',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l4 4L19 6" />
          </svg>
        ),
      },
    ],
  },
]

function BlendCard({ blend, isHovered, onHover, onToggle }) {
  return (
    <article
      className={`c2-blend-wide-card c2-blend-wide-card--${blend.tone} ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-label={`${blend.title}. Hover or tap to view tasting notes.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {/* Ambient background glow behind avatar */}
      <div className="c2-blend-wide-card__ambient-glow" aria-hidden="true" />

      {/* Card Content Layout */}
      <div className="c2-blend-wide-card__inner">
        {/* Left Column: Character Persona */}
        <div className="c2-blend-wide-card__persona">
          <div className="c2-blend-wide-card__avatar-box">
            <div className="c2-blend-wide-card__avatar-halo" aria-hidden="true" />
            <img
              src={blend.avatar}
              alt={blend.title}
              className="c2-blend-wide-card__avatar-img"
              loading="lazy"
              draggable={false}
            />
          </div>

          <div className="c2-blend-wide-card__identity">
            <span className="c2-blend-wide-card__roast">{blend.roast}</span>
            <h3 className="c2-blend-wide-card__title">{blend.title}</h3>
            <p className="c2-blend-wide-card__tagline">{blend.tagline}</p>
          </div>
        </div>

        {/* Right Column: Flavor Notes & Story with Staggered Slide-In */}
        <div className="c2-blend-wide-card__flavor">
          <div className="c2-blend-wide-card__flavor-head">
            <span className="c2-blend-wide-card__section-label">Flavor Profile</span>
            <p className="c2-blend-wide-card__story">{blend.about}</p>
          </div>

          {/* 3 Staggered Tasting Note Pills */}
          <div className="c2-blend-wide-card__notes-grid">
            {blend.notes.map((note, index) => (
              <div
                key={note.title}
                className={`c2-flavor-pill c2-flavor-pill--delay-${index}`}
              >
                <div className="c2-flavor-pill__icon">
                  {note.icon ? (
                    <img src={note.icon} alt={note.alt} className="c2-flavor-pill__img" />
                  ) : (
                    note.svg
                  )}
                </div>
                <div className="c2-flavor-pill__text">
                  <span className="c2-flavor-pill__title">{note.title}</span>
                  <span className="c2-flavor-pill__desc">{note.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ExploreSection() {
  const [hoveredMap, setHoveredMap] = useState({})

  const handleHover = (id, state) => {
    setHoveredMap((prev) => ({ ...prev, [id]: state }))
  }

  const handleToggle = (id) => {
    setHoveredMap((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="explore-section" id="explore" aria-label="Explore Our Blends">
      <div className="explore-header">
        <h2 className="explore-header__title">
          Explore Our <em className="explore-header__title-highlight">Blends</em>
        </h2>
        <p className="explore-header__subtitle">
          Crafted With Intention, Inspired By Our Roots,
          <br />
          Made For Your Moments.
        </p>
      </div>

      {/* Spacious, screen-filling wide cards in Clean Cafe Duo styling */}
      <div className="explore-cards-wide-container">
        {blends.map((blend) => (
          <BlendCard
            key={blend.id}
            blend={blend}
            isHovered={Boolean(hoveredMap[blend.id])}
            onHover={(state) => handleHover(blend.id, state)}
            onToggle={() => handleToggle(blend.id)}
          />
        ))}
      </div>
    </section>
  )
}
