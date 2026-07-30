import React from 'react'
import backgroundShape from '../assets/Tier/Background.png'
import './TierOverviewSection.css'

export default function TierOverviewSection() {
  return (
    <section className="tier-overview" aria-labelledby="tier-overview-title">
      <div className="tier-overview__inner">
        <img src={backgroundShape} alt="" aria-hidden="true" className="tier-overview__shape tier-overview__shape--top" />
        <img src={backgroundShape} alt="" aria-hidden="true" className="tier-overview__shape tier-overview__shape--bottom" />

        <div className="tier-overview__comingSoon">
          <p className="tier-overview__eyebrow">Membership Tiers</p>
          <h2 className="tier-overview__title" id="tier-overview-title">
            Coming Soon
          </h2>
          <p className="tier-overview__copy">
            Subscription details will be announced soon.
          </p>
        </div>
      </div>
    </section>
  )
}
