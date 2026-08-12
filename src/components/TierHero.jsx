import React from 'react'
import heroVideo from '../assets/Tier/Landscape_C2_compressed.mov'
import './TierHero.css'

export default function TierHero() {
  return (
    <section className="tier-hero" data-nav-hero aria-label="Tier hero">
      <video
        className="tier-hero__video"
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
      />
    </section>
  )
}
