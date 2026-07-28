import React from 'react'
import footerLogo from '../assets/Footer/FA C2 LOGO (OUTLINE)-02 3.svg'
import './Footer.css'

const exploreLinks = ['About Us', 'Get In Touch', 'Collaborations', 'Tiers', 'Download']
const legalLinks = ['Privacy Policy', 'Terms Of Service', 'Contact Us']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={footerLogo} alt="C2 Coffee + Candle" className="site-footer__logo" />
        </div>

        <nav className="site-footer__column" aria-label="Explore">
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {exploreLinks.map((item) => (
              <li key={item}>
                <a href="/" onClick={(event) => event.preventDefault()} className="site-footer__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__column" aria-label="Legal">
          <h2 className="site-footer__heading">Legal</h2>
          <ul className="site-footer__links">
            {legalLinks.map((item) => (
              <li key={item}>
                <a href="/" onClick={(event) => event.preventDefault()} className="site-footer__link">
                  {item}
                </a>
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

          <form className="site-footer__form">
            <label className="site-footer__srOnly" htmlFor="footer-email">
              Email Address
            </label>
            <input
              className="site-footer__input"
              id="footer-email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
            />
            <button type="button" className="site-footer__submit" aria-label="Submit email">
              <span aria-hidden="true">›</span>
            </button>
          </form>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__fineprint">© 2024 C2 Coffee + Candle. All right reserved.</p>
        <p className="site-footer__fineprint">Crafted with love in Malaysia</p>
      </div>
    </footer>
  )
}
