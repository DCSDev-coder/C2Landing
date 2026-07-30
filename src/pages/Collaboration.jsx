import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import CollaborationSection from '../components/CollaborationSection'
import PartnerShowcaseSection from '../components/PartnerShowcaseSection'
import Footer from '../components/Footer'
import collaborationHeroVideo from '../assets/images/Baristas_working_in_coffee_shop.mp4'

export default function Collaboration() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero backgroundVideo={collaborationHeroVideo} />
      <CollaborationSection />
      <PartnerShowcaseSection />
      <Footer />
    </div>
  )
}
