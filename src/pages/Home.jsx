import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InspirationSection from '../components/InspirationSection'
import ExploreSection from '../components/ExploreSection'
import CoffeeCandleSection from '../components/CoffeeCandleSection'
import CurrentModeSection from '../components/CurrentModeSection'
import DownloadSection from '../components/DownloadSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="c2-page">
      <Navbar />
      <Hero />
      <InspirationSection />
      <ExploreSection />
      <CoffeeCandleSection />
      <CurrentModeSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
