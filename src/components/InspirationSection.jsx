import React from 'react'
import inspirationProducts from '../assets/optimized/inspiration-products.webp'
import './InspirationSection.css'

const craftItems = [
  'C2 COFFEE CRAFT',
  'C2 BARISTA CRAFT',
  'C2 MOCKTAILS',
  'C2 MATCHA',
  'C2 CHOCOLATE',
  'C2 POUR OVER',
  'C2 COFFEE',
  'C2 FLAVOURED COFFEE',
]

export default function InspirationSection() {
  return (
    <section className="inspiration-section" id="about">
      <div className="craft-strip" aria-label="C2 craft categories">
        <div className="craft-strip__viewport">
          <div className="craft-strip__track">
            {[...craftItems, ...craftItems].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <span className="craft-strip__star" aria-hidden="true">✦</span>
                <span className="craft-strip__item">{item}</span>
              </React.Fragment>
            ))}
            <span className="craft-strip__star" aria-hidden="true">✦</span>
          </div>
        </div>
      </div>

      <div className="inspiration">
        <div className="inspiration__content">
          <p className="inspiration__eyebrow">Sip the Calm</p>
          <h2 className="inspiration__title">
            <span className="inspiration__title-our">Our</span>{' '}
            <em className="inspiration__title-insp">Inspiration.</em>
          </h2>
          <div className="inspiration__copy">
            <p>
              At C2 Coffee & Candle, our inspiration comes from the warmth and comfort of coffee culture — from slow mornings and rich coffee aromas to cozy moments shared with others.
            </p>
            <p>
              We believe coffee is more than just a drink; it’s an experience that brings comfort, connection and relaxation into everyday life.
            </p>
          </div>
        </div>

        <div className="inspiration__visual">
          <img
            src={inspirationProducts}
            alt="C2 coffee drinks and products styled on a table"
            className="inspiration__image"
          />
          <div className="inspiration__overlay"></div>
        </div>
      </div>
    </section>
  )
}
