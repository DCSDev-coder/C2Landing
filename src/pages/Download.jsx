import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouchHero from '../components/GetInTouchHero'
import DownloadAppSection from '../components/DownloadAppSection'
import Footer from '../components/Footer'
import fkp01636 from '../assets/misc/FKP01636.jpg'

export default function Download() {
  return (
    <div className="c2-page">
      <Navbar />
      <GetInTouchHero backgroundImage={fkp01636} />
      <DownloadAppSection />
      <Footer />
    </div>
  )
}
