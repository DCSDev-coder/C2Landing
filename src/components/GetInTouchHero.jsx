import React from 'react'
import heroImage from '../assets/images/GetInTouch_Hero.png'
import './GetInTouchHero.css'

export default function GetInTouchHero() {
  return (
    <section
      className="get-in-touch-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Get in touch hero"
    />
  )
}
