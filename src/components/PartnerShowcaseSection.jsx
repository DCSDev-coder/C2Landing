import React, { useState } from 'react'
import starIcon from '../assets/Collaboration/star.png'
import { submitContactForm } from '../utils/contactForms'
import './PartnerShowcaseSection.css'

export default function PartnerShowcaseSection() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      await submitContactForm({
        subject: `C2 collaboration inquiry from ${formData.brand || formData.name || 'new partner'}`,
        payload: {
          formType: 'collaboration-inquiry',
          ...formData,
        },
      })

      setStatus('success')
      setFeedback('Inquiry sent. We can now review it from the receiver inbox.')
      setFormData({
        name: '',
        brand: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Unable to send the form right now. Please try again.')
    }
  }

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

        <section className="partner-inquiry" aria-labelledby="partner-inquiry-title">
          <div className="partner-inquiry__content">
            <p className="partner-inquiry__eyebrow">Potential Partner</p>
            <h3 className="partner-inquiry__title" id="partner-inquiry-title">
              Start A Collaboration
            </h3>
            <p className="partner-inquiry__copy">
              Share your brand, contact details, and a short note about the collaboration you have in mind.
            </p>

            <form className="partner-inquiry__form" onSubmit={handleSubmit}>
              <div className="partner-inquiry__fieldGrid">
                <div className="partner-inquiry__field">
                  <label className="partner-inquiry__label" htmlFor="partner-name">
                    Your Name
                  </label>
                  <input
                    id="partner-name"
                    className="partner-inquiry__input"
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    spellCheck="false"
                    required
                  />
                </div>

                <div className="partner-inquiry__field">
                  <label className="partner-inquiry__label" htmlFor="partner-brand">
                    Brand Name
                  </label>
                  <input
                    id="partner-brand"
                    className="partner-inquiry__input"
                    type="text"
                    name="brand"
                    placeholder="Brand or company"
                    value={formData.brand}
                    onChange={handleChange}
                    autoComplete="organization"
                    spellCheck="false"
                    required
                  />
                </div>

                <div className="partner-inquiry__field">
                  <label className="partner-inquiry__label" htmlFor="partner-email">
                    Email Address
                  </label>
                  <input
                    id="partner-email"
                    className="partner-inquiry__input"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    spellCheck="false"
                    required
                  />
                </div>

                <div className="partner-inquiry__field">
                  <label className="partner-inquiry__label" htmlFor="partner-phone">
                    Phone Number
                  </label>
                  <input
                    id="partner-phone"
                    className="partner-inquiry__input"
                    type="tel"
                    name="phone"
                    placeholder="+60 12-345 6789"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>
              </div>

              <div className="partner-inquiry__field partner-inquiry__field--message">
                <label className="partner-inquiry__label" htmlFor="partner-message">
                  Collaboration Idea
                </label>
                <textarea
                  id="partner-message"
                  className="partner-inquiry__textarea"
                  name="message"
                  rows="5"
                  placeholder="Tell us what kind of collaboration you are looking for."
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <button
                type="submit"
                className="c2-button c2-button--primary partner-inquiry__submit"
                disabled={status === 'submitting'}
              >
                Send Inquiry
              </button>

              {feedback ? (
                <p className={`partner-inquiry__feedback partner-inquiry__feedback--${status}`}>
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}
