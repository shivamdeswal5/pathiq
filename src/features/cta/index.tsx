'use client';

import * as React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { config } from '@/lib/config';

export function CtaSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <Container size="narrow">
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white shadow-xl text-center space-y-6">
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-teal-200 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Zero Risk • 14-Day Free Trial</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Digitize Your Diagnostic Lab in Under 1 Day?
            </h2>

            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
              Unify clinical report generation, doctor referral ledgers, and daily lab operations in one intuitive platform today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`${config.appUrl}/signup`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold text-teal-900 bg-white hover:bg-teal-50 rounded-lg shadow-sm transition-all hover:scale-102 active:scale-98 animate-shimmer-btn cursor-pointer"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20get%20started%20with%20Pathiq%20for%20my%20pathology%20lab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all cursor-pointer"
            >
              <WhatsAppIcon size={16} className="text-[#25D366]" />
              <span>Chat with Founder on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-teal-200/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
              <span>10-Minute Instant Setup</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
              <span>Works on Any Laptop / PC</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
              <span>Instant GST Invoicing</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
