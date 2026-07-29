import React from 'react'
import starIcon from '../assets/Collaboration/star.png'
import c2Logo from '../assets/images/C2HeaderLogo.png'
import './PartnerShowcaseSection.css'

const partners = [
  { id: 'partner-a', alt: 'Partner placeholder logo' },
]

export default function PartnerShowcaseSection() {
  return (
    <section className="partner-showcase" aria-labelledby="partner-showcase-title">
      <div className="partner-showcase__inner">
        <header className="partner-showcase__header">
          <span className="partner-showcase__eyebrow">OUR PARTNERS</span>
          <h2 className="partner-showcase__title" id="partner-showcase-title">
            Partner In <em className="partner-showcase__title-accent">Crime</em>
          </h2>

          <div className="partner-showcase__divider" aria-hidden="true">
            <span className="partner-showcase__divider-line" />
            <img src={starIcon} alt="" className="partner-showcase__star" />
            <span className="partner-showcase__divider-line" />
          </div>
        </header>

        <div className="partner-showcase__logos" aria-label="Partner logo showcase">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="partner-logo"
              >
                <img src={c2Logo} alt={partner.alt} className="partner-logo__image" />
              </div>
            ))}
        </div>

        <section className="partner-inquiry" aria-labelledby="partner-inquiry-title">
          <div className="partner-inquiry__content">
            <p className="partner-inquiry__eyebrow">Potential Partner</p>
            <h3 className="partner-inquiry__title" id="partner-inquiry-title">
              Start A Collaboration
            </h3>
            <p className="partner-inquiry__copy">
              Share your brand, contact details, and a short note about the collaboration you have in mind.
            </p>

            <form className="partner-inquiry__form">
              <div className="partner-inquiry__fieldGrid">
                <label className="partner-inquiry__field">
                  <span className="partner-inquiry__label">Your Name</span>
                  <input className="partner-inquiry__input" type="text" name="name" placeholder="Jane Doe" />
                </label>

                <label className="partner-inquiry__field">
                  <span className="partner-inquiry__label">Brand Name</span>
                  <input className="partner-inquiry__input" type="text" name="brand" placeholder="Brand or company" />
                </label>

                <label className="partner-inquiry__field">
                  <span className="partner-inquiry__label">Email Address</span>
                  <input className="partner-inquiry__input" type="email" name="email" placeholder="name@company.com" />
                </label>

                <label className="partner-inquiry__field">
                  <span className="partner-inquiry__label">Phone Number</span>
                  <input className="partner-inquiry__input" type="tel" name="phone" placeholder="+60 12-345 6789" />
                </label>
              </div>

              <label className="partner-inquiry__field partner-inquiry__field--message">
                <span className="partner-inquiry__label">Collaboration Idea</span>
                <textarea
                  className="partner-inquiry__textarea"
                  name="message"
                  rows="5"
                  placeholder="Tell us what kind of collaboration you are looking for."
                />
              </label>

              <button type="button" className="c2-button c2-button--primary partner-inquiry__submit">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}
