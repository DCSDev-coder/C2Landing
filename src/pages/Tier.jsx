import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import TierOverviewSection from '../components/TierOverviewSection'
import Footer from '../components/Footer'

export default function Tier() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero />
      <TierOverviewSection />
      <Footer />
    </div>
  )
}
