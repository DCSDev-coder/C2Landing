import React from 'react'
import './DirectionSection.css'

const mapQuery = encodeURIComponent('C2 Coffee & Candle, 42, Jalan Eco Forest 6/1C, 43500 Semenyih, Selangor')
const mapEmbedLink = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="direction__iconSvg">
      <path
        fill="currentColor"
        d="M12 2.75c-3.87 0-7 3.13-7 7 0 5.04 5.39 10.76 6.02 11.41a1.35 1.35 0 0 0 1.96 0c.63-.65 6.02-6.37 6.02-11.41 0-3.87-3.13-7-7-7Zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="direction__iconSvg">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="direction__iconSvg">
      <path
        fill="currentColor"
        d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm0 1.8v.17L12 12.95l8.25-5.48v-.17H3.75Zm16.5 9.4v-7.06l-7.76 5.16a.86.86 0 0 1-.98 0L3.75 9.64v7.06h16.5Z"
      />
    </svg>
  )
}

function PaperPlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  )
}

export default function DirectionSection() {
  return (
    <section className="direction" aria-labelledby="direction-title">
      <div className="direction__inner">
        <header className="direction__header">
          <p className="direction__eyebrow">VISIT US</p>
          <h1 className="direction__title" id="direction-title">
            Find Your Way to <span className="direction__titleHighlight">C2 Coffee &amp; Candle</span>
          </h1>
        </header>

        <div className="direction__mapWrap relative rounded-[1.25rem] overflow-hidden shadow-[0_20px_40px_rgba(46,94,88,0.1)]">
          {/* Glass shield overlay to prevent clicking other POIs, leaving a cutout for the info box */}
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Open cafe location in Google Maps"
            className="absolute inset-0 z-10 block"
          >
            {/* Right shield */}
            <div className="absolute top-0 right-0 bottom-0 left-[420px]"></div>
            {/* Bottom shield */}
            <div className="absolute top-[220px] left-0 right-0 bottom-0"></div>
          </a>
          <iframe 
            src={mapEmbedLink}
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px', display: 'block' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for C2 Coffee & Candle"
            className="direction__map"
          ></iframe>
        </div>

        <div className="direction__footer">
          <div className="direction__footerCol">
            <div className="direction__footerHeader">
              <div className="direction__iconWrap direction__iconWrap--pin">
                <PinIcon />
              </div>
              <h2 className="direction__label">ADDRESS</h2>
            </div>
            <div className="direction__footerBody">
              <p className="direction__value">
                42, Jalan Eco Forest 6/1C,<br />
                Eco Forest, 43500 Semenyih,<br />
                Selangor
              </p>
            </div>
          </div>

          <div className="direction__footerCol">
            <div className="direction__footerHeader">
              <div className="direction__iconWrap direction__iconWrap--clock">
                <ClockIcon />
              </div>
              <h2 className="direction__label">OPENING HOURS</h2>
            </div>
            <div className="direction__footerBody">
              <div className="direction__hoursBlock">
                <p className="direction__hoursLabel">Monday - Thursday</p>
                <p className="direction__hoursValue">7:00am - 8:00pm</p>
              </div>
              <div className="direction__hoursDivider" aria-hidden="true" />
              <div className="direction__hoursBlock">
                <p className="direction__hoursLabel">Friday - Saturday</p>
                <p className="direction__hoursValue">7:00am - 10:00pm</p>
              </div>
            </div>
          </div>

          <div className="direction__footerCol">
            <div className="direction__footerHeader">
              <div className="direction__iconWrap direction__iconWrap--mail">
                <MailIcon />
              </div>
              <h2 className="direction__label">EMAIL</h2>
            </div>
            <div className="direction__footerBody">
              <a className="direction__email" href="mailto:partnerships@c2coffeeandcandle.com">
                partnerships@c2coffeeandcandle.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
