import React from 'react'
import tierHeroImage from '../assets/optimized/tiers-hero.webp'
import './TierHero.css'

export default function TierHero() {
  return (
    <section className="tier-hero" data-nav-hero aria-labelledby="tier-hero-title">
      <div className="tier-hero__inner">
        <div className="tier-hero__copyBlock">
          <span className="tier-hero__eyebrow">The Private Collection</span>
          <h1 className="tier-hero__title" id="tier-hero-title">
            Elevate Your
            <span className="tier-hero__titleAccent"> Daily Ritual</span>
          </h1>
          <div className="tier-hero__rule" aria-hidden="true" />
        </div>

        <div className="tier-hero__aside">
          <p className="tier-hero__copy">
            A refined circle for guests who want more from every cup, every scent, and every quiet moment at C2.
          </p>

          <div className="tier-hero__visualFrame">
            <img src={tierHeroImage} alt="Tier collection hero" className="tier-hero__visual" />
          </div>
        </div>
      </div>
    </section>
  )
}
