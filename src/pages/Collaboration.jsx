import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import CollaborationSection from '../components/CollaborationSection'
import PartnerShowcaseSection from '../components/PartnerShowcaseSection'
import Footer from '../components/Footer'
import collaborationHeroImage from '../assets/images/Collab.jpeg'

export default function Collaboration() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero backgroundImage={collaborationHeroImage} />
      <CollaborationSection />
      <PartnerShowcaseSection />
      <Footer />
    </div>
  )
}
