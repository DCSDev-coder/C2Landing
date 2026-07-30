import React from 'react'
import cafeTimelapse from '../assets/images/C2CafeTimeLapse.mp4'
import useVideoBackgroundEnabled from '../hooks/useVideoBackgroundEnabled'
import { navigateTo } from '../utils/navigation'
import './Hero.css'

export default function Hero() {
  const shouldUseVideo = useVideoBackgroundEnabled()

  return (
    <section className="hero" id="top" data-nav-hero>
      {shouldUseVideo ? (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={cafeTimelapse} type="video/mp4" />
        </video>
      ) : null}
      <div className="hero__inner">
        <div className="hero__stage">
          <div className="hero__content">
            <p className="hero__eyebrow">Coffee, candles, and comfort in Eco Forest</p>
            <h1 className="c2-srOnly">C2 Coffee + Candle in Eco Forest, Semenyih</h1>

            <div className="hero__textDesktop" aria-hidden="true">
              <div className="hero__column hero__column--left">
                <div className="hero__wordGroup hero__wordGroup--leftTop">
                  <span className="hero__word">a latte</span>
                </div>
                <div className="hero__wordGroup hero__wordGroup--leftBottom">
                  <span className="hero__word">perfect</span>
                </div>
              </div>

              <div className="hero__column hero__column--right">
                <div className="hero__wordGroup hero__wordGroup--rightTop">
                  <span className="hero__word">love makes</span>
                </div>
                <div className="hero__wordGroup hero__wordGroup--rightBottom">
                  <span className="hero__word">scents</span>
                </div>
              </div>
            </div>

            <div className="hero__textMobile" aria-hidden="true">
              <span className="hero__wordMobile">a latte</span>
              <span className="hero__wordMobile">love makes</span>
              <span className="hero__wordMobile hero__wordMobile--pair">
                <span className="hero__wordMobilePart hero__wordMobilePart--perfect">perfect</span>
                <span className="hero__wordMobilePart hero__wordMobilePart--scent">scents</span>
              </span>
            </div>

            <p className="hero__lede">
              A slower cafe ritual built around signature blends, artisan scents, and warm everyday moments.
            </p>

            <div className="hero__actions">
              <a
                href="/"
                onClick={(event) => navigateTo(event, '/', 'explore')}
                className="c2-button c2-button--primary"
              >
                Explore Blends
              </a>
              <a
                href="/get-in-touch"
                onClick={(event) => navigateTo(event, '/get-in-touch')}
                className="c2-button c2-button--secondary"
              >
                Visit C2 Coffee
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
