'use client';

import * as React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { TrustStrip } from './_components/trust-strip';
import { WorkstationPreview } from './_components/workstation-preview';
import { config } from '@/lib/config';

export function Hero() {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-teal-50/50 via-white to-slate-50/50 border-b border-slate-200">
      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Market Reality Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-100/80 border border-teal-300 text-teal-800 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Built Specifically for India&apos;s Standalone Diagnostic Labs (10–50 samples/day)</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            The Operating System for <br className="hidden sm:inline" />
            <span className="text-teal-700">India&apos;s Standalone Pathology Labs.</span>
          </h1>

          {/* Honest, Problem-Centric Subtitle Focused on the 3 Core Systems */}
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The complete operating system engineered specifically for India&apos;s independent diagnostic labs (10–50 samples/day).
            Unify <strong className="text-slate-900 font-semibold">clinical report generation</strong>, <strong className="text-slate-900 font-semibold">referral doctor tracking</strong>, and <strong className="text-slate-900 font-semibold">daily lab operations management</strong> in one intuitive platform — replacing paper registers, Word templates, and pocket diaries in under 1 day.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={`${config.appUrl}/signup`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-md hover:shadow-teal-600/30 transition-all hover:scale-102 active:scale-98 cursor-pointer animate-shimmer-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20run%20a%20pathology%20lab%20and%20want%20to%20see%20a%20live%20walkthrough%20of%20Pathiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-all cursor-pointer"
            >
              <WhatsAppIcon size={18} className="text-[#25D366]" />
              <span>Chat on WhatsApp (+91)</span>
            </a>
          </div>

          {/* Trust Value Strip */}
          <TrustStrip />
        </div>

        {/* Photorealistic Interactive Clinical Workstation Preview */}
        <div id="workstation">
          <WorkstationPreview />
        </div>
      </Container>
    </section>
  );
}
