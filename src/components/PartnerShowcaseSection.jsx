import React, { useEffect, useMemo, useRef, useState } from 'react'
import starIcon from '../assets/Collaboration/star.png'
import './PartnerShowcaseSection.css'

const partners = [
  {
    id: 'brand-partner',
    name: 'Brand Partner',
    tag: 'Logo / Photo',
    description:
      'Introduce the company here with a short explanation of what they do, their audience, and why the partnership makes sense for C2.',
    contribution: 'Campaign support, co-branding, seasonal activations',
  },
  {
    id: 'event-partner',
    name: 'Event Partner',
    tag: 'Logo / Photo',
    description:
      'Use this card to explain the event partner role, the format they contribute to, and how they help shape the customer experience.',
    contribution: 'Venue programming, launch events, audience reach',
  },
  {
    id: 'community-partner',
    name: 'Community Partner',
    tag: 'Logo / Photo',
    description:
      'Summarize the partner focus and highlight the value they bring to the collaboration, whether through network, culture, or shared purpose.',
    contribution: 'Community building, workshops, local engagement',
  },
  {
    id: 'product-partner',
    name: 'Product Partner',
    tag: 'Logo / Photo',
    description:
      'Describe the product story here and clarify what the company contributes to the collaboration from sourcing to product experience.',
    contribution: 'Product supply, limited drops, gifting concepts',
  },
  {
    id: 'creative-partner',
    name: 'Creative Partner',
    tag: 'Logo / Photo',
    description:
      'Capture the partner creative direction here, including how their visual, design, or storytelling input supports the C2 brand world.',
    contribution: 'Art direction, content production, campaign visuals',
  },
]

function getCardsPerPage(width) {
  if (width >= 1100) {
    return 3
  }

  if (width >= 720) {
    return 2
  }

  return 1
}

export default function PartnerShowcaseSection() {
  const [cardsPerPage, setCardsPerPage] = useState(() => getCardsPerPage(window.innerWidth))
  const [activePage, setActivePage] = useState(0)
  const touchStartXRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const totalPages = useMemo(
    () => Math.ceil(partners.length / cardsPerPage),
    [cardsPerPage],
  )

  useEffect(() => {
    setActivePage((currentPage) => Math.min(currentPage, Math.max(totalPages - 1, 0)))
  }, [totalPages])

  const visiblePartners = useMemo(() => {
    const startIndex = activePage * cardsPerPage
    return partners.slice(startIndex, startIndex + cardsPerPage)
  }, [activePage, cardsPerPage])

  const thumbWidth = `${100 / totalPages}%`
  const thumbOffset = `${(100 / totalPages) * activePage}%`

  const goToPage = (pageIndex) => {
    if (pageIndex < 0 || pageIndex >= totalPages) {
      return
    }

    setActivePage(pageIndex)
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return
    }

    const deltaX = touchStartXRef.current - event.changedTouches[0].clientX
    touchStartXRef.current = null

    if (Math.abs(deltaX) < 42) {
      return
    }

    if (deltaX > 0) {
      goToPage(activePage + 1)
      return
    }

    goToPage(activePage - 1)
  }

  return (
    <section className="partner-showcase" aria-labelledby="partner-showcase-title">
      <div className="partner-showcase__inner">
        <header className="partner-showcase__header">
          <span className="partner-showcase__eyebrow">OUR PARTNERS</span>
          <h2 className="partner-showcase__title" id="partner-showcase-title">
            The Brands And People
            <em className="partner-showcase__title-accent">We Build With</em>
          </h2>

          <div className="partner-showcase__divider" aria-hidden="true">
            <span className="partner-showcase__divider-line" />
            <img src={starIcon} alt="" className="partner-showcase__star" />
            <span className="partner-showcase__divider-line" />
          </div>

          <p className="partner-showcase__subtitle">
            Each card can feature a partner logo, a short company overview, and the role they play in shaping the
            C2 collaboration story.
          </p>
        </header>

        <div
          className="partner-showcase__viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="partner-showcase__grid">
            {visiblePartners.map((partner) => (
              <article key={partner.id} className="partner-card">
                <div className="partner-card__media">
                  <span className="partner-card__mediaLabel">{partner.tag}</span>
                </div>

                <div className="partner-card__body">
                  <h3 className="partner-card__title">{partner.name}</h3>
                  <p className="partner-card__description">{partner.description}</p>

                  <div className="partner-card__meta">
                    <span className="partner-card__metaLabel">Contribution</span>
                    <p className="partner-card__metaValue">{partner.contribution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
