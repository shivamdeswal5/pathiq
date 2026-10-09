import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/features/hero';
import { ProblemSection } from '@/features/problem';
import { Pillars } from '@/features/pillars';
import { OperationsSuite } from '@/features/operations-suite';
import { Comparison } from '@/features/comparison';
import { PricingSection } from '@/features/pricing';
import { FaqSection } from '@/features/faq';
import { CtaSection } from '@/features/cta';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <Pillars />
        <OperationsSuite />
        <Comparison />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
