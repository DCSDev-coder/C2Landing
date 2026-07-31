import React, { useMemo, useRef, useState } from 'react'
import datoBg from '../assets/About Us/Explore/image 47.png'
import datinBg from '../assets/About Us/Explore/image 45.png'
import datoAvatar from '../assets/About Us/Explore/dato 2.png'
import datinAvatar from '../assets/About Us/Explore/image 46.png'
import almondIcon from '../assets/About Us/Explore/Almond.png'
import chocolateIcon from '../assets/About Us/Explore/Chocolate Bar.png'
import cocoaIcon from '../assets/About Us/Explore/Cocoa.png'
import './ExploreSection.css'

const blends = [
  {
    id: 'dato',
    title: 'Dato Blend',
    description: 'Bold & Smoky',
    backgroundImage: datoBg,
    avatar: datoAvatar,
    tone: 'dato',
    about:
      'Dato Blend is a medium-dark roast crafted from beans sourced from Kenya and Indonesia. It delivers a bold, smoky cup with chocolatey depth, nutty warmth, and a strong finish for drinkers who prefer a fuller-bodied profile.',
    origin: 'Kenya \u2022 Indonesia',
    notes: [
      {
        title: 'SMOKY',
        description: 'Deep roasted character with a bold, smoky finish.',
        icon: cocoaIcon,
        alt: 'Smoky',
      },
      {
        title: 'CHOCOLATEY',
        description: 'Rich chocolate notes that round out the cup.',
        icon: chocolateIcon,
        alt: 'Chocolatey',
      },
      {
        title: 'NUTTY & BOLD',
        description: 'Toasted nut character with a strong, lingering body.',
        icon: almondIcon,
        alt: 'Nutty and bold',
      },
    ],
  },
  {
    id: 'datin',
    title: 'Datin Blend',
    description: 'Chocolatey & Medium Acidity',
    backgroundImage: datinBg,
    avatar: datinAvatar,
    tone: 'datin',
    about:
      'Datin Blend is a medium-light roast made from beans sourced from Kenya and Papua New Guinea. It offers a chocolate-forward profile with a hint of dark grape, balanced by medium acidity and a clean finish.',
    origin: 'Kenya \u2022 Papua New Guinea',
    notes: [
      {
        title: 'CHOCOLATE',
        description: 'Smooth chocolate notes at the front of the cup.',
        icon: chocolateIcon,
        alt: 'Chocolate',
      },
      {
        title: 'HINT OF DARK GRAPE',
        description: 'A subtle dark grape note that adds brightness and depth.',
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
        description: 'A tidy finish with medium acidity and good clarity.',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l4 4L19 6" />
          </svg>
        ),
      },
    ],
  },
]

function DetailPanel({ blend, isActive, onClose, onTouchStart, onTouchEnd }) {
  const handlePanelTouchStart = (event) => {
    if (event.target.closest('.detail-panel__close')) {
      return
    }

    onTouchStart?.(event)
  }

  const handlePanelTouchEnd = (event) => {
    if (event.target.closest('.detail-panel__close')) {
      return
    }

    onTouchEnd?.(event)
  }

  return (
    <div
      className={`detail-panel ${isActive ? 'is-active' : ''}`}
      onTouchStart={handlePanelTouchStart}
      onTouchEnd={handlePanelTouchEnd}
    >
      {blend && (
        <div className="detail-panel__content">
          <button
            type="button"
            className="detail-panel__close"
            onClick={onClose}
            onMouseDown={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              event.preventDefault()
              event.stopPropagation()
            }}
            onTouchEnd={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onClose(event)
            }}
            aria-label="Close details"
          >
            {'\u00D7'}
          </button>

          <h3 className="detail-panel__title">
            About <em className="detail-panel__title-highlight">This Blends.</em>
          </h3>

          <div className="detail-panel__scroll-area">
            <p className="detail-panel__description">{blend.about}</p>

            <div className="detail-panel__divider" />

            <h4 className="detail-panel__section-title">Tasting Notes</h4>

            <div className="detail-panel__notes-grid">
              {blend.notes.map((note) => (
                <div className="tasting-note" key={note.title}>
                  <div className="tasting-note__icon">
                    {note.icon ? (
                      <img src={note.icon} alt={note.alt} className="tasting-note__png" />
                    ) : (
                      note.svg
                    )}
                  </div>
                  <div className="tasting-note__info">
                    <span className="tasting-note__name">{note.title}</span>
                    <span className="tasting-note__desc">{note.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="detail-panel__divider" />

            <h4 className="detail-panel__section-title">Origin</h4>
            <p className="detail-panel__origin-value">{blend.origin}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function BlendCard({ blend, isDimmed, onSelect, mobile = false, slideDirection = 'right' }) {
  return (
    <button
      type="button"
      className={`blend-card blend-card--${blend.tone} ${isDimmed ? 'is-dull' : ''} ${
        mobile ? `blend-card--mobile blend-card--slide-${slideDirection}` : ''
      }`}
      onClick={() => onSelect(blend.id)}
      style={{ backgroundImage: `url(${blend.backgroundImage})` }}
      aria-label={`${blend.title}: ${blend.description}`}
    >
      <div className="blend-card__avatar-container">
        <img src={blend.avatar} alt="" className="blend-card__avatar" />
      </div>

      <div className="blend-card__info">
        <h3 className="blend-card__title">{blend.title}</h3>
        <p className="blend-card__description">{blend.description}</p>
        <span className="blend-card__link">{'View Details \u2192'}</span>
      </div>
    </button>
  )
}

export default function ExploreSection() {
  const [selectedBlendId, setSelectedBlendId] = useState(null)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('right')
  const touchStartXRef = useRef(null)
  const suppressTapRef = useRef(false)

  const activeMobileBlend = blends[mobileIndex]
  const selectedBlend = useMemo(
    () => blends.find((blend) => blend.id === selectedBlendId) ?? null,
    [selectedBlendId],
  )

  const handleSelect = (blendId) => {
    if (suppressTapRef.current) {
      suppressTapRef.current = false
      return
    }

    setSelectedBlendId((current) => (current === blendId ? null : blendId))
  }

  const handleClose = (event) => {
    event?.preventDefault?.()
    event?.stopPropagation?.()
    setSelectedBlendId(null)
  }

  const syncMobileBlend = (nextIndex, direction) => {
    const normalizedIndex = (nextIndex + blends.length) % blends.length
    const nextBlend = blends[normalizedIndex]

    setSlideDirection(direction)
    setMobileIndex(normalizedIndex)

    if (selectedBlendId) {
      setSelectedBlendId(nextBlend.id)
    }
  }

  const handleDotSelect = (index) => {
    if (index === mobileIndex) {
      return
    }

    syncMobileBlend(index, index > mobileIndex ? 'right' : 'left')
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX
    suppressTapRef.current = false
  }

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return
    }

    const deltaX = touchStartXRef.current - event.changedTouches[0].clientX
    touchStartXRef.current = null

    if (Math.abs(deltaX) < 42) {
      return
    }

    suppressTapRef.current = true

    if (deltaX > 0) {
      syncMobileBlend(mobileIndex + 1, 'right')
      return
    }

    syncMobileBlend(mobileIndex - 1, 'left')
  }

  return (
    <section className="explore-section" id="explore">
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

      <div className="explore-mobileCarousel">
        <div className="explore-mobileFrame">
          <div className="explore-mobileCardWrap" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <BlendCard
              key={activeMobileBlend.id}
              blend={activeMobileBlend}
              onSelect={handleSelect}
              mobile
              slideDirection={slideDirection}
            />
          </div>
        </div>

        <div className="explore-mobileDots" aria-label="Blend selection">
          {blends.map((blend, index) => (
            <button
              key={blend.id}
              type="button"
              className={`explore-mobileDot ${index === mobileIndex ? 'is-active' : ''}`}
              onClick={() => handleDotSelect(index)}
              aria-label={`Show blend ${index + 1}`}
              aria-pressed={index === mobileIndex}
            />
          ))}
        </div>

        <DetailPanel
          key={selectedBlend?.id ?? 'mobile-empty'}
          blend={selectedBlend}
          isActive={Boolean(selectedBlend)}
          onClose={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      </div>

      <div className={`explore-grid ${selectedBlend ? 'has-selection' : ''}`}>
        <BlendCard blend={blends[0]} isDimmed={selectedBlendId === 'datin'} onSelect={handleSelect} />

        <DetailPanel
          key={selectedBlend?.id ?? 'desktop-empty'}
          blend={selectedBlend}
          isActive={Boolean(selectedBlend)}
          onClose={handleClose}
        />

        <BlendCard blend={blends[1]} isDimmed={selectedBlendId === 'dato'} onSelect={handleSelect} />
      </div>
    </section>
  )
}
