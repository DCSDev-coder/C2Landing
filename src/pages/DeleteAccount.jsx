import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DeleteAccount() {
  return (
    <div className="c2-page !bg-white">
      <Navbar />
      <main className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto min-h-[70vh]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-[#e1b35b] mb-5">C2 Coffee account support</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2f554b] mb-6">
            Request account deletion
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#3d5952] mb-12">
            You can request deletion of your C2 Coffee account and associated personal data at any time.
          </p>

          <section className="bg-[#e6ebe9] rounded-[2rem] p-8 md:p-12 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f554b] mb-6">How to request deletion</h2>
            <ol className="list-decimal pl-6 space-y-4 text-[#3d5952] text-lg leading-relaxed">
              <li>Open C2 Coffee and go to <strong>Profile &gt; Settings &gt; Delete Account</strong>.</li>
              <li>Follow the verification steps and confirm your request.</li>
              <li>If you cannot access the app, email <a className="underline font-semibold" href="mailto:support@c2coffeeandcandle.com">support@c2coffeeandcandle.com</a> with the phone number or email address registered to your account.</li>
            </ol>
          </section>

          <section className="grid md:grid-cols-2 gap-8 text-[#3d5952]">
            <div>
              <h2 className="text-2xl font-bold text-[#2f554b] mb-4">Data deleted</h2>
              <p className="leading-relaxed">Your active profile, contact details, authentication data, sessions, notification preferences, and marketing associations are removed or deactivated as part of account closure.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#2f554b] mb-4">Data retained</h2>
              <p className="leading-relaxed">Order, token-ledger, payment-reference, refund, voucher, and audit records may be retained in a restricted archive for up to seven years where required for accounting, fraud prevention, legal, or regulatory purposes.</p>
            </div>
          </section>

          <p className="mt-12 text-sm text-[#3d5952]">
            We will verify the request before processing it. Account access is revoked after a confirmed deletion request. For questions, contact C2 Support at the email above.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
