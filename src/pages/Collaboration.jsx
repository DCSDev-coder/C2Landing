import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import CollaborationSection from '../components/CollaborationSection'
import PartnerShowcaseSection from '../components/PartnerShowcaseSection'
import Footer from '../components/Footer'

export default function Collaboration() {
  return (
    <div className="min-h-screen bg-[#f4ede3] text-[#23150c] font-sans">
      <Navbar />
      <GetInTouchHero />
      <CollaborationSection />
      <PartnerShowcaseSection />
      <Footer />
    </div>
  )
}
