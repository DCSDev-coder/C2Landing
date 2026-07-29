import React from 'react'
import backgroundShape from '../assets/Tier/Background.png'
import vvipImage from '../assets/Tier/vvip-drink.png'
import './TierOverviewSection.css'

export default function TierOverviewSection() {
  return (
    <section className="tier-overview" aria-labelledby="tier-overview-title">
      <div className="tier-overview__inner">
        <img src={backgroundShape} alt="" aria-hidden="true" className="tier-overview__shape tier-overview__shape--top" />
        <img src={backgroundShape} alt="" aria-hidden="true" className="tier-overview__shape tier-overview__shape--bottom" />

        <div className="tier-overview__grid">
          <article className="tier-card tier-card--lite">
            <span className="tier-card__label tier-card__label--vertical">Membership</span>
            <div className="tier-card__minimalRail" aria-hidden="true" />
            <p className="tier-card__name tier-card__name--lite">Lite</p>
            <p className="tier-card__price">
              <span className="tier-card__amount">RM 9.90</span>
              <span className="tier-card__period">/ month</span>
            </p>
            <ul className="tier-card__list tier-card__list--minimal">
              <li>10% discount on all orders</li>
              <li>Early access to seasonal drops</li>
              <li>Member-only newsletter</li>
            </ul>
            <button type="button" className="tier-card__ghostButton">
              Select Lite
            </button>
          </article>

          <article className="tier-card tier-card--premium" aria-labelledby="tier-overview-title">
            <div className="tier-card__premiumIntro">
              <span className="tier-card__eyebrow">Signature Choice</span>
            </div>

            <div className="tier-card__premiumBody">
              <div className="tier-card__premiumCopy">
                <h2 className="tier-overview__title" id="tier-overview-title">
                  Premium
                </h2>
                <p className="tier-card__featuredPrice">
                  <span className="tier-card__featuredAmount">RM 49</span>
                  <span className="tier-card__period">/ per month</span>
                </p>
                <ul className="tier-card__iconList">
                  <li>
                    <span className="tier-card__icon" aria-hidden="true">✦</span>
                    1 monthly signature candle
                  </li>
                  <li>
                    <span className="tier-card__icon" aria-hidden="true">◔</span>
                    15% discount on all orders
                  </li>
                  <li>
                    <span className="tier-card__icon" aria-hidden="true">◌</span>
                    Free shipping on all orders
                  </li>
                </ul>
              </div>
            </div>

            <button type="button" className="tier-card__ctaButton">
              Start the Experience
            </button>
          </article>

          <article className="tier-card tier-card--elite">
            <span className="tier-card__eyebrow tier-card__eyebrow--muted">First Class Luxe</span>
            <h3 className="tier-card__darkTitle">The Elite</h3>
            <p className="tier-card__darkPrice">RM 199</p>
            <div className="tier-card__divider" aria-hidden="true" />
            <dl className="tier-card__specs">
              <div className="tier-card__specRow">
                <dt>Monthly Curation</dt>
                <dd>Coffee + candle</dd>
              </div>
              <div className="tier-card__specRow">
                <dt>Price Advantage</dt>
                <dd>25% Off</dd>
              </div>
              <div className="tier-card__specRow">
                <dt>Exclusive Access</dt>
                <dd>Private drops</dd>
              </div>
            </dl>
            <button type="button" className="tier-card__darkButton">
              Select First Class
            </button>
          </article>

          <article className="tier-card tier-card--vvip">
            <span className="tier-card__eyebrow tier-card__eyebrow--subtle">Est. 2024</span>
            <div className="tier-card__miniRule" aria-hidden="true" />
            <h3 className="tier-card__vvipTitle">VVIP Exclusive</h3>
            <p className="tier-card__vvipCaption">(By invitation only)</p>
            <p className="tier-card__vvipPrice">
              <span className="tier-card__featuredAmount">RM 9</span>
              <span className="tier-card__period">/ mo</span>
            </p>
            <p className="tier-card__vvipCopy">
              A 30% lifetime appreciation discount for our founding community members.
            </p>
            <button type="button" className="tier-card__linkButton">
              Apply for Invite
            </button>
            <div className="tier-card__vvipVisualWrap">
              <img src={vvipImage} alt="VVIP tier signature drink" className="tier-card__vvipVisual" loading="lazy" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
