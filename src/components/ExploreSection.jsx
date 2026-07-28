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
    description: 'Bold & Dark Chocolatey',
    backgroundImage: datoBg,
    avatar: datoAvatar,
    tone: 'dato',
    about:
      'Inspired by heritage and leadership, Dato blend delivers a bold character with rich note of dark chocolate and a smooth, lasting finish. Perfect for those who prefer a stronger, more intense experience.',
    origin: 'Kenya \u2022 Indonesia',
    notes: [
      {
        title: 'DARK CHOCOLATE',
        description: 'Rich & indulgent chocolate notes.',
        icon: chocolateIcon,
        alt: 'Dark Chocolate',
      },
      {
        title: 'ROASTED COCOA',
        description: 'Deep cocoa-like warmth.',
        icon: cocoaIcon,
        alt: 'Roasted Cocoa',
      },
      {
        title: 'TOASTED NUTS',
        description: 'Suitable nuttiness for a balanced finish.',
        icon: almondIcon,
        alt: 'Toasted Nuts',
      },
    ],
  },
  {
    id: 'datin',
    title: 'Datin Blend',
    description: 'Citrus & Fruity',
    backgroundImage: datinBg,
    avatar: datinAvatar,
    tone: 'datin',
    about:
      'Inspired by grace and tradition, Datin blend features a bright and refreshing character. It boasts prominent citrus notes and a sweet, fruity undertone, leaving a clean, crisp finish. Ideal for those who enjoy a lively, aromatic cup.',
    origin: 'Ethiopia \u2022 Colombia',
    notes: [
      {
        title: 'CITRUS',
        description: 'Bright lemon and orange zestiness.',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20M12 12l7.07-7.07M12 12l-7.07 7.07M12 12l-7.07-7.07M12 12l7.07 7.07" />
          </svg>
        ),
      },
      {
        title: 'FRUITY',
        description: 'Sweet berry-like undertones.',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0-3 3" />
          </svg>
        ),
      },
      {
        title: 'FLORAL',
        description: 'Delicate jasmine aroma.',
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4z" />
            <circle cx="12" cy="6" r="1.5" />
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
