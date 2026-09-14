import React from 'react'
import './TierHero.css'
import c2109 from '../assets/tiers/C2-109.png'

export default function TierHero() {
  return (
    <section className="tier-hero" data-nav-hero aria-label="Tier hero">
      <img
        className="tier-hero__bg"
        src={c2109}
        alt="Coffee pouring into a cup"
      />
    </section>
  )
}
