import React from 'react'
import cafeBg from '../assets/images/C2Timelapse.gif 1.png'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${cafeBg})` }}>
      <div className="hero__inner">
        <div className="hero__stage">
          <div className="hero__textDesktop">
            <div className="hero__column hero__column--left">
              <div className="hero__wordGroup hero__wordGroup--leftTop">
                <span className="hero__word">a latte</span>
              </div>
              <div className="hero__wordGroup hero__wordGroup--leftBottom">
                <span className="hero__word">perfect</span>
              </div>
            </div>

            <div className="hero__column hero__column--right">
              <div className="hero__wordGroup hero__wordGroup--rightTop">
                <span className="hero__word">love makes</span>
              </div>
              <div className="hero__wordGroup hero__wordGroup--rightBottom">
                <span className="hero__word">scent</span>
              </div>
            </div>
          </div>

          <div className="hero__textMobile">
            <span className="hero__wordMobile">a latte</span>
            <span className="hero__wordMobile">love makes</span>
            <span className="hero__wordMobile hero__wordMobile--pair">
              <span className="hero__wordMobilePart hero__wordMobilePart--perfect">perfect</span>
              <span className="hero__wordMobilePart hero__wordMobilePart--scent">scent</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
