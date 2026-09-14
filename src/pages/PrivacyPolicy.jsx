import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GetInTouchHero from '../components/GetInTouchHero'
import c2Logo from '../assets/brand/c2_logo.png'
import c226 from '../assets/legal/C2-26.jpg'
import c2161 from '../assets/legal/C2-161.jpg'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Introduction & PDPA Compliance',
      body: 'C2 Coffee ("C2 Coffee + Candle", "we", "us", or "our") respects your privacy and is dedicated to protecting the personal data of our customers in accordance with the Malaysian Personal Data Protection Act 2010 ("PDPA"). This Privacy Policy explains how we collect, process, manage, store, and safeguard your personal information when you use our mobile application ("App") and visit our retail coffee stores.'
    },
    // We handle section 2 differently (manual cards)
    {
      title: 'Purposes of Data Processing',
      body: 'Your personal data is collected and processed for the following operational purposes:\n\n• Preparing and fulfilling your store self-pickup orders according to beverage customizations.\n\n• Managing your closed-loop C2 Token prepaid balance and calculating tiered member pricing (Sipper, Brewer, Roaster, Legendary).\n\n• Administering loyalty cups progression, welcome rewards, and promotional campaign vouchers.\n\n• Authenticating your login sessions via email OTP.\n\n• Sending real-time order readiness alerts and critical operational notifications.\n\n• Detecting, preventing, and investigating fraud, unauthorized access, or referral abuse.'
    },
    {
      title: 'Disclosure to Third-Party Service Providers',
      body: 'We do not sell, rent, or lease your personal information to third parties. We may disclose personal data to trusted technical partners strictly on a need-to-know basis:\n\n• Payment Gateway: an authorized provider for C2 Token top-up once online top-up is enabled.\n\n• Email Delivery Service: authorized SMTP or transactional email infrastructure used to send account verification codes and service messages.\n\n• Cloud Infrastructure & Hosting: Secure cloud hosting providers with end-to-end encryption and strict access controls.\n\n• Legal & Regulatory Authorities: When required by applicable Malaysian law, court order, or governmental authority.'
    },
    {
      title: 'Data Retention & 7-Year Ledger Policy',
      body: '5.1 In compliance with financial audit, taxation, and statutory accounting standards, user-linked financial records, token-ledger transactions, refund logs, voucher issuance records, and order histories are retained for a minimum period of seven (7) years.\n\n5.2 Ephemeral data such as temporary OTP authorization tokens and short-term session logs are regularly purged following verification.'
    },
    {
      title: 'Data Security & Storage Controls',
      body: 'We implement robust industry-standard physical, electronic, and procedural safeguards to secure your personal data:\n\n• Encrypted Data Transmission: All data transferred between the App and our backend servers is encrypted using modern TLS/HTTPS protocols.\n\n• Role-Based Access Control (RBAC): Internal access to user data is strictly limited to authorized operations and support personnel.\n\n• Continuous Monitoring: Automated logging and anomaly detection systems protect against unauthorized login attempts or abnormal transaction spikes.'
    },
    {
      title: 'Account Closure & Data Deletion Workflow',
      body: '7.1 You have the right to request the closure of your account at any time through the App settings or by contacting C2 Support.\n\n7.2 Upon verified account closure, your active access credentials will be revoked immediately and your profile will be removed from standard marketing communications.\n\n7.3 Required financial and ledger records will be retained in a secure, restricted archive for the duration of the statutory 7-year audit retention window.'
    },
    {
      title: 'Your Rights Under Malaysian PDPA',
      body: 'Under the Personal Data Protection Act 2010, you have the following rights regarding your personal data:\n\n• Right to Access: Request a copy of your personal data held in our active systems.\n\n• Right to Rectification: Request correction or updating of inaccurate or outdated personal details.\n\n• Right to Withdraw Consent: Opt-out of non-essential promotional messages while continuing to receive transactional order notifications.'
    },
    {
      title: 'Updates to Privacy Policy',
      body: 'We may update this Privacy Policy from time to time to reflect improvements in our technology, services, or legal obligations. When updates occur, the "Last Updated" timestamp will be revised. We encourage you to review this policy periodically.'
    },
    {
      title: 'Contact Us & Data Inquiries',
      body: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data is handled, please contact our Data Protection and Support team:\n\n• Email: support@c2coffeeandcandle.com\n• In-App Support: Available under Profile > Settings > Contact Support. Submitted requests receive a ticket reference and are forwarded to C2 Support.\n• Operating Location: C2 Coffee + Candle (Broga, Kajang, Semenyih, Selangor, Malaysia)'
    }
  ]

  const additionalIcons = [
    // 4 Disclosure
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    // 5 Data Retention
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    // 6 Security
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    // 7 Account Closure
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    // 8 Rights
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    // 9 Updates
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    // 10 Contact
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ]

  const renderBody = (body) => {
    return body.split('\n\n').map((paragraph, idx) => {
      if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('â€¢') || paragraph.trim().startsWith('●')) {
        const text = paragraph.replace(/^[•â€¢●]\s*/, '');
        return (
          <div key={idx} className="flex items-start gap-3 mt-4">
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

  const personalDataItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Identity & Profile Data',
      desc: 'Full name, username, preferred name, and date of birth (optional, used for annual birthday reward vouchers).'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Contact & Authentication Data',
      desc: 'Email address, Malaysian mobile telephone number, and email One-Time Password (OTP) verification records. A new email address is applied only after its verification code is confirmed.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Financial & Transaction Ledger',
      desc: 'Transaction timestamps, payment intent references, store pickup orders, C2 Token top-up ledger entries, token debit history, applied voucher redemptions, and referral associations.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Payment Card Notice',
      desc: 'We do NOT collect, process, or store credit/debit card numbers (PAN), CVV codes, or banking credentials in the App.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Device & App Telemetry',
      desc: 'Device identifier, operating system version, push notification tokens, IP address, and app usage logs.'
    }
  ];

  return (
    <div className="c2-page !bg-white">
      <Navbar />

      <GetInTouchHero
        backgroundImage={c226}
        className="!bg-center"
      />

      <main className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[70vh] flex flex-col gap-16 md:gap-24">

        {/* Header & Callout */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#2f554b] text-center">
            Privacy <span className="italic text-[#e1b35b]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#3d5952] font-light mb-12">
            Last Updated: <span className="font-semibold text-[#2f554b]">September 4, 2026</span>
          </p>

          <div className="bg-[#e6ebe9] py-8 px-8 md:px-16 rounded-[2rem] text-center shadow-sm max-w-4xl">
            <p className="text-[#2f554b] text-lg md:text-xl leading-relaxed">
              Your privacy matters to us. We are committed to protecting your personal information and providing a safe, meaningful experience with C2.
            </p>
          </div>
        </div>

        {/* Section 1: Intro */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f554b] flex items-baseline gap-4 mb-6">
              <span className="text-[#e1b35b] text-2xl md:text-3xl">1</span> {sections[0].title}
            </h2>
            <p className="text-[#3d5952] text-lg leading-relaxed">
              {sections[0].body}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square rounded-[2rem] overflow-hidden shadow-md">
            <img src={c2161} alt="Coffee Cup" className="w-full h-full object-cover object-center" />
          </div>
        </section>

        {/* Section 2: Personal Data */}
        <section className="bg-[#e6ebe9] p-8 md:p-12 lg:p-16 rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f554b] flex items-baseline gap-4 mb-8">
            <span className="text-[#e1b35b] text-2xl md:text-3xl">2</span> Personal Data We Collect
          </h2>
          <p className="text-[#3d5952] text-lg leading-relaxed mb-10 max-w-3xl">
            We collect personal data necessary to provide seamless coffee ordering, closed-loop token balances, and member rewards:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {personalDataItems.map((item, idx) => (
              <div key={idx} className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full border border-[#2f554b]/15 bg-[#f5f7f6] flex items-center justify-center text-[#2f554b] flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#2f554b] text-lg mb-2">{item.title}</h4>
                  <p className="text-[#3d5952] leading-relaxed text-[0.95rem]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Purposes */}
        <section className="flex flex-col md:flex-row gap-12 items-stretch">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f554b] flex items-baseline gap-4 mb-6">
              <span className="text-[#e1b35b] text-2xl md:text-3xl">3</span> {sections[1].title}
            </h2>
            <div className="text-[#3d5952] text-lg leading-relaxed space-y-4">
              <p>Your personal data is collected and processed for the following operational purposes:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Preparing and fulfilling your store self-pickup orders according to beverage customizations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Managing your closed-loop C2 Token prepaid balance and calculating tiered member pricing (Sipper, Brewer, Roaster, Legendary).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Administering loyalty cups progression, welcome rewards, and promotional campaign vouchers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Authenticating your login sessions via email OTP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Sending real-time order readiness alerts and critical operational notifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e1b35b] mt-2 text-xs">●</span>
                  <span>Detecting, preventing, and investigating fraud, unauthorized access, or referral abuse.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#2f554b] text-white p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]">
            <div>
              <p className="text-[#a0b5b0] uppercase tracking-widest text-sm font-semibold mb-6">Our Commitment</p>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Brewed with<br />Care, Protected<br />by Purpose.
              </h3>
              <p className="text-[#d8e2df] text-lg leading-relaxed font-light">
                We handle your data responsibly so you can enjoy a safer and more personalised experience with C2.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
              <img src={c2Logo} alt="C2 Logo" className="h-10 w-auto opacity-90" />
              <span className="text-[#a0b5b0] uppercase tracking-[0.2em] text-xs font-semibold">C2 Coffee + Candle</span>
            </div>
          </div>
        </section>

        {/* Sections 4-10 Grid Layout */}
        <div className="pt-16 mt-8">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <div className="h-[1px] w-12 md:w-24 bg-[#e1b35b]/40"></div>
            <h2 className="text-3xl font-bold text-[#2f554b] text-center">Additional Policies</h2>
            <div className="h-[1px] w-12 md:w-24 bg-[#e1b35b]/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sections.slice(2).map((section, idx) => (
              <div key={idx + 4} className="bg-[#f5f7f6] p-8 md:p-10 rounded-[2rem] flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full border border-[#2f554b]/15 bg-[#e6ebe9] flex items-center justify-center text-[#2f554b] flex-shrink-0 mt-1">
                    {additionalIcons[idx] || additionalIcons[0]}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2f554b] leading-tight pt-1">
                    <span className="text-[#e1b35b] mr-3">{idx + 4}</span>
                    {section.title}
                  </h3>
                </div>
                <div className="text-[#3d5952] leading-relaxed text-[0.95rem]">
                  {renderBody(section.body)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
