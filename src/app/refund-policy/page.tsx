import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — Pathiq',
  description: '14-day free trial, cancellation terms, and refund policy for Pathiq diagnostic lab operating system.',
  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <Container size="narrow">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-xs text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Cancellation &amp; Refund Policy</h1>
              <p className="text-xs text-slate-500 mt-1">Payment Aggregator Compliance • Republic of India</p>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. 14-Day Free Trial (No Card Required)</h2>
              <p>
                Every new laboratory receives a 14-day free trial with full access to Starter and Growth capabilities. No credit card or upfront payment is required. You can test 50×25mm thermal barcode printing and letterhead margin formatting with zero financial commitment.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Subscription Cancellation</h2>
              <p>
                You may cancel your Pathiq subscription at any time directly through your lab dashboard or by emailing <a href="mailto:billing@pathiq.in" className="text-teal-700 underline font-semibold">billing@pathiq.in</a>. Upon cancellation, your account will remain active until the end of your current paid billing period.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. 7-Day Money-Back Guarantee</h2>
              <p>
                If you purchase a paid subscription and find that Pathiq does not work with your thermal barcode printer or offset letterhead stationery within the first 7 days of payment, we will issue a 100% full refund to your original payment method (UPI / NetBanking / Card) with zero deductions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Refund Processing Time</h2>
              <p>
                Approved refunds are processed via our banking partner (Razorpay) within 5 to 7 business days back to the original source bank account or UPI VPA.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
