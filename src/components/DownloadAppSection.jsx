import React, { lazy, Suspense, useEffect, useState } from 'react';

import appDemo2Poster from '../assets/app-screens/app-demo2-poster.webp';
import rockBg from '../assets/Download/rock-background.webp';
import './DownloadAppSection.css';

const C2PhoneScene = lazy(() => import('./C2PhoneScene'));

function PhoneFallback() {
  return (
    <div className="relative h-[590px] sm:h-[680px] w-full max-w-[520px] flex items-center justify-center">
      <div className="relative w-[220px] sm:w-[250px] aspect-[1206/2462] border-[9px] border-[#171a19] rounded-[42px] bg-black overflow-hidden shadow-2xl">
        <img src={appDemo2Poster} alt="Current C2 Coffee mobile app home screen" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  ));

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(query.matches);
    syncPreference();
    query.addEventListener('change', syncPreference);
    return () => query.removeEventListener('change', syncPreference);
  }, []);

  return prefersReducedMotion;
}

export default function DownloadAppSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12 w-full flex justify-center bg-[#fbfdfc] overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-24 lg:gap-32">
        {/* Phone Mockup Left */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center min-h-[600px] sm:min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <img src={rockBg} alt="" className="w-full max-w-[750px] h-auto object-contain scale-125 md:scale-[1.35] -ml-8 md:-ml-12 mt-16 md:mt-24" />
          </div>

          {/* Use the iPhone 17 Pro-style 3D model at every viewport size. */}
          <div className="relative z-10 flex justify-center items-center w-full mt-0 md:-mt-32">
            {!prefersReducedMotion ? (
              <Suspense fallback={<PhoneFallback />}>
                <C2PhoneScene poster={appDemo2Poster} />
              </Suspense>
            ) : (
              <PhoneFallback />
            )}
          </div>
        </div>

        {/* Content Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2f554b] leading-tight mb-2">
            Take the C2
            <br />
            Experience
          </h1>

          <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium italic text-[#e1b35b] mb-6">
            With You
          </h3>

          <p className="text-[#3d5952] text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Our mobile app brings the tactile warmth of the cafe, the rhythmic brew of slow roasts and the serene glow of our hand-poured candles directly to your fingertips. Crafted for intentional life
          </p>

          <div className="download-app-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.c2coffeeandcandle.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="c2-store-btn c2-store-btn--google"
              aria-label="Get C2 Coffee on Google Play"
            >
              <span className="c2-store-btn__icon-box" aria-hidden="true">
                <svg className="c2-store-btn__icon" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
              </span>
              <div className="c2-store-btn__text">
                <span className="c2-store-btn__sub">Get it on</span>
                <span className="c2-store-btn__name">Google Play</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/my/app/c2-coffee/id6809305739"
              target="_blank"
              rel="noopener noreferrer"
              className="c2-store-btn c2-store-btn--apple"
              aria-label="Get C2 Coffee on the App Store"
            >
              <span className="c2-store-btn__icon-box" aria-hidden="true">
                <svg className="c2-store-btn__icon" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </span>
              <div className="c2-store-btn__text">
                <span className="c2-store-btn__sub">Get it on</span>
                <span className="c2-store-btn__name">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
