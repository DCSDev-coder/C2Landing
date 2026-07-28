import React from 'react'
import milkChocolate from '../assets/images/MILK CHOCOLATE 1.png'
import poccoLocco from '../assets/images/POCCO LOCCO 1.png'
import directionMap from '../assets/GetInTouch/Location/direction-map.png'
import './DirectionSection.css'

const mapQuery = encodeURIComponent('42, Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor, Malaysia')
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
  return (
    <section className="direction" aria-labelledby="direction-title">
      <div className="direction__inner">
        <div className="direction__top">
          <div className="direction__intro">
            <h1 className="direction__title" id="direction-title">
              Get In Touch
            </h1>
            <p className="direction__lede">
              Reach out and tell us what is on your mind. We would love to hear from you.
            </p>

            <div className="direction__drinks" aria-hidden="true">
              <img src={milkChocolate} alt="" className="direction__drink direction__drink--iced" />
              <img src={poccoLocco} alt="" className="direction__drink direction__drink--hot" />
            </div>
          </div>

          <div className="direction__details">
            <header className="direction__detailsHeader">
              <h2 className="direction__visitTitle">Visit C2 Coffee</h2>
              <div className="direction__underline" />
            </header>

            <div className="direction__infoRows">
              <div className="direction__infoRow">
                <div className="direction__iconWrap">
                  <PinIcon />
                </div>
                <div className="direction__infoBody">
                  <p className="direction__label">Address</p>
                  <p className="direction__value">
                    42, Jalan Eco Forest 6/1C,
                    <br />
                    Eco Forest, 43500 Semenyih,
                    <br />
                    Selangor
                  </p>
                </div>
              </div>

              <div className="direction__hours">
                <h3 className="direction__hoursTitle">OPENING HOURS</h3>
                <div className="direction__hoursGrid">
                  <div className="direction__hoursBlock">
                    <p className="direction__hoursLabel">Monday - Thursday</p>
                    <p className="direction__hoursValue">7:00am - 8:00pm</p>
                  </div>
                  <div className="direction__hoursDivider" />
                  <div className="direction__hoursBlock">
                    <p className="direction__hoursLabel">Friday - Saturday</p>
                    <p className="direction__hoursValue">7:00am - 10:00pm</p>
                  </div>
                </div>
              </div>

              <div className="direction__infoRow">
                <div className="direction__iconWrap">
                  <MailIcon />
                </div>
                <div className="direction__infoBody direction__infoBody--email">
                  <a className="direction__email" href="mailto:coffeecandle@coffeecandle.com">
                    coffeecandle@coffeecandle.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="direction__mapWrap">
          <a
            className="direction__mapLink"
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Open cafe location in Google Maps"
          >
            <img src={directionMap} alt="Map showing the cafe location area" className="direction__map" />
          </a>
        </div>
      </div>
    </section>
  )
}
