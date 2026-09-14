import React, { useState, useEffect } from 'react'
import './CurrentModeSection.css'
import matchaLatte from '../assets/drinks/MATCHA LATTE.png'
import bloodyPeach from '../assets/drinks/BLOODY PEACH.png'
import montBroga from '../assets/drinks/MONT BROGA.png'
import shakeratoBianco from '../assets/drinks/SHAKERATO BIANCO.png'
import yuzukano from '../assets/drinks/YUZUKANO.png'
import senjaDiBroga from '../assets/drinks/SENJA DI BROGA.png'
import espressoBomb from '../assets/drinks/ESPRESSO BOMB.png'
import milkChocolate from '../assets/drinks/MILK CHOCOLATE.png'
import nuttyChocolate from '../assets/drinks/NUTTY CHOCOLATE.png'
import monkeyMatcha from '../assets/drinks/MONKEY MATCHA.png'
import pinkyPromiseMatcha from '../assets/drinks/PINKY PROMISE MATCHA.png'
import boijito from '../assets/drinks/BOIJITO.png'
import fujiFizz from '../assets/drinks/FUJI FIZZ.png'
import spicyMimosa from '../assets/drinks/SPICY MIMOSA.png'
import ondeOndeSoda from '../assets/drinks/ONDE-ONDE SODA.png'
import pinkyBlushMilkshakeBySyah from '../assets/drinks/PINKY BLUSH MILKSHAKE BY SYAH.png'
import soleroFizz from '../assets/drinks/SOLERO FIZZ.png'
import paddlePop from '../assets/drinks/PADDLE POP.png'
import cloudyJasmine from '../assets/drinks/CLOUDY JASMINE.png'
import butterscotchLatte from '../assets/drinks/BUTTERSCOTH LATTE.png'
import hazelnutLatte from '../assets/drinks/HAZELNUT LATTE.png'
import vanillaLatte from '../assets/drinks/VANILLA LATTE.png'
import blueCloudCoconutCoffee from '../assets/drinks/BLUE CLOUD COCONUT COFFEE.png'
import mocha from '../assets/drinks/MOCHA.png'
import espresso from '../assets/drinks/ESPRESSO.png'
import poccoLocco from '../assets/drinks/POCCO LOCCO.png'
import latte from '../assets/drinks/LATTE.png'
import flatWhite from '../assets/drinks/FLAT WHITE.png'
import cappuccino from '../assets/drinks/CAPPUCCINO.png'
import v60Brew from '../assets/drinks/V60 BREW.png'

const drinks = [
  // C2 COFFEE CRAFT
  { id: 'mont-broga', category: 'C2 Coffee Craft', name: 'Mont Broga', description: 'Black coffee layered with orangey cold foam and orange zest', image: montBroga },
  { id: 'shakerato-bianco', category: 'C2 Coffee Craft', name: 'Shakerato Bianco', description: 'Chilled, shaken espresso with sweet silky and refreshing cream', image: shakeratoBianco },
  { id: 'yuzukano', category: 'C2 Coffee Craft', name: 'Yuzukano', description: 'Aerated espresso topping the chilled yuzu puree', image: yuzukano },
  { id: 'senja-di-broga', category: 'C2 Coffee Craft', name: 'Senja Di Broga', description: 'Sweet sparkling orange juice topped with espresso', image: senjaDiBroga },
  { id: 'espresso-bomb', category: 'C2 Coffee Craft', name: 'Espresso Bomb', description: 'The trendy espresso bomb is here. Choice of sparkling of ginger ade or tonic water', image: espressoBomb },

  // C2 BARISTA CRAFT
  { id: 'pinky-blush-milkshake', category: 'C2 Barista Craft', name: 'Pinky Blush Milkshake', description: 'Creamy strawberry, delicate banana puree, mix and shake with milk', image: pinkyBlushMilkshakeBySyah },
  { id: 'solero-fizz', category: 'C2 Barista Craft', name: 'Solero Fizz', description: 'Bright citrus notes with sparkling soda and creamy, silky cold foam', image: soleroFizz },
  { id: 'paddle-pop', category: 'C2 Barista Craft', name: 'Paddle Pop', description: 'Creamy strawberry and vanilla, finished with silky blue foam', image: paddlePop },
  { id: 'cloudy-jasmine', category: 'C2 Barista Craft', name: 'Cloudy Jasmine', description: 'Refreshing jasmine tea soda with silky butterscotch cream foam', image: cloudyJasmine },

  // C2 MOCKTAILS
  { id: 'boijito', category: 'C2 Mocktails', name: 'Boijito', description: 'Sparkling mojito with hand-picked mint and calamansi flavour', image: boijito },
  { id: 'bloody-peach', category: 'C2 Mocktails', name: 'Bloody Peach', description: 'Sparkling jasmine tea with peach flavour and top with grenadine syrup', image: bloodyPeach },
  { id: 'fuji-fizz', category: 'C2 Mocktails', name: 'Fuji Fizz', description: 'Ginger, apple and cinnamon comes together in a fizzy drinks. Fruity and spice.', image: fujiFizz },
  { id: 'spicy-mimosa', category: 'C2 Mocktails', name: 'Spicy Mimosa', description: 'Hot and spicy orange juice topped with ginger ade and red berry based of grenadine syrup', image: spicyMimosa },
  { id: 'onde2pop', category: 'C2 Mocktails', name: 'Onde2Pop', description: 'Green apple and coconut shaken together and topped with sparkling soda', image: ondeOndeSoda },

  // C2 MATCHA
  { id: 'matcha-latte', category: 'C2 Matcha', name: 'Matcha Latte', description: 'Ceremonial grade matcha with smooth, creamy milk', image: matchaLatte },
  { id: 'monkey-matcha', category: 'C2 Matcha', name: 'Monkey Matcha', description: 'Ceremonial grade matcha with ripe banana puree', image: monkeyMatcha },
  { id: 'pinky-promise-matcha', category: 'C2 Matcha', name: 'Pinky Promise Matcha', description: 'Ceremonial grade matcha with strawberry puree sweetness', image: pinkyPromiseMatcha },

  // C2 CHOCOLATE
  { id: 'milk-chocolate', category: 'C2 Chocolate', name: 'Milk Chocolate', description: 'Rich and smooth chocolate milk drinks topped with marshmallows', image: milkChocolate },
  { id: 'nutty-chocolate', category: 'C2 Chocolate', name: 'Nutty Chocolate', description: 'Chocolate drink mixed with crunchy peanut butter', image: nuttyChocolate },

  // C2 POUR OVER
  { id: 'v60-brew', category: 'C2 Pour Over', name: 'V60 Brew', description: 'Hand-poured coffee revealing delicate aroma and clarity', image: v60Brew },

  // C2 COFFEE
  { id: 'espresso', category: 'C2 Coffee', name: 'Espresso', description: 'Pure, concentrated coffee. Choose between bold taste note or lighter note', image: espresso },
  { id: 'pocco-locco', category: 'C2 Coffee', name: 'Pocco Locco', description: 'An espresso and oatmilk-small in size, rich in flavour', image: poccoLocco },
  { id: 'latte', category: 'C2 Coffee', name: 'Latte', description: 'Espresso top with milk with layered of smooth foam', image: latte },
  { id: 'flat-white', category: 'C2 Coffee', name: 'Flat White', description: 'Espresso top with hot milk with a thin layer of smooth foam', image: flatWhite },
  { id: 'cappuccino', category: 'C2 Coffee', name: 'Cappuccino', description: 'Espresso topped with light and thick foam and delicate milk', image: cappuccino },

  // C2 FLAVOURED COFFEE
  { id: 'butterscotch-latte', category: 'C2 Flavoured Coffee', name: 'Butterscotch Latte', description: 'Smooth espresso and milk mix with butterscoth flavour', image: butterscotchLatte },
  { id: 'hazelnut-latte', category: 'C2 Flavoured Coffee', name: 'Hazelnut Latte', description: 'Espresso and milk mixed with hazelnut flavour', image: hazelnutLatte },
  { id: 'vanilla-latte', category: 'C2 Flavoured Coffee', name: 'Vanilla Latte', description: 'Gentle vanilla sweetness lifting smooth espresso', image: vanillaLatte },
  { id: 'blue-cloud-coconut-coffee', category: 'C2 Flavoured Coffee', name: 'Blue Cloud Coconut Coffee', description: 'Black coffee with coconut flavour topped with creamy light blue cold foam', image: blueCloudCoconutCoffee },
  { id: 'mocha', category: 'C2 Flavoured Coffee', name: 'Mocha', description: 'Chocolate and espresso mixed with milk', image: mocha },
]

export default function CurrentModeSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [slideDirection, setSlideDirection] = useState('right')
  const [isHovered, setIsHovered] = useState(false)
  const activeDrink = drinks[activeIndex]

  useEffect(() => {
    if (isHovered || touchStartX !== null) return

    const timer = setInterval(() => {
      goNext()
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered, touchStartX])

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

        <div 
          className="current-mode__carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
