import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ContactSection } from '@/features/contact';

export const metadata: Metadata = {
  title: 'Contact & Custom Lab Setup — Pathiq LabOS',
  description:
    'Connect directly with the Pathiq team for custom lab provisioning, high-volume pricing, or printer onboarding assistance.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
