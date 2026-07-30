import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { navigateTo } from '../utils/navigation'

export default function NotFound() {
  return (
    <div className="c2-page">
      <Navbar />
      <main className="c2-notFound" aria-labelledby="not-found-title">
        <div className="c2-notFound__inner">
          <p className="c2-notFound__eyebrow">404</p>
          <h1 className="c2-notFound__title" id="not-found-title">
            Page Not Found
          </h1>
          <p className="c2-notFound__copy">
            The page you are looking for is not available right now.
          </p>
          <a
            href="/"
            onClick={(event) => navigateTo(event, '/')}
            className="c2-button c2-button--primary"
          >
            Back To Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
