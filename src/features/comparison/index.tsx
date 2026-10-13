'use client';

import { Check, X, Minus, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';

const comparisonRows = [
  {
    feature: 'Thermal Barcode Stickers (50×25mm)',
    paper: 'Manual tape & marker pen (mix-up risk)',
    hospitalEhr: 'Complex printer drivers required',
    pathiq: 'Native Code-128 2-up thermal support',
  },
  {
    feature: 'Local Offset Letterhead Printing',
    paper: 'N/A (Handwritten/Typewritten)',
    hospitalEhr: 'Fixed templates; text overlaps artwork',
    pathiq: '0.1mm visual ruler margin calibration',
  },
  {
    feature: 'Doctor Prefix Flexibility',
    paper: 'Unregulated',
    hospitalEhr: 'Forces "Dr." prefix (Illegal for DMLT)',
    pathiq: 'NMC/NABL compliant; customizable prefixes',
  },
  {
    feature: 'WhatsApp PDF Report Dispatch',
    paper: 'Manual photo of paper report',
    hospitalEhr: 'Expensive SMS gateways only',
    pathiq: '1-Click verified PDF via WhatsApp',
  },
  {
    feature: 'Referral Doctor Commission Ledger',
    paper: 'Pocket diary (constant discrepancies)',
    hospitalEhr: 'Requires enterprise accounting add-on',
    pathiq: 'Built-in monthly settlement statement',
  },
  {
    feature: 'Setup & Onboarding Time',
    paper: 'N/A',
    hospitalEhr: '2–4 weeks with on-site IT team',
    pathiq: 'Under 10 minutes (Browser-based)',
  },
  {
    feature: 'Monthly Operational Cost',
    paper: 'Hidden costs from errors & lost samples',
    hospitalEhr: '₹5,000 – ₹15,000 / month',
    pathiq: 'Starts at ₹499 / month',
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-white border-b border-slate-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-700 font-bold">
            The Clear Choice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built from Scratch for Independent Labs. <br className="hidden sm:inline" />
            <span className="text-teal-700">Not a Downsized Hospital System.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Compare Pathiq to running your lab on physical paper registers or expensive hospital EHRs.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs bg-white">
          <table className="w-full text-left border-collapse min-w-[650px] text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                <th className="py-4 px-5 w-1/4 text-sm">Capability</th>
                <th className="py-4 px-5 w-1/4 text-sm">Paper Registers</th>
                <th className="py-4 px-5 w-1/4 text-sm">Hospital EHR Tools</th>
                <th className="py-4 px-5 w-1/4 bg-teal-50/80 text-teal-900 border-x border-teal-200 font-extrabold text-sm">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-700" />
                    <span>Pathiq LabOS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-5 font-semibold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-5 text-slate-500">
                    <div className="flex items-start gap-2">
                      <X className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.paper}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-500">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.hospitalEhr}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 font-semibold text-teal-950 bg-teal-50/40 border-x border-teal-100">
                    <div className="flex items-start gap-2">
                      <Check className="w-4.5 h-4.5 text-teal-700 shrink-0 mt-0.5 font-bold" />
                      <span>{row.pathiq}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
