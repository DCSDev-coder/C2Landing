import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './TierOverviewSection.css'
import tier1 from '../assets/tiers/tier-1.png'
import tier2 from '../assets/tiers/tier-2.png'
import tier3 from '../assets/tiers/tier-3.png'
import tier4 from '../assets/tiers/tier-4.png'
import matchaLatte from '../assets/drinks/MATCHA LATTE.png'
import bloodyPeach from '../assets/drinks/BLOODY PEACH.png'

const tiersData = [
  {
    id: 1,
    name: 'SIPPER',
    subtitle: 'Your coffee journey starts here.',
    image: tier1,
    bg: '#ffffff', // White
    titleColor: '#db5a7c', // Strawberry Pink
    textColor: '#c24b69', // Darker Strawberry Pink
    accentColor: '#db5a7c', // Strawberry Pink
    rewards: [
      '10% discount on all orders',
      'Early access to seasonal drops',
      'Member-only news/letter'
    ]
  },
  {
    id: 2,
    name: 'BREWER',
    subtitle: 'Made for your everyday ritual.',
    image: tier2,
    bg: '#fff5d6', // Soft pastel yellow
    titleColor: '#c45a16', // Burnt orange
    textColor: '#8a400f', // Darker orange
    accentColor: '#e07624', // Bright orange
    rewards: [
      '10% discount on all orders',
      '15% discount on all orders',
      'Free Shipping on all orders'
    ]
  },
  {
    id: 3,
    name: 'ROASTER',
    subtitle: 'Deeper flavour. Higher status.',
    image: tier3,
    bg: '#251511',
    titleColor: '#ffffff',
    textColor: '#ebd8d1',
    accentColor: '#de663e',
    rewards: [
      'Monthly candle and Coffee',
      '25% discount on all orders',
      'Exclusive event invitations'
    ]
  },
  {
    id: 4,
    name: 'LEGENDARY',
    subtitle: 'The ultimate C2 experience.',
    image: tier4,
    bg: '#140f1c',
    titleColor: '#ffffff',
    textColor: '#d4cbdf',
    accentColor: '#a074c7',
    rewards: [
      'no idea',
      '30% discount on all orders',
      'no idea'
    ]
  }
]

const TierCard = ({ tier }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Checkmark SVG matching screenshot
  const Checkmark = () => (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill={tier.accentColor}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div 
      className="relative w-full aspect-[4/5] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front of Card (Image) */}
        <div 
          className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden shadow-md"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            border: '2px solid transparent'
          }}
        >
          <img src={tier.image} alt={tier.name} className="w-full h-full object-cover object-center" />
        </div>

        {/* Back of Card (Rewards) */}
        <div 
          className="absolute inset-0 rounded-xl md:rounded-2xl shadow-lg flex flex-col p-6 md:p-8"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: tier.bg,
            border: `2px solid ${tier.accentColor}`
          }}
        >
          <div className="flex-1">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-1" style={{ color: tier.accentColor, opacity: 0.9 }}>
              Tier {tier.id}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-2" style={{ color: tier.titleColor }}>
              {tier.name}
            </h3>
            <p className="text-sm mb-6 font-medium" style={{ color: tier.accentColor, opacity: 0.9 }}>
              {tier.subtitle}
            </p>

            <ul className="space-y-3">
              {tier.rewards.map((reward, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3">
                  <Checkmark />
                  <span className="text-sm md:text-base font-medium leading-snug" style={{ color: tier.textColor }}>
                    {reward}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TierOverviewSection() {
  return (
    <section className="tier-overview" aria-labelledby="tier-overview-title">
      <div className="tier-overview__inner flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">
        
        {/* Left Side: 2x2 Grid of Cards */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 z-10 relative">
          {tiersData.map(tier => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Right Side: Content & Graphics */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center relative">
          
          {/* Top Drink */}
          <div className="hidden lg:block w-48 xl:w-64 drop-shadow-2xl opacity-90 animate-[float_6s_ease-in-out_infinite] mb-6 self-start -ml-4 xl:-ml-12">
            <img src={matchaLatte} alt="" className="w-full h-auto object-contain" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1b382d] mb-6 leading-tight" id="tier-overview-title" style={{ fontFamily: 'serif' }}>
            Elevate Your <br/>
            <span className="italic text-[#d9a021]">Daily Ritual</span>
          </h2>
          
          <p className="text-[#3d5952] text-lg md:text-xl leading-relaxed max-w-md">
            Join a community dedicated to quiet moments of the day. Curated coffee beans and hand-poured candles.
          </p>

          {/* Bottom Drink */}
          <div className="hidden lg:block w-56 xl:w-72 drop-shadow-2xl opacity-90 animate-[float_7s_ease-in-out_infinite_reverse] mt-8 self-end -mr-12 xl:-mr-24">
            <img src={bloodyPeach} alt="" className="w-full h-auto object-contain" />
          </div>

        </div>

      </div>
    </section>
  )
}
