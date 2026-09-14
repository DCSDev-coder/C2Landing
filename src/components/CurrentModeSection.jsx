import React, { useState } from 'react'
import './CurrentModeSection.css'

const drinks = [
  // C2 COFFEE CRAFT
  { id: 'mont-broga', category: 'C2 Coffee Craft', name: 'Mont Broga', description: 'Black coffee layered with orangey cold foam and orange zest', image: '/drinks/MONT BROGA.png' },
  { id: 'shakerato-bianco', category: 'C2 Coffee Craft', name: 'Shakerato Bianco', description: 'Chilled, shaken espresso with sweet silky and refreshing cream', image: '/drinks/SHAKERATO BIANCO.png' },
  { id: 'yuzukano', category: 'C2 Coffee Craft', name: 'Yuzukano', description: 'Aerated espresso topping the chilled yuzu puree', image: '/drinks/YUZUKANO.png' },
  { id: 'senja-di-broga', category: 'C2 Coffee Craft', name: 'Senja Di Broga', description: 'Sweet sparkling orange juice topped with espresso', image: '/drinks/SENJA DI BROGA.png' },
  { id: 'espresso-bomb', category: 'C2 Coffee Craft', name: 'Espresso Bomb', description: 'The trendy espresso bomb is here. Choice of sparkling of ginger ade or tonic water', image: '/drinks/ESPRESSO BOMB.png' },

  // C2 CHOCOLATE
  { id: 'milk-chocolate', category: 'C2 Chocolate', name: 'Milk Chocolate', description: 'Rich and smooth chocolate milk drinks topped with marshmallows', image: '/drinks/MILK CHOCOLATE.png' },
  { id: 'nutty-chocolate', category: 'C2 Chocolate', name: 'Nutty Chocolate', description: 'Chocolate drink mixed with crunchy peanut butter', image: '/drinks/NUTTY CHOCOLATE.png' },

  // C2 MATCHA
  { id: 'matcha-latte', category: 'C2 Matcha', name: 'Matcha Latte', description: 'Ceremonial grade matcha with smooth, creamy milk', image: '/drinks/MATCHA LATTE.png' },
  { id: 'monkey-matcha', category: 'C2 Matcha', name: 'Monkey Matcha', description: 'Ceremonial grade matcha with ripe banana puree', image: '/drinks/MONKEY MATCHA.png' },
  { id: 'pinky-promise-matcha', category: 'C2 Matcha', name: 'Pinky Promise Matcha', description: 'Ceremonial grade matcha with strawberry puree sweetness', image: '/drinks/PINKY PROMISE MATCHA.png' },

  // C2 MOCKTAILS
  { id: 'boijito', category: 'C2 Mocktails', name: 'Boijito', description: 'Sparkling mojito with hand-picked mint and calamansi flavour', image: '/drinks/BOIJITO.png' },
  { id: 'bloody-peach', category: 'C2 Mocktails', name: 'Bloody Peach', description: 'Sparkling jasmine tea with peach flavour and top with grenadine syrup', image: '/drinks/BLOODY PEACH.png' },
  { id: 'fuji-fizz', category: 'C2 Mocktails', name: 'Fuji Fizz', description: 'Ginger, apple and cinnamon comes together in a fizzy drinks. Fruity and spice.', image: '/drinks/FUJI FIZZ.png' },
  { id: 'spicy-mimosa', category: 'C2 Mocktails', name: 'Spicy Mimosa', description: 'Hot and spicy orange juice topped with ginger ade and red berry based of grenadine syrup', image: '/drinks/SPICY MIMOSA.png' },
  { id: 'onde2pop', category: 'C2 Mocktails', name: 'Onde2Pop', description: 'Green apple and coconut shaken together and topped with sparkling soda', image: '/drinks/ONDE-ONDE SODA.png' },

  // C2 BARISTA CRAFT
  { id: 'pinky-blush-milkshake', category: 'C2 Barista Craft', name: 'Pinky Blush Milkshake', description: 'Creamy strawberry, delicate banana puree, mix and shake with milk', image: '/drinks/PINKY BLUSH MILKSHAKE BY SYAH.png' },
  { id: 'solero-fizz', category: 'C2 Barista Craft', name: 'Solero Fizz', description: 'Bright citrus notes with sparkling soda and creamy, silky cold foam', image: '/drinks/SOLERO FIZZ.png' },
  { id: 'paddle-pop', category: 'C2 Barista Craft', name: 'Paddle Pop', description: 'Creamy strawberry and vanilla, finished with silky blue foam', image: '/drinks/PADDLE POP.png' },
  { id: 'cloudy-jasmine', category: 'C2 Barista Craft', name: 'Cloudy Jasmine', description: 'Refreshing jasmine tea soda with silky butterscotch cream foam', image: '/drinks/CLOUDY JASMINE.png' },
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

        <div className="current-mode__carousel">
          <div
            className="current-mode__cardWrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button type="button" className="current-mode__nav-btn current-mode__nav-btn--prev" onClick={goPrev} aria-label="Previous drink">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1a332f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <article
              key={activeDrink.id}
              className={`current-mode-card current-mode-card--slide-${slideDirection}`}
            >
              <div className="current-mode-card__visual">
                <img src={activeDrink.image} alt={activeDrink.name} className="current-mode-card__drink" />
              </div>
              <div className="current-mode-card__content">
                <p className="current-mode-card__category">{activeDrink.category}</p>
                <h3 className="current-mode-card__name">{activeDrink.name}</h3>
                <p className="current-mode-card__description">{activeDrink.description}</p>
              </div>
            </article>
            <button type="button" className="current-mode__nav-btn current-mode__nav-btn--next" onClick={goNext} aria-label="Next drink">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1a332f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {drinks.length > 1 && (
            <div className="current-mode__fraction" aria-label={`Drink ${activeIndex + 1} of ${drinks.length}`}>
              {String(activeIndex + 1).padStart(2, '0')} <span className="current-mode__fraction-separator">/</span> {drinks.length}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
