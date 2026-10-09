import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WorkflowSection } from '@/features/workflow';
import { FaqSection } from '@/features/faq';
import { CtaSection } from '@/features/cta';

export const metadata: Metadata = {
  title: '5-Minute Clinical Diagnostic Cycle — Pathiq LabOS',
  description:
    'Experience the zero-defect 5-minute diagnostic workflow: 50×25mm thermal barcode tagging, rapid numerical result entry, letterhead alignment, and 1-click WhatsApp PDF dispatch.',
  alternates: {
    canonical: '/workflow',
  },
};

export default function WorkflowPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <WorkflowSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
