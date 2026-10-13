'use client';

import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function ProblemSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
            <span>The Diagnostic Industry Reality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why 85% of India&apos;s Diagnostic Labs <br className="hidden sm:inline" />
            <span className="text-rose-700">Are Still Stuck on Paper Registers.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Independent diagnostic labs (1–3 staff, 10–50 samples/day) want to digitize, but every existing product is priced for large 100+ sample/day hospital chains. We built Pathiq to end this mismatch.
          </p>
        </div>

        {/* 3-Column Diagnostic Reality Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Paper & Excel Chaos */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase font-bold text-slate-500">
                Option 01
              </span>
              <h3 className="text-xl font-bold text-slate-900">Paper Registers &amp; Excel</h3>
              <p className="text-sm text-slate-600">
                What 85% of standalone labs still do today because of software costs.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700 pt-3 border-t border-slate-200">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>45+ minutes wasted daily manually writing and formatting reports</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Critical panic values missed during distracted morning intake rushes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Outsourced tests given as messy, unbranded secondary sheets</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Doctor commissions tracked in pocket diaries with monthly mistrust</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Legacy Hospital LIS */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase font-bold text-slate-500">
                Option 02
              </span>
              <h3 className="text-xl font-bold text-slate-900">Legacy Hospital LIMS</h3>
              <p className="text-sm text-slate-600">
                CrelioHealth, MocDoc, LabWare — built for 100+ sample hospital chains.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700 pt-3 border-t border-slate-200">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Year-one costs of ₹1,00,000 – ₹3,00,000+ with hidden setup fees</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Complex training required; impossible for a solo 2-person lab team</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Quote-only opaque sales process; locked into predatory annual contracts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Ignores small-lab realities like reference lab send-outs and doctor ledgers</span>
              </li>
            </ul>
          </div>

          {/* Card 3: The Pathiq Operating System */}
          <div className="rounded-2xl p-6 sm:p-8 bg-teal-50/70 border-2 border-teal-600 space-y-5 shadow-lg relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-teal-700 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
              The Pathiq Solution
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase font-bold text-teal-800">
                Engineered for 10–50 Samples/Day
              </span>
              <h3 className="text-xl font-bold text-slate-900">Pathiq LabOS</h3>
              <p className="text-sm text-slate-600">
                Complete digital operations with zero complexity and published flat pricing.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-800 pt-3 border-t border-teal-200 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5 font-bold" />
                <span>Onboarding in under 1 day — self-serve, intuitive, zero vendor lockup</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5 font-bold" />
                <span>Auto-merges outsourced reference lab tests into 1 consolidated report</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5 font-bold" />
                <span>Transparent doctor referral ledger eliminating monthly diary disputes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5 font-bold" />
                <span>Flat pricing from ₹499/mo with 14-day free trial. No card required.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
