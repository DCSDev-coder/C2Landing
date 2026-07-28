import React from 'react'
import collaborationPhoto from '../assets/Collaboration/FKP01847 1.png'
import starIcon from '../assets/Collaboration/star.png'
import './CollaborationSection.css'

export default function CollaborationSection() {
  return (
    <section className="collaboration-section">
      <div className="collaboration-section__inner">
        <div className="collaboration-section__copy">
          <h2 className="collaboration-section__title">
            <span className="collaboration-section__title-line">Our Partnership</span>
            <em className="collaboration-section__title-line collaboration-section__title-line--accent">Your Impact</em>
          </h2>
          <div className="collaboration-section__divider" aria-hidden="true">
            <span className="collaboration-section__divider-line" />
            <img src={starIcon} alt="" className="collaboration-section__star" />
            <span className="collaboration-section__divider-line" />
          </div>
          <p className="collaboration-section__text">
            Coffee, candles, and curated experiences come together to create meaningful brand moments rooted in
            warmth, ritual, and connection.
          </p>
        </div>

        <div className="collaboration-section__visual">
          <div className="collaboration-section__frame">
            <img src={collaborationPhoto} alt="C2 collaboration showcase" className="collaboration-section__image" />
          </div>
        </div>
      </div>
    </section>
  )
}
