import React from 'react'
import heroImage from '../assets/images/GetInTouch_Hero.jpeg'
import './TierHero.css'

export default function TierHero() {
  return (
    <section className="tier-hero" data-nav-hero style={{ backgroundImage: `url(${heroImage})` }} aria-label="Tier hero" />
  )
}
