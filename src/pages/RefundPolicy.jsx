import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GetInTouchHero from '../components/GetInTouchHero'

export default function RefundPolicy() {
  return (
    <div className="c2-page">
      <Navbar />
      
      <GetInTouchHero 
        backgroundImage="/FKP01620.jpg" 
        className="!bg-center"
      />

      {/* Main Content Container */}
      <main className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto min-h-[70vh] flex flex-col gap-20">
        
        {/* Header Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#28130d]">
            Refund <span className="italic text-[#ef5b23]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6b3a2a] font-light">
            Effective date: <span className="font-semibold text-[#28130d]">September 11, 2026</span>
          </p>
        </div>

        {/* Intro Banner */}
        <div className="bg-[#ebe7e0] py-8 px-6 md:px-12 rounded-2xl text-center shadow-sm">
          <p className="text-[#3a241c] text-lg md:text-xl leading-relaxed">
            This Refund Policy applies to food, beverages, vouchers, tokens, and other purchases made through C2 Coffee & Candle's website and mobile application.
          </p>
        </div>

        {/* 1. Contact Us */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28130d] flex items-baseline gap-4 mb-4">
              <span className="text-[#ef5b23] text-2xl">1</span> Contact us
            </h2>
            <p className="text-[#6b3a2a] mb-6 text-lg leading-relaxed">
              For refund or order issues, contact us at:
            </p>
            <ul className="space-y-4 border-l-2 border-[#ef5b23]/30 pl-6 text-[#6b3a2a] text-lg leading-relaxed">
              <li><strong className="text-[#28130d]">Email:</strong> partnerships@c2coffeeandcandle.com</li>
              <li><strong className="text-[#28130d]">WhatsApp/Phone:</strong> +60 12-345 6789</li>
              <li><strong className="text-[#28130d]">Business address:</strong> Eco Forest, Semenyih, Selangor</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-[#704f38] text-white p-8 md:p-10 rounded-3xl shadow-sm">
             <h3 className="text-2xl font-bold mb-3 leading-relaxed">Need further assistance?</h3>
             <p className="text-[#dcd7d0] mb-8 font-light text-lg leading-relaxed">
               Please include your order number, purchase date and time, outlet, a description of the issue, and photos where relevant.
             </p>
             <a href="/get-in-touch" className="inline-block border border-white/30 text-white hover:bg-white hover:text-[#704f38] transition-colors rounded-full px-8 py-3 text-sm tracking-wider font-semibold uppercase">
               Get In Touch
             </a>
          </div>
        </section>

        {/* 2. Eligible refund requests - Zig Zag */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28130d] flex items-baseline gap-4 mb-4">
              <span className="text-[#ef5b23] text-2xl">2</span> Eligible refund requests
            </h2>
            <p className="text-[#6b3a2a] mb-4 text-lg leading-relaxed">We will review refund or replacement requests for:</p>
            <ul className="space-y-3 text-[#6b3a2a] text-lg leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Incorrect or missing items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Damaged, unsafe, or unsatisfactory items</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Duplicate charges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Confirmed payment failures where payment was taken</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Orders that cannot be fulfilled by us</span>
              </li>
            </ul>
            <div className="bg-[#f0ece5] p-6 rounded-2xl flex items-start gap-4">
               <div className="flex-shrink-0 text-[#ef5b23]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                  <h4 className="font-bold text-[#28130d] mb-1 text-lg">Please note</h4>
                  <p className="text-[#6b3a2a]">To help us investigate quickly, please report food and drink issues within 24 hours of collection or delivery.</p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm relative">
            <img src="/FKP01952.jpg" alt="Eligible refund requests" className="w-full h-full object-cover object-center" />
          </div>
        </section>

        {/* 3. Cancellations - Zig Zag */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28130d] flex items-baseline gap-4 mb-4">
              <span className="text-[#ef5b23] text-2xl">3</span> Cancellations
            </h2>
            <p className="text-[#6b3a2a] text-lg leading-relaxed">
              Customers may request cancellation before the order has been accepted or prepared. Once preparation has started, cancellation and refund requests are assessed case by case.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm relative">
             <img src="/FKP01862.jpg" alt="Cancellations" className="w-full h-full object-cover object-center" />
          </div>
        </section>

        {/* 4. How refunds are issued - Callout layout */}
        <section className="bg-[#ebe7e0] p-8 md:p-12 rounded-3xl shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28130d] flex items-baseline gap-4 mb-4">
            <span className="text-[#ef5b23] text-2xl">4</span> How refunds are issued
          </h2>
          <p className="text-[#6b3a2a] mb-6 text-lg leading-relaxed">If approved:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#fae8df] text-[#ef5b23] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <p className="text-[#6b3a2a] leading-relaxed">Card and DuitNow QR payments are refunded to the original payment method.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#fae8df] text-[#ef5b23] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v1m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-[#6b3a2a] leading-relaxed">Token purchases are refunded as tokens to the customer wallet, unless otherwise required by law.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#ef5b23]/20">
              <div className="w-10 h-10 rounded-full bg-[#fae8df] text-[#ef5b23] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-[#6b3a2a] leading-relaxed">Refunds are processed within [7-14] business days after approval. The time for funds to appear may vary depending on the bank or payment provider.</p>
            </div>
          </div>
        </section>

        {/* 5. Non-refundable situations - Zig Zag */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28130d] flex items-baseline gap-4 mb-4">
              <span className="text-[#ef5b23] text-2xl">5</span> Non-refundable situations
            </h2>
            <p className="text-[#6b3a2a] mb-4 text-lg leading-relaxed">Refunds are generally not provided for:</p>
            <ul className="space-y-3 text-[#6b3a2a] text-lg leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Change of mind after an order has been prepared, collected, or consumed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Failure to collect an order within the stated collection period</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Expired, redeemed, or promotional vouchers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef5b23] mt-2 text-xs">●</span>
                <span>Vouchers or promotions with no cash value</span>
              </li>
            </ul>
            <div className="bg-[#f0ece5] p-6 rounded-2xl flex items-start gap-4">
               <div className="flex-shrink-0 text-[#ef5b23]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                  <h4 className="font-bold text-[#28130d] mb-1 text-lg">Please note</h4>
                  <p className="text-[#6b3a2a]">This does not affect refunds or remedies required under applicable law.</p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm relative">
             <img src="/FKP01859.jpg" alt="Non-refundable situations" className="w-full h-full object-cover object-center" />
          </div>
        </section>

        {/* 6-8 Remaining Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#28130d] flex items-baseline gap-3 mb-4">
              <span className="text-[#ef5b23] text-xl">6</span> Promotions and vouchers
            </h2>
            <p className="text-[#6b3a2a] text-lg leading-relaxed">
              Promotional vouchers, discounts, and free-item offers are subject to their stated terms. They cannot normally be exchanged for cash or transferred unless we expressly state otherwise.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#28130d] flex items-baseline gap-3 mb-4">
              <span className="text-[#ef5b23] text-xl">7</span> Our decision and escalation
            </h2>
            <p className="text-[#6b3a2a] text-lg leading-relaxed">
              We may request further information before deciding a refund request. If you are not satisfied with our response, please contact us again using the details above so that we can review the matter.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#28130d] flex items-baseline gap-3 mb-4">
              <span className="text-[#ef5b23] text-xl">8</span> Consumer rights
            </h2>
            <p className="text-[#6b3a2a] text-lg leading-relaxed">
              Nothing in this Refund Policy excludes or limits rights available to consumers under applicable Malaysian law.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}
