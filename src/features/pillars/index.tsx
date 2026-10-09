'use client';

import * as React from 'react';
import {
  FileText,
  Layers,
  Users2,
  TrendingUp,
  Send,
  Wallet,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/container';

const modules = [
  {
    badge: 'Core Clinical Workflow',
    badgeColor: 'teal',
    title: 'Fast Test Result Entry & Automated Panic Flagging',
    problem:
      'Typing values into unstructured Word templates or writing by hand leads to calculation errors and missed critical values.',
    solution:
      'High-speed numerical data entry matching your paper lab sheets. Automatically loads age & gender biological reference ranges and flags out-of-range panic values in RED so no critical patient result is missed.',
    highlights: [
      'Config-driven test panels: CBC, LFT, KFT, Lipid, Thyroid & customized profiles',
      'Age & gender-stratified biological reference ranges auto-applied',
      'Visual panic flagging: Instant red alerts for life-threatening abnormal levels',
      'Reprint past patient reports in seconds without re-entering parameters',
    ],
    icon: FileText,
  },
  {
    badge: 'Industry First Innovation',
    badgeColor: 'purple',
    title: 'Outsourced & Reference Lab Tracking with Result Merger',
    problem:
      'Small labs outsource special tests (Biopsies, Vit D, Hormones) to reference labs (Lal PathLabs, SRL) and are forced to give patients two separate, messy sheets.',
    solution:
      'Track outsourced test batches, dispatch dates, and partner lab status. When results arrive, LabOS merges in-house and reference lab results into ONE single, consolidated, professionally branded patient report.',
    highlights: [
      'Log tests sent to Dr. Lal PathLabs, Metropolis, SRL, or local reference centers',
      'Track pending vs completed send-out status in real time',
      'Merge outsourced parameters automatically into the final patient PDF',
      'Track outsourced costs against patient fees to see exact gross margins',
    ],
    icon: Layers,
  },
  {
    badge: 'Commercial Growth',
    badgeColor: 'cyan',
    title: 'Referring Doctor Revenue & Running Balance Ledger',
    problem:
      'Tracking doctor referral arrangements in pocket diaries causes discrepancies, front-desk mistrust, and awkward monthly disputes.',
    solution:
      'Maintain clean, neutral records of referring doctors and clinic associations. Automatically logs referred tests and generates running revenue ledgers with 1-click settlement statements under lab owner manual control.',
    highlights: [
      'Doctor directory with clinic association and agreed referral arrangement',
      'Automated running ledger tracking tests referred and accrued balances',
      '1-click monthly settlement statement export with patient-wise audit trail',
      'Neutral record-keeping compliant with NMC medical guidelines',
    ],
    icon: Users2,
  },
  {
    badge: 'Operational Visibility',
    badgeColor: 'emerald',
    title: 'Cost-Per-Test Visibility & Reagent Expense Tracking',
    problem:
      'Lab owners have zero visibility into their real margins and don’t know which tests are losing money.',
    solution:
      'Track lab expenses (reagents, vacutainers, consumables) in one place. LabOS shows your actual cost-per-test and profitability so you know which tests to run in-house versus outsource.',
    highlights: [
      'Log reagent purchases, consumable costs, and routine lab operational expenses',
      'Clear gross margin visibility: in-house test profitability vs outsourced margin',
      'Replaces scattered paper notebooks with structured financial clarity',
      'Daily counter collection breakdown: Cash vs UPI vs pending receivables',
    ],
    icon: TrendingUp,
  },
  {
    badge: 'Patient Delight',
    badgeColor: 'teal',
    title: '1-Click WhatsApp PDF Delivery & Verified QR Tokens',
    problem:
      'Downloading PDFs to desktop, manually adding 30+ strangers to phone contacts daily, and searching chat lists wastes hours.',
    solution:
      'Deliver finalized, certified reports in 1 click directly to the patient’s WhatsApp number. Patients receive an authenticated PDF download with a tamper-proof public QR verification token for referring physicians.',
    highlights: [
      'Direct WhatsApp message link with personalized patient greeting',
      'Zero phone contact saving required on technician devices',
      'Tamper-proof public QR verification token prevents forged report disputes',
      'Drastically cuts down on patient phone calls asking &quot;Is my report ready?&quot;',
    ],
    icon: Send,
  },
  {
    badge: 'Daily Operations',
    badgeColor: 'amber',
    title: 'Home Phlebotomy Queue & Shift Cash Reconciliation',
    problem:
      'Managing home blood collections on scrap paper and experiencing cash leakage between morning and evening counter shifts.',
    solution:
      'Simple daily home-collection schedule with patient address and time slot. Multi-counter cash drawers track shift handovers, balancing cash in till versus UPI QR code collections with zero discrepancy.',
    highlights: [
      'Daily home collection booking queue alongside counter walk-in samples',
      'Track sample collection status from phlebotomist dispatch to accession intake',
      'Counter cash drawers balance cash on hand vs UPI collections every shift',
      'Eliminates front-desk cash leakage between morning and evening staff',
    ],
    icon: Wallet,
  },
];

export function Pillars() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-300">
            <span>Six Core Operational Modules</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built Around How Indian Diagnostic Labs <br className="hidden sm:inline" />
            <span className="text-teal-700">Actually Operate Every Single Day.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Existing hospital LIMS products cost ₹1L–3L+ and are built for tertiary hospitals with IT departments. Pathiq is purpose-engineered for the independent lab owner doing 10–50 samples a day.
          </p>
        </div>

        {/* 6 High-Impact Operational Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {modules.map((m, index) => {
            const Icon = m.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-teal-400 hover:shadow-lg hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 group-hover:scale-108 group-hover:bg-teal-100/80 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase font-semibold">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {m.title}
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-600 leading-relaxed">
                      <strong className="text-slate-800 block text-[11px] mb-0.5 font-sans">
                        The Friction:
                      </strong>
                      {m.problem}
                    </div>

                    <div className="bg-teal-50/50 p-2.5 rounded-lg border border-teal-100 text-slate-700 leading-relaxed">
                      <strong className="text-teal-900 block text-[11px] mb-0.5 font-sans">
                        Pathiq Solution:
                      </strong>
                      {m.solution}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                    What You Get:
                  </div>
                  {m.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
