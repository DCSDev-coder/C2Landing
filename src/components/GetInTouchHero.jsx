import React from 'react'
import heroImage from '../assets/optimized/get-in-touch-hero.webp'
import useVideoBackgroundEnabled from '../hooks/useVideoBackgroundEnabled'
import './GetInTouchHero.css'

export default function GetInTouchHero({ backgroundImage = heroImage, backgroundVideo = null }) {
  const shouldUseVideo = useVideoBackgroundEnabled()

  return (
    <section className="get-in-touch-hero" data-nav-hero style={{ backgroundImage: `url(${backgroundImage})` }} aria-label="Get in touch hero">
      {backgroundVideo && shouldUseVideo ? (
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
