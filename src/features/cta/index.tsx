'use client';

import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { config } from '@/lib/config';

export function CtaSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <Container size="narrow">
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white shadow-xl text-center space-y-6">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 text-teal-200 border border-white/20">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Zero Risk • 14-Day Free Trial</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Digitize Your Diagnostic Lab in Under 1 Day?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-teal-100/90 leading-relaxed max-w-xl mx-auto">
              Unify clinical report generation, doctor referral ledgers, and daily lab operations in one intuitive platform today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <a
              href={`${config.appUrl}/signup`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-teal-900 bg-white hover:bg-teal-50 rounded-xl shadow-md transition-all hover:scale-102 active:scale-98 animate-shimmer-btn cursor-pointer"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>

            <a
              href={config.getWhatsAppUrl('Hi, I want to get started with Pathiq for my pathology lab')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer"
            >
              <WhatsAppIcon size={18} className="text-[#25D366]" />
              <span>Chat with Founder on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-teal-200/90 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-300" />
              <span>10-Minute Instant Setup</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-300" />
              <span>Works on Any Laptop / PC</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-300" />
              <span>Instant GST Invoicing</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
