import React from 'react'
import heroImage from '../assets/optimized/get-in-touch-hero.webp'
import './GetInTouchHero.css'

export default function GetInTouchHero({ backgroundImage = heroImage, backgroundVideo = null }) {
  return (
    <section className="get-in-touch-hero" data-nav-hero style={{ backgroundImage: `url(${backgroundImage})` }} aria-label="Get in touch hero">
      {backgroundVideo ? (
        <video
          className="get-in-touch-hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : null}
    </section>
  )
}
