import React from 'react'
import Navbar from '../components/Navbar'
import TierHero from '../components/TierHero'
import TierOverviewSection from '../components/TierOverviewSection'
import Footer from '../components/Footer'

export default function Tier() {
  return (
    <div className="c2-page">
      <Navbar />
      <TierHero />
      <TierOverviewSection />
      <Footer />
    </div>
  )
}
