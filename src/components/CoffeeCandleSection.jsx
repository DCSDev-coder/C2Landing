import React, { useState } from 'react'
import matchaCup from '../assets/About Us/Coffee+Candle/ChatGPT Image Jul 21, 2026, 11_01_23 AM (2) 1.png'
import icedCoffeeCup from '../assets/About Us/Coffee+Candle/ChatGPT Image Jul 21, 2026, 11_01_23 AM (3) 1.png'
import latteCup from '../assets/About Us/Coffee+Candle/ChatGPT Image Jul 21, 2026, 11_01_23 AM (1) 1.png'
import './CoffeeCandleSection.css'

const pillars = [
  {
    bottomLine1: 'A MULTISENSORY CRAFT',
    description:
      'We go beyond taste. By pairing specialty coffee with artisan candles, we crafted a complete sensory journey where every cup and candle meets the highest quality standards.',
    image: matchaCup,
    tone: 'primary-green',
  },
  {
    bottomLine1: 'CURATING COMFORT',
    description:
      'Designed as your daily sanctuary in Eco Forest, our Muslim-owned cafe is built on warmth. Whether you dine in or take our ambiance home, we bring comfort to your routine.',
    image: icedCoffeeCup,
    tone: 'secondary-green',
  },
  {
    bottomLine1: 'EXPERTISE IN EVERY POUR',
    description:
      'Building on the artistry of 5luxe Scents Co., we bring years of fragrance and design experience to our brews, ensuring the scent in the air perfectly complements the coffee in your cup.',
    image: latteCup,
    tone: 'highlight-yellow',
  },
]

export default function CoffeeCandleSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [slideDirection, setSlideDirection] = useState('right')
  const activePillar = pillars[activeIndex]

  const goPrev = () => {
    setSlideDirection('left')
    setActiveIndex((current) => (current - 1 + pillars.length) % pillars.length)
  }

  const goNext = () => {
    setSlideDirection('right')
    setActiveIndex((current) => (current + 1) % pillars.length)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.changedTouches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchStartX - touchEndX

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

  const handleDotSelect = (index) => {
    if (index === activeIndex) {
      return
    }

    setSlideDirection(index > activeIndex ? 'right' : 'left')
    setActiveIndex(index)
  }

  return (
    <section className="coffee-candle" id="craft" aria-labelledby="coffee-candle-title">
      <div className="coffee-candle__inner">
        <header className="coffee-candle__header">
          <h2 className="coffee-candle__title" id="coffee-candle-title">
            C2 COFFEE + CANDLE
          </h2>
          <p className="coffee-candle__subtitle">
            Three Pillars That Define Everything We Do
          </p>
        </header>

        <div className="coffee-candle__mobileCarousel">
          <div className="coffee-candle__mobileFrame">
            <div
              className="coffee-candle__mobileCardWrap"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <article
                key={activePillar.bottomLine1}
                className={`pillar-card pillar-card--mobile pillar-card--${activePillar.tone} pillar-card--slide-${slideDirection}`}
              >
                <div className="pillar-card__cupWrap">
                  <img src={activePillar.image} alt="" className="pillar-card__cup" />
                </div>

                <div className="pillar-card__divider-vertical"></div>

                <p className="pillar-card__copy">{activePillar.description}</p>

                <div className="pillar-card__footer">
                  <div className="pillar-card__divider-horizontal"></div>
                  <div className="pillar-card__bottomText">
                    <span>{activePillar.bottomLine1}</span>
                    <br />
                    <span>{activePillar.bottomLine2}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="coffee-candle__dots" aria-label="Pillar selection">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.bottomLine1}
                type="button"
                className={`coffee-candle__dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => handleDotSelect(index)}
                aria-label={`Show pillar ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="coffee-candle__grid">
          {pillars.map((pillar) => (
            <article
              key={pillar.bottomLine1}
              className={`pillar-card pillar-card--${pillar.tone}`}
            >
              <div className="pillar-card__cupWrap">
                <img src={pillar.image} alt="" className="pillar-card__cup" />
              </div>

              <div className="pillar-card__divider-vertical"></div>

              <p className="pillar-card__copy">{pillar.description}</p>

              <div className="pillar-card__footer">
                <div className="pillar-card__divider-horizontal"></div>
                <div className="pillar-card__bottomText">
                  <span>{pillar.bottomLine1}</span>
                  <br />
                  <span>{pillar.bottomLine2}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
