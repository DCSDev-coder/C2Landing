import React, { useState } from 'react'
import datoBg from '../assets/Explore/image 47.png'
import datinBg from '../assets/Explore/image 45.png'
import datoAvatar from '../assets/Explore/dato 2.png'
import datinAvatar from '../assets/Explore/image 46.png'
import almondIcon from '../assets/Explore/Almond.png'
import chocolateIcon from '../assets/Explore/Chocolate Bar.png'
import cocoaIcon from '../assets/Explore/Cocoa.png'
import './ExploreSection.css'

export default function ExploreSection() {
  const [selectedBlend, setSelectedBlend] = useState(null)

  const handleSelect = (blend, e) => {
    if (selectedBlend === blend) {
      setSelectedBlend(null)
    } else {
      setSelectedBlend(blend)
    }
  }

  const handleClose = (e) => {
    e.stopPropagation()
    setSelectedBlend(null)
  }

  return (
    <section className="explore-section" id="explore">
      <div className="explore-header">
        <h2 className="explore-header__title">
          Explore Our <em className="explore-header__title-highlight">Blends</em>
        </h2>
        <p className="explore-header__subtitle">
          Crafted With Intention, Inspired By Our Roots,<br />
          Made For Your Moments.
        </p>
      </div>

      <div className={`explore-grid ${selectedBlend ? 'has-selection' : ''}`}>
        
        {/* DATO CARD */}
        <div 
          className={`blend-card blend-card--dato ${selectedBlend === 'dato' ? 'is-active' : ''} ${selectedBlend === 'datin' ? 'is-dull' : ''}`}
          onClick={(e) => handleSelect('dato', e)}
          style={{ gridArea: 'dato', backgroundImage: `url(${datoBg})` }}
        >
          <div className="blend-card__avatar-container">
            <img src={datoAvatar} alt="Dato Avatar" className="blend-card__avatar" />
          </div>
          <div className="blend-card__info">
            <h3 className="blend-card__title">Dato Blend</h3>
            <p className="blend-card__description">Bold & Dark Chocolatey</p>
            <span className="blend-card__link">
              {selectedBlend === 'dato' ? 'Active Selection' : 'View Details →'}
            </span>
          </div>
        </div>

        {/* DETAIL PANEL */}
        <div 
          className={`detail-panel ${selectedBlend ? 'is-active' : ''}`}
          style={{ gridArea: 'details' }}
        >
          {selectedBlend && (
            <div className="detail-panel__content">
              <button className="detail-panel__close" onClick={handleClose} aria-label="Close details">
                ✕
              </button>
              <h3 className="detail-panel__title">
                About <em className="detail-panel__title-highlight">This Blends.</em>
              </h3>
              
              <div className="detail-panel__scroll-area">
                <p className="detail-panel__description">
                  {selectedBlend === 'dato' ? (
                    "Inspired by heritage and leadership, Dato blend delivers a bold character with rich note of dark chocolate and a smooth, lasting finish. Perfect for those who prefer a stronger, more intense experience."
                  ) : (
                    "Inspired by grace and tradition, Datin blend features a bright and refreshing character. It boasts prominent citrus notes and a sweet, fruity undertone, leaving a clean, crisp finish. Ideal for those who enjoy a lively, aromatic cup."
                  )}
                </p>
                
                <div className="detail-panel__divider"></div>
                
                <h4 className="detail-panel__section-title">Tasting Notes</h4>
                
                <div className="detail-panel__notes-grid">
                  {selectedBlend === 'dato' ? (
                    <>
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <img src={chocolateIcon} alt="Dark Chocolate" className="tasting-note__png" />
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">DARK CHOCOLATE</span>
                          <span className="tasting-note__desc">Rich & indulgent chocolate notes.</span>
                        </div>
                      </div>
                      
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <img src={cocoaIcon} alt="Roasted Cocoa" className="tasting-note__png" />
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">ROASTED COCOA</span>
                          <span className="tasting-note__desc">Deep cocoa-like warmth.</span>
                        </div>
                      </div>
                      
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <img src={almondIcon} alt="Toasted Nuts" className="tasting-note__png" />
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">TOASTED NUTS</span>
                          <span className="tasting-note__desc">Suitable nuttiness for a balanced finish.</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2v20M2 12h20M12 12l7.07-7.07M12 12l-7.07 7.07M12 12l-7.07-7.07M12 12l7.07 7.07" />
                          </svg>
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">CITRUS</span>
                          <span className="tasting-note__desc">Bright lemon and orange zestiness.</span>
                        </div>
                      </div>
                      
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 3a9 9 0 0 0-3 3" />
                          </svg>
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">FRUITY</span>
                          <span className="tasting-note__desc">Sweet berry-like undertones.</span>
                        </div>
                      </div>
                      
                      <div className="tasting-note">
                        <div className="tasting-note__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4z" />
                            <circle cx="12" cy="6" r="1.5" />
                          </svg>
                        </div>
                        <div className="tasting-note__info">
                          <span className="tasting-note__name">FLORAL</span>
                          <span className="tasting-note__desc">Delicate jasmine aroma.</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="detail-panel__divider"></div>
                
                <h4 className="detail-panel__section-title">Origin</h4>
                <p className="detail-panel__origin-value">
                  {selectedBlend === 'dato' ? 'Kenya • Indonesia' : 'Ethiopia • Colombia'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* DATIN CARD */}
        <div 
          className={`blend-card blend-card--datin ${selectedBlend === 'datin' ? 'is-active' : ''} ${selectedBlend === 'dato' ? 'is-dull' : ''}`}
          onClick={(e) => handleSelect('datin', e)}
          style={{ gridArea: 'datin', backgroundImage: `url(${datinBg})` }}
        >
          <div className="blend-card__avatar-container">
            <img src={datinAvatar} alt="Datin Avatar" className="blend-card__avatar" />
          </div>
          <div className="blend-card__info">
            <h3 className="blend-card__title">Datin Blend</h3>
            <p className="blend-card__description">Citrus & Fruity</p>
            <span className="blend-card__link">
              {selectedBlend === 'datin' ? 'Active Selection' : 'View Details →'}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
