'use client';

import { Container } from '@/components/ui/container';
import { InquiryForm } from './_components/inquiry-form';
import { ContactCards } from './_components/contact-cards';

export function ContactSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/50">
      <Container>
        <div className="text-center space-y-3 mb-12 max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-700 font-bold">
            We&apos;re Here to Help
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Connect Directly with the Pathiq Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Whether you want a 5-minute live screen demo, custom high-volume pricing, or direct admin manual provisioning, we respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
          <div className="lg:col-span-5">
            <ContactCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
