import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import DirectionSection from '../components/DirectionSection'
import Footer from '../components/Footer'

export default function GetInTouch() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero />
      <DirectionSection />
      <Footer />
    </div>
  )
}
