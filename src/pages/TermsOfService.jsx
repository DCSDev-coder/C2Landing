import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GetInTouchHero from '../components/GetInTouchHero'

const renderBody = (body) => {
  return body.split('\n\n').map((paragraph, idx) => {
    if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('â€¢') || paragraph.trim().startsWith('●')) {
      const text = paragraph.replace(/^[•â€¢●]\s*/, '');
      return (
        <div key={idx} className="flex items-start gap-4 mt-4">
          <span className="text-[#e1b35b] mt-1.5 text-xs flex-shrink-0">●</span>
          <span>{text}</span>
        </div>
      );
    }
    return (
      <p key={idx} className="mt-4 first:mt-0">
        {paragraph}
      </p>
    );
  });
};

export default function TermsOfService() {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: 'Agreement & Acceptance of Terms',
      body: 'By downloading, accessing, or using the C2 Coffee mobile application ("App"), you agree to be legally bound by these Terms and Conditions ("Terms"). The App is operated by C2 Coffee ("C2 Coffee + Candle", "we", "us", or "our") to provide self-pickup ordering, closed-loop prepaid C2 Token services, loyalty cup tracking, and promotional rewards across participating C2 Coffee outlets (including Broga, Kajang, Semenyih, and future stores). If you do not agree to these Terms, please immediately discontinue use of the App.'
    },
    {
      title: 'Account Registration & Authentication',
      body: '2.1 Account creation requires a valid email address and Malaysian mobile phone number. Authentication is conducted using an email One-Time Password (OTP) sent to the email address registered to your account.\n\n2.2 You are solely responsible for maintaining the confidentiality of your account access and credentials. You agree that all activities and transactions performed under your authenticated phone number are binding.\n\n2.3 You agree to provide true, accurate, and current information during registration (including full name, contact details, and optional birthday for reward verification). Any change to the email address on your profile requires verification of a code sent to the proposed new address before it takes effect.'
    },
    {
      title: 'Menu, Customizations & Store Orders',
      body: '3.1 All beverage items (Coffee Craft, Barista Craft, Pour Over, Mocktails, Matcha, Chocolate, Coffee, Flavoured Coffee), pastries, merchandise, and candles are subject to real-time store availability.\n\n3.2 Handcrafted drinks are customized according to your specifications (such as choice of coffee beans, espresso shot count, choice of milk, temperature, ice level, sweetness, and sparkling mixer). Once an order enters preparation, customizations cannot be modified.\n\n3.3 All orders placed on the App are for Store Self-Pickup only. Delivery and courier dispatch are not supported at this time.'
    },
    {
      title: 'Token Checkout & Payment Gateway Security',
      body: '4.1 Menu item checkout in the App is completed using prepaid C2 Tokens only. Direct cash, FPX, debit card, credit card, or third-party wallet checkout for menu items is not supported inside the App at this time.\n\n4.2 Online token top-up will use an authorized payment gateway once enabled. Until then, token top-up availability may be limited to approved store or administrative channels.\n\n4.3 C2 Coffee does not capture, process, log, or store credit/debit card numbers (PAN), CVV security codes, or banking credentials in the App.'
    },
    {
      title: 'C2 Token System (Closed-Loop Prepaid Balance)',
      body: '5.1 "C2 Token" is a closed-loop prepaid stored-value balance intended strictly for member purchases at participating C2 Coffee stores. The conversion valuation is fixed at 1 C2 Token = RM 1.00.\n\n5.2 C2 Tokens enable members to purchase menu items at discounted member token prices structured by membership tier (Kawan, Dilamun, Ketagih, Legend).\n\n5.3 Closed-Loop Restrictions: C2 Tokens have no external cash value, cannot be redeemed for physical currency, cannot be transferred peer-to-peer (P2P) to other user accounts, and cannot be used outside C2 Coffee.\n\n5.4 Token top-ups are final, non-refundable, and non-reversible once successfully credited to your account ledger, except where mandated by statutory consumer protection laws or verified technical billing discrepancies.'
    },
    {
      title: 'Loyalty Cups, Membership Tiers & Vouchers',
      body: '6.1 Every qualifying handcrafted beverage collected records 1 Cup toward your lifetime membership progression, unlocking higher tiers (Kawan -> Dilamun -> Ketagih -> Legend) and deeper token pricing discounts.\n\n6.2 Vouchers (including Welcome Drink Vouchers, Tier Progression Rewards, Referral Drink Rewards, and Promotional Campaign Vouchers) are subject to explicit validity periods, single-use checkout rules, primary non-stacking conditions, and specified drink category eligibility.\n\n6.3 Referral rewards are credited only after the new user collects their first qualifying order. Any automated abuse, multi-account farming, or fraudulent referral attempts will result in immediate forfeiture of rewards and account suspension.'
    },
    {
      title: 'Store Pickup Fulfillment & Food Safety',
      body: '7.1 Customers are responsible for selecting the correct store location and arriving within the estimated pickup lead window (standard lead time: 15 minutes).\n\n7.2 Due to strict food safety and temperature quality standards for fresh espresso, hot milk foam, chilled beverages, and artisan pastries, uncollected orders will be safely disposed of after a reasonable holding period with no refund or replacement entitlement.'
    },
    {
      title: 'Cancellations, Refunds & Billing Queries',
      body: '8.1 Customers may freely edit the cart before checkout. After checkout, an order may be cancelled in the App only while it remains unprepared. Once the store starts preparation, customer self-cancellation is not available.\n\n8.2 In the event of store unavailability, equipment breakdown, out-of-stock items, duplicate billing, or a verified technical issue, C2 Coffee store management or authorized administrators may cancel, refund, or return tokens through official administrative channels.\n\n8.3 Billing or payment discrepancy claims must be submitted to C2 Support (accessible under Profile > Settings > Contact Support or support@c2coffeeandcandle.com) with the order reference and any relevant evidence within fourteen (14) days of the transaction date.'
    },
    {
      title: 'Intellectual Property & User Conduct',
      body: '9.1 All trademarks, logos, brand names ("Mont Broga", "Shakerato Bianco", "Senja Di Broga", "Dato Blend", "Datin Blend", "C2 Coffee + Candle"), graphics, imagery, and software code are the proprietary intellectual property of C2 Coffee.\n\n9.2 Users shall not reverse engineer, decompile, scrape, or exploit the App for unauthorized commercial gains or interfere with server integrity.'
    },
    {
      title: 'Modifications, Governing Law & Jurisdiction',
      body: '10.1 We reserve the right to revise these Terms at any time. Updated versions will be published within the App with a revised date stamp. Continued use of the App following updates constitutes binding agreement to the amended Terms.\n\n10.2 These Terms and Conditions are governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.'
    },
    {
      title: 'Customer Support & Inquiries',
      body: 'For assistance with store pickup orders, prepaid C2 Tokens, membership rewards, or billing inquiries, customer support is accessible directly under Profile > Settings > Contact Support or via email at support@c2coffeeandcandle.com.'
    }
  ]

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  return (
    <div className="c2-page !bg-white">
      <Navbar />
      
      <GetInTouchHero 
        backgroundImage="/FKP01630.jpg" 
        className="!bg-[center_25%]"
      />

      <main className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto min-h-[70vh]">
        
        {/* Header Title */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#2f554b]">
            Terms of <span className="italic text-[#e1b35b]">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-[#3d5952] font-light">
            Last Updated: <span className="font-semibold text-[#2f554b]">September 4, 2026</span>
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="flex flex-col border-t border-[#2f554b]/10">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-[#2f554b]/10">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openSection === idx}
              >
                <div className="flex items-center gap-4 md:gap-6 pr-4">
                  <span className="text-[#e1b35b] text-xl md:text-2xl font-bold w-6 shrink-0">{idx + 1}.</span>
                  <h2 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${openSection === idx ? 'text-[#2f554b]' : 'text-[#2f554b]/80 group-hover:text-[#2f554b]'}`}>
                    {section.title}
                  </h2>
                </div>
                <div className={`shrink-0 transform transition-transform duration-300 ${openSection === idx ? 'rotate-180 text-[#e1b35b]' : 'text-[#2f554b]/50 group-hover:text-[#2f554b]'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === idx ? 'max-h-[3000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
              >
                <div className="text-[#3d5952] text-[1.05rem] leading-relaxed pl-10 md:pl-12 pr-0 md:pr-12">
                  {renderBody(section.body)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
