import React from 'react'
import heroImage from '../assets/optimized/get-in-touch-hero.webp'
import './GetInTouchHero.css'

export default function GetInTouchHero() {
  return (
    <section
      className="get-in-touch-hero"
      data-nav-hero
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Get in touch hero"
    />
  )
}
