import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import DownloadAppSection from '../components/DownloadAppSection'
import Footer from '../components/Footer'

export default function Download() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero backgroundImage="/FKP01636.jpg" />
      <DownloadAppSection />
      <Footer />
    </div>
  )
}
