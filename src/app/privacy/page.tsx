import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Privacy Policy — Pathiq',
  description: 'Digital Personal Data Protection (DPDP) Act privacy policy for Pathiq laboratory operating system.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <Container size="narrow">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-xs text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
              <p className="text-xs text-slate-500 mt-1">Digital Personal Data Protection (DPDP) Act Compliant • Republic of India</p>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Data Controller vs. Data Processor</h2>
              <p>
                When a diagnostic lab uses Pathiq, the laboratory is the primary Data Controller of patient health data. Pathiq operates strictly as a Data Processor, processing patient demographics, test results, and contact information solely on behalf of and according to the instructions of the subscribing lab.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Security &amp; Encryption Standards</h2>
              <p>
                All patient records, laboratory assays, and invoices are encrypted using 256-bit AES encryption at rest and TLS 1.3 encryption in transit. Multi-tenant database rows are isolated strictly by cryptographic tenant identifiers (`lab_id`).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Non-Commercialization of Patient Records</h2>
              <p>
                Pathiq will NEVER sell, monetize, rent, or share patient clinical data, test results, or doctor contact books with pharmaceutical corporations, insurance companies, or third-party advertisers. Your laboratory database remains 100% your proprietary data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Grievance Redressal</h2>
              <p>
                For any data inquiries or right-to-erasure requests under India&apos;s DPDP Act, contact our designated Grievance Officer at <a href="mailto:privacy@pathiq.in" className="text-teal-700 underline font-semibold">privacy@pathiq.in</a>.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
