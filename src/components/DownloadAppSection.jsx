import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import homeImg from '../assets/app-screens/home.png';
import menuImg from '../assets/app-screens/menu.png';
import drinkDetailsImg from '../assets/app-screens/drink-details.png';
import rewardsImg from '../assets/app-screens/rewards.png';

const appScreens = [
  { id: 1, src: homeImg, alt: 'Home Screen' },
  { id: 2, src: menuImg, alt: 'Menu Screen' },
  { id: 3, src: drinkDetailsImg, alt: 'Drink Details Screen' },
  { id: 4, src: rewardsImg, alt: 'Rewards Screen' },
];

export default function DownloadAppSection() {
  const [[currentSlide, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const nextSlide = (currentSlide + newDirection + appScreens.length) % appScreens.length;
    setPage([nextSlide, newDirection]);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-6 md:px-12 w-full flex justify-center bg-[#fbfdfc]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-24 lg:gap-32 overflow-hidden">
      {/* Phone Mockup Left */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center gap-4 sm:gap-8">
        <button onClick={prevSlide} className="text-[#2f554b] hover:text-[#2f554b]/70 transition-colors p-2" aria-label="Previous feature">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] border-[12px] border-black rounded-[48px] bg-black flex justify-center overflow-hidden flex-shrink-0">
          {/* Phone Screen Content */}
          <div className="w-full h-full relative overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img 
                key={currentSlide}
                src={appScreens[currentSlide].src} 
                alt={appScreens[currentSlide].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full h-auto min-h-full object-top absolute top-0 left-0 blur-3xl grayscale opacity-60"
              />
            </AnimatePresence>
          </div>

          {/* Notch */}
          <div className="absolute top-0 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          {/* Left/Right Buttons */}
          <div className="absolute top-24 -left-[16px] w-1 h-12 bg-black rounded-l-md z-10"></div>
          <div className="absolute top-40 -left-[16px] w-1 h-16 bg-black rounded-l-md z-10"></div>
          <div className="absolute top-32 -right-[16px] w-1 h-20 bg-black rounded-r-md z-10"></div>
        </div>

        <button onClick={nextSlide} className="text-[#2f554b] hover:text-[#2f554b]/70 transition-colors p-2" aria-label="Next feature">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2f554b] leading-tight mb-2">
          Take the C2
          <br />
          Experience
        </h2>
        
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium italic text-[#e1b35b] mb-6">
          With You
        </h3>
        
        <p className="text-[#3d5952] text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
          Our mobile app brings the tactile warmth of the cafe, the rhythmic brew of slow roasts and the serene glow of our hand-poured candles directly to your fingertips. Crafted for intentional life
        </p>

        <div className="mb-8">
          <span className="text-[#e1b35b] font-medium italic text-lg tracking-wide">*coming soon</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="flex items-center gap-3 border border-black/30 hover:border-black text-black px-6 py-3 rounded-full transition-colors hover:bg-black/5"
          >
            <svg className="w-8 h-8 fill-black" viewBox="0 0 512 512">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-90">Get it on</span>
              <span className="text-lg font-bold leading-none">Google Play</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 bg-[#e1b35b] hover:bg-[#c99f4d] text-white px-6 py-3 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 fill-white" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-90">Get it on</span>
              <span className="text-lg font-bold leading-none">App Store</span>
            </div>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
