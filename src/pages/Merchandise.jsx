import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import MerchandiseSection from '../components/MerchandiseSection'
import Footer from '../components/Footer'
import bannerHeroImage from '../assets/images/banner.webp'

export default function Merchandise() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero
        backgroundImage={bannerHeroImage}
      />
      <MerchandiseSection />
      <Footer />
    </div>
  )
}

