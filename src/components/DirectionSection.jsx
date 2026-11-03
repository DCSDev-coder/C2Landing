import React, { useState } from 'react'
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

export default function DirectionSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard.writeText('support@c2coffeeandcandle.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <section id="get-in-touch" className="direction" aria-labelledby="direction-title">
      <div className="direction__inner">
        <header className="direction__header">
          <p className="direction__eyebrow">VISIT US</p>
          <h1 className="direction__title" id="direction-title">
            Find Your Way to <span className="direction__titleHighlight">C2 Coffee &amp; Candle</span>
          </h1>
          <p className="direction__lede">
            Operated by <strong className="font-semibold text-[#1a332f]">C 2 CAFE</strong> &bull; SSM: 202303195866 (003518048-V)
          </p>
        </header>

        <div className="direction__mapWrap relative rounded-[1.75rem] overflow-hidden shadow-[0_20px_40px_rgba(46,94,88,0.12)]">
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
            style={{ border: 0, minHeight: '420px', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for C2 Coffee & Candle"
            className="direction__map"
          ></iframe>
        </div>

        {/* Fun, tactile Cafe Info Cards */}
        <div className="direction__cards-grid">
          {/* Card 1: Location */}
          <article className="direction__card direction__card--location">
            <div className="direction__card-top">
              <div className="direction__card-badge">
                <div className="direction__card-icon direction__card-icon--pin">
                  <PinIcon />
                </div>
                <span className="direction__card-tag">Location</span>
              </div>
            </div>

            <div className="direction__card-body">
              <h3 className="direction__card-title">Eco Forest Cafe</h3>
              <p className="direction__card-text">
                42, Jalan Eco Forest 6/1C,<br />
                Eco Forest, 43500 Semenyih,<br />
                Selangor
              </p>
            </div>

            <div className="direction__card-footer">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="direction__card-btn direction__card-btn--primary"
                aria-label="Open C2 Coffee location in Google Maps"
              >
                <span>Get Directions</span>
              </a>
            </div>
          </article>

          {/* Card 2: Hours */}
          <article className="direction__card direction__card--hours">
            <div className="direction__card-top">
              <div className="direction__card-badge">
                <div className="direction__card-icon direction__card-icon--clock">
                  <ClockIcon />
                </div>
                <span className="direction__card-tag">Hours</span>
              </div>
              <span className="direction__card-status-pill">
                Open Daily
              </span>
            </div>

            <div className="direction__card-body">
              <h3 className="direction__card-title">Brewing Times</h3>
              <div className="direction__hours-schedule">
                <div className="direction__hours-row">
                  <span className="direction__hours-day">Mon &ndash; Thu</span>
                  <span className="direction__hours-time">7:00am &ndash; 10:00pm</span>
                </div>
                <div className="direction__hours-row">
                  <span className="direction__hours-day">Fri &ndash; Sun</span>
                  <span className="direction__hours-time">7:00am &ndash; 10:00pm</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Email */}
          <article className="direction__card direction__card--contact">
            <div className="direction__card-top">
              <div className="direction__card-badge">
                <div className="direction__card-icon direction__card-icon--mail">
                  <MailIcon />
                </div>
                <span className="direction__card-tag">Say Hello</span>
              </div>
            </div>

            <div className="direction__card-body">
              <h3 className="direction__card-title">General Inquiries</h3>
              <a
                href="mailto:support@c2coffeeandcandle.com"
                className="direction__email-link"
                title="Send email to C2 Coffee"
              >
                support@c2coffeeandcandle.com
              </a>
              <p className="direction__card-subtext">
                Questions, wholesale inquiries, or cafe feedback? We’d love to hear from you!
              </p>
            </div>

            <div className="direction__card-footer">
              <div className="direction__email-actions">
                <a
                  href="mailto:support@c2coffeeandcandle.com"
                  className="direction__card-btn direction__card-btn--secondary"
                >
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="direction__card-btn direction__card-btn--ghost"
                  aria-label="Copy email address"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
