import React from 'react'
import heroImage from '../assets/optimized/get-in-touch-hero.webp'
import './GetInTouchHero.css'

export default function GetInTouchHero({ backgroundImage = heroImage, backgroundVideo = null, className = '', backgroundPosition }) {
  return (
    <section
      className={`get-in-touch-hero ${className}`}
      data-nav-hero
      aria-label="Get in touch hero"
    >
      {backgroundVideo ? (
        <video
          className="get-in-touch-hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          className="get-in-touch-hero__image"
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          style={backgroundPosition ? { objectPosition: backgroundPosition } : undefined}
        />
      )}
    </section>
  )
}
