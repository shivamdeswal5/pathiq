import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Pathiq',
  description: 'Terms of service and subscription agreement for Pathiq diagnostic laboratory operating system.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 py-16 bg-slate-50/50">
        <Container size="narrow">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-xs text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Terms &amp; Conditions</h1>
              <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026 • Governing Law: Republic of India</p>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing, registering for, or using the Pathiq Diagnostic Operating System (&quot;Pathiq&quot;, &quot;Service&quot;) provided by Pathiq Health Technologies Pvt. Ltd., you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Description of Service</h2>
              <p>
                Pathiq provides cloud-based diagnostic laboratory operations software, including patient accession intake, 50×25mm thermal barcode generation, pre-printed letterhead formatting, test result entry, digital report verification, and WhatsApp delivery integration.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Subscription, Invoicing &amp; Taxes</h2>
              <p>
                Subscriptions are billed on a recurring monthly or annual basis in Indian Rupees (INR). All payments are processed via RBI-authorized payment aggregators (e.g., Razorpay) or direct NEFT/RTGS/IMPS offline bank transfers. Official Goods and Services Tax (GST) Tax Invoices are issued for all B2B transactions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Clinical Responsibility &amp; Disclaimers</h2>
              <p>
                Pathiq is an administrative and laboratory information management tool. It does not provide medical diagnosis, pathology consultations, or clinical opinions. The subscriber (laboratory owner, biochemist, or pathologist) retains 100% legal and clinical responsibility for the accuracy, validation, and sign-off of all test findings and patient reports.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Patient Safety Invariant (72-Hour Grace Period)</h2>
              <p>
                In accordance with National Medical Commission guidelines, in the event of an expired subscription or failed payment renewal, Pathiq grants a minimum 72-hour grace period during which viewing, retrieving, and printing existing patient reports remain fully functional.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
