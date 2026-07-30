import React, { useState } from 'react'
import footerLogo from '../assets/About Us/Footer/FA C2 LOGO (OUTLINE)-02 3.svg'
import { footerExploreLinks } from '../data/navigation'
import { submitContactForm } from '../utils/contactForms'
import { navigateTo } from '../utils/navigation'
import './Footer.css'

const legalLinks = [
  { label: 'Privacy Policy', href: null },
  { label: 'Terms Of Service', href: null },
  { label: 'Contact Us', href: '/get-in-touch' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      setFeedback('Enter an email address first.')
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      await submitContactForm({
        subject: 'C2 Coffee newsletter signup',
        payload: {
          formType: 'footer-newsletter',
          email: email.trim(),
        },
      })

      setStatus('success')
      setFeedback('Thanks. Your email has been sent.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Unable to send the form right now. Please try again.')
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={footerLogo} alt="C2 Coffee + Candle" className="site-footer__logo" />
        </div>

        <nav className="site-footer__column" aria-label="Explore">
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {footerExploreLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(event) => navigateTo(event, item.href, item.sectionId)}
                  className="site-footer__link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__column" aria-label="Legal">
          <h2 className="site-footer__heading">Legal</h2>
          <ul className="site-footer__links">
            {legalLinks.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} onClick={(event) => navigateTo(event, item.href)} className="site-footer__link">
                    {item.label}
                  </a>
                ) : (
                  <span className="site-footer__link site-footer__link--disabled">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <section className="site-footer__column site-footer__column--connect" aria-labelledby="footer-connect">
          <h2 className="site-footer__heading" id="footer-connect">
            Connect
          </h2>
          <p className="site-footer__copy">
            Join our circle for exclusive early access to new scent drops and coffee blends
          </p>

          <form className="site-footer__formWrap" onSubmit={handleSubmit}>
            <div className="site-footer__form">
              <label className="site-footer__srOnly" htmlFor="footer-email">
                Email Address
              </label>
              <input
                className="site-footer__input"
                id="footer-email"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="site-footer__submit"
                aria-label="Submit email"
                disabled={status === 'submitting'}
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
            {feedback ? (
              <p className={`site-footer__formFeedback site-footer__formFeedback--${status}`}>
                {feedback}
              </p>
            ) : null}
          </form>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__fineprint">&copy; 2024 C2 Coffee + Candle. All right reserved.</p>
        <p className="site-footer__fineprint">Crafted with love in Malaysia</p>
      </div>
    </footer>
  )
}
