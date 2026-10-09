import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PricingSection } from '@/features/pricing';
import { FaqSection } from '@/features/faq';
import { CtaSection } from '@/features/cta';

export const metadata: Metadata = {
  title: 'Transparent Pricing — Pathiq Diagnostic Lab Operating System',
  description:
    'Flat, published pricing for India diagnostic labs starting at ₹499/month. 50×25mm thermal barcodes, letterhead alignment, 1-click WhatsApp delivery, and UPI payments.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
