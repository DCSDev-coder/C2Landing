import React from 'react'
import appStoreIcon from '../assets/Download/AppStore.png'
import downloadHero from '../assets/Download/download-hero.jpg'
import playStoreIcon from '../assets/Download/PlayStore.png'
import './DownloadSection.css'

export default function DownloadSection() {
  return (
    <section className="download-section" id="download" aria-labelledby="download-title">
      <div className="download-section__inner">
        <div className="download-section__media">
          <div className="download-section__imageFrame">
            <img
              src={downloadHero}
              alt="Guest using the C2 mobile app inside the cafe"
              className="download-section__image"
              loading="lazy"
            />
          </div>

          <div className="download-section__badge" aria-hidden="true">
            <div className="download-section__badgeRing">
              <span>Crafted for</span>
              <span>Intentional</span>
              <span>Living</span>
            </div>
          </div>
        </div>

        <div className="download-section__content">
          <h2 className="download-section__title" id="download-title">
            <span className="download-section__titlePrimary">Take the C2 Experience</span>
            <em className="download-section__titleAccent">With You</em>
          </h2>

          <p className="download-section__copy">
            Our mobile app brings the warmth of the cafe and the serene glow of our candles directly to your
            fingertips. Crafted for the intentional life.
          </p>

          <p className="download-section__status">*Coming Soon</p>

          <div className="download-section__actions" aria-label="App store links">
            <button type="button" className="download-section__store download-section__store--primary">
              <img src={playStoreIcon} alt="" aria-hidden="true" className="download-section__storePng" />
              <span className="download-section__storeLabel">
                <span>Play Store</span>
              </span>
            </button>

            <button type="button" className="download-section__store download-section__store--secondary">
              <img src={appStoreIcon} alt="" aria-hidden="true" className="download-section__storePng" />
              <span className="download-section__storeLabel">
                <span>App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
