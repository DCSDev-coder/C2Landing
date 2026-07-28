import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import DirectionSection from '../components/DirectionSection'
import Footer from '../components/Footer'

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-[#f4ede3] text-[#23150c] font-sans">
      <Navbar />
      <GetInTouchHero />
      <DirectionSection />
      <Footer />
    </div>
  )
}
