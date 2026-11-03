import React from 'react'
import { merchandiseProducts } from '../data/merchandise'
import { openC2AppOrDownload } from '../utils/appDeepLink'
import lifestyleImage from '../assets/images/FKP01624.webp'
import './MerchandiseSection.css'

export default function MerchandiseSection() {
  const handleProductClick = (e) => {
    openC2AppOrDownload(e)
  }

  return (
    <section className="merch-section" id="merchandise" aria-label="C2 Official Merchandise">
      <div className="merch-container">
        {/* Section Header */}
        <div className="merch-header" data-reveal>
          <h2 className="merch-title">
            The C2 <span className="merch-title-highlight">Cup Collection</span>
          </h2>
          <p className="merch-subtitle">
            Minimalist ceramic and insulated drinkware designed for daily coffee rituals.
          </p>
        </div>

        {/* Product Grid - Clean Self-Contained Cards */}
        <div className="merch-grid">
          {merchandiseProducts.map((product) => (
            <div
              key={product.id}
              className="merch-item"
              data-reveal
              onClick={handleProductClick}
            >
              <a
                href="/download"
                className="merch-card"
                onClick={handleProductClick}
                aria-label={`View ${product.name} in C2 app`}
              >
                {/* Centered Cup Visual */}
                <div className="merch-card__visual">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="merch-cup-img"
                    loading="lazy"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>

                {/* Name and Description - Placed Inside the Card */}
                <div className="merch-card__info">
                  <h3 className="merch-card__title">
                    {product.name}
                  </h3>
                  <p className="merch-card__desc">
                    {product.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Split Showcase Banner - Inspired by Reference Design */}
        <div className="merch-perk-split">
          {/* Left Sage Green Card with Authentic Postage Stamp Styling */}
          <div className="merch-perk-left" data-reveal>
            {/* Authentic Postage Stamp Serrated Teeth */}
            <div className="merch-perk-teeth" aria-hidden="true" />

            <div className="merch-perk-left__body">
              <h3 className="merch-perk-title">
                Bring Tumbler,<br />Get RM 1 Off
              </h3>

              {/* Decorative Squiggle Wavy Line */}
              <svg
                className="merch-squiggle"
                viewBox="0 0 76 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 7C9 2 16 12 23 7C30 2 37 12 44 7C51 2 58 12 65 7C69 4 73 9 74 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <p className="merch-perk-text">
                Bring your own tumbler for any handcrafted drink and enjoy an instant RM 1.00 discount.
              </p>

              <div className="merch-perk-actions">
                <a href="/download" className="merch-perk-btn merch-perk-btn--primary">
                  Download C2 App
                </a>
                <a href="/get-in-touch" className="merch-perk-btn merch-perk-btn--outline">
                  Visit Our Cafe
                </a>
              </div>
            </div>
          </div>

          {/* Right Lifestyle Photography Card */}
          <div className="merch-perk-right" data-reveal>
            <img
              src={lifestyleImage}
              alt="C2 Coffee and Candle handmade ceramics and ambiance"
              className="merch-perk-image"
              loading="lazy"
            />
            <span className="merch-perk-image-tag">
              C2 Coffee + Candle • Eco Forest
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
