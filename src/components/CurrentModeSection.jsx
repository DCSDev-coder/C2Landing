import React, { useState } from 'react'
import currentModeDrink from '../assets/About Us/CurrentMode/currentmode-drink.png'
import './CurrentModeSection.css'

const drinks = [
  {
    id: 'mont-broga',
    name: 'Mont Broga',
    description: 'Black coffee layered with orange cold foam and orange zest.',
    image: currentModeDrink,
  },
]

export default function CurrentModeSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [slideDirection, setSlideDirection] = useState('right')
  const activeDrink = drinks[activeIndex]

  const goPrev = () => {
    setSlideDirection('left')
    setActiveIndex((current) => (current - 1 + drinks.length) % drinks.length)
  }

  const goNext = () => {
    setSlideDirection('right')
    setActiveIndex((current) => (current + 1) % drinks.length)
  }

  const handleDotSelect = (index) => {
    if (index === activeIndex) {
      return
    }

    setSlideDirection(index > activeIndex ? 'right' : 'left')
    setActiveIndex(index)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.changedTouches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return
    }

    const deltaX = touchStartX - event.changedTouches[0].clientX
    setTouchStartX(null)

    if (Math.abs(deltaX) < 40) {
      return
    }

    if (deltaX > 0) {
      goNext()
      return
    }

    goPrev()
  }

  return (
    <section className="current-mode" id="current-mood" aria-labelledby="current-mode-title">
      <div className="current-mode__inner">
        <header className="current-mode__header">
          <h2 className="current-mode__title" id="current-mode-title" aria-label="Pick Your Current Mood.">
            <span className="current-mode__title-top">Pick Your</span>
            {' '}
            <em className="current-mode__title-accent">Current Mood.</em>
          </h2>
        </header>

        <div className="current-mode__mobileCarousel">
          <div
            className="current-mode__mobileCardWrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <article
              key={activeDrink.id}
              className={`current-mode-card current-mode-card--mobile current-mode-card--slide-${slideDirection}`}
            >
              <div className="current-mode-card__visual">
                <img src={activeDrink.image} alt={activeDrink.name} className="current-mode-card__drink" />
              </div>
              <div className="current-mode-card__content">
                <div className="current-mode-card__pill">
                  <h3 className="current-mode-card__name">{activeDrink.name}</h3>
                </div>
                <p className="current-mode-card__description">{activeDrink.description}</p>
              </div>
            </article>
          </div>

          {drinks.length > 1 && (
            <div className="current-mode__dots" aria-label="Current drinks">
              {drinks.map((drink, index) => (
                <button
                  key={drink.id}
                  type="button"
                  className={`current-mode__dot ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => handleDotSelect(index)}
                  aria-label={`Show drink ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          )}
        </div>

        <div className="current-mode__desktop">
          {drinks.map((drink) => (
            <article key={drink.id} className="current-mode-card">
              <div className="current-mode-card__visual">
                <img src={drink.image} alt={drink.name} className="current-mode-card__drink" />
              </div>
              <div className="current-mode-card__content">
                <div className="current-mode-card__pill">
                  <h3 className="current-mode-card__name">{drink.name}</h3>
                </div>
                <p className="current-mode-card__description">{drink.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
