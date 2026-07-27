import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InspirationSection from './components/InspirationSection'
import ExploreSection from './components/ExploreSection'
import CoffeeCandleSection from './components/CoffeeCandleSection'

function App() {
  return (
    <div className="min-h-screen bg-[#f4ede3] text-[#23150c] font-sans">
      <Navbar />
      <Hero />
      <InspirationSection />
      <ExploreSection />
      <CoffeeCandleSection />
    </div>
  )
}

export default App
