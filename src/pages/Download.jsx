import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import DownloadAppSection from '../components/DownloadAppSection'
import Footer from '../components/Footer'
import downloadHero from '../assets/Download/IMG_0694.webp'

export default function Download() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero backgroundImage={downloadHero} className="download-page-hero" />
      <DownloadAppSection />
      <Footer />
    </div>
  )
}
