import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GetInTouchHero from '../components/GetInTouchHero'
import fkp01630 from '../assets/legal/FKP01630.jpg'
import c223 from '../assets/legal/C2-23.jpg'
import c242 from '../assets/legal/C2-42.jpg'

const renderBody = (body) => {
  return body.split('\n\n').map((paragraph, idx) => {
    if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('â€¢') || paragraph.trim().startsWith('●')) {
      const text = paragraph.replace(/^[•â€¢●]\s*/, '');
      return (
        <div key={idx} className="flex items-start gap-3 mt-4">
          <span className="text-[#e1b35b] mt-2 text-[10px] flex-shrink-0">●</span>
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
      body: '5.1 "C2 Token" is a closed-loop prepaid stored-value balance intended strictly for member purchases at participating C2 Coffee stores. The conversion valuation is fixed at 1 C2 Token = RM 1.00.\n\n5.2 C2 Tokens enable members to purchase menu items at discounted member token prices structured by membership tier (Sipper, Brewer, Roaster, Legendary).\n\n5.3 Closed-Loop Restrictions: C2 Tokens have no external cash value, cannot be redeemed for physical currency, cannot be transferred peer-to-peer (P2P) to other user accounts, and cannot be used outside C2 Coffee.\n\n5.4 Token top-ups are final, non-refundable, and non-reversible once successfully credited to your account ledger, except where mandated by statutory consumer protection laws or verified technical billing discrepancies.'
    },
    {
      title: 'Loyalty Cups, Membership Tiers & Vouchers',
      body: '6.1 Every qualifying handcrafted beverage collected records 1 Cup toward your lifetime membership progression, unlocking higher tiers (Sipper -> Brewer -> Roaster -> Legendary) and deeper token pricing discounts.\n\n6.2 Vouchers (including Welcome Drink Vouchers, Tier Progression Rewards, Referral Drink Rewards, and Promotional Campaign Vouchers) are subject to explicit validity periods, single-use checkout rules, primary non-stacking conditions, and specified drink category eligibility.\n\n6.3 Referral rewards are credited only after the new user collects their first qualifying order. Any automated abuse, multi-account farming, or fraudulent referral attempts will result in immediate forfeiture of rewards and account suspension.'
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

  return (
    <div className="c2-page !bg-[#fbfdfc]">
      <Navbar />

      <GetInTouchHero
        backgroundImage={fkp01630}
        className="!bg-[center_25%]"
      />

      <main className="py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto min-h-[70vh]">

        {/* Header Title */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#2f554b]">
            Terms of <span className="italic text-[#e1b35b]">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-[#3d5952] font-light">
            Last Updated: <span className="font-semibold text-[#2f554b]">September 4, 2026</span>
          </p>
        </div>

        {/* Editorial Columns Layout */}
        <div
          className="columns-1 md:columns-2 xl:columns-3 gap-12 lg:gap-16"
          style={{ columnRule: '1px solid rgba(47, 85, 75, 0.1)' }}
        >
          {sections.map((section, idx) => (
            <React.Fragment key={idx}>
              <section className="break-inside-avoid mb-12">
                <div className="flex items-baseline gap-4 mb-4 border-b border-[#2f554b]/10 pb-4">
                  <span className="text-[#e1b35b] text-xl font-bold">{String(idx + 1).padStart(2, '0')}.</span>
                  <h2 className="text-xl font-bold text-[#2f554b] leading-snug">
                    {section.title}
                  </h2>
                </div>
                <div className="text-[#3d5952] text-[1.05rem] leading-relaxed">
                  {renderBody(section.body)}
                </div>
              </section>

              {/* Inject Graphic after section 3 */}
              {idx === 2 && (
                <div className="break-inside-avoid mb-12 overflow-hidden rounded-[2rem] shadow-md">
                  <img src={c223} alt="Coffee craft" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
              )}

              {/* Inject Graphic after section 7 */}
              {idx === 6 && (
                <div className="break-inside-avoid mb-12 overflow-hidden rounded-[2rem] shadow-md">
                  <img src={c242} alt="Cafe ambiance" className="w-full h-auto object-cover object-bottom aspect-square" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}
