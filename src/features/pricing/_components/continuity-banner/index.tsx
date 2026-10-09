import * as React from 'react';
import { Shield, QrCode, FileText } from 'lucide-react';

export function ContinuityBanner() {
  return (
    <div className="mt-12 p-6 rounded-2xl border border-teal-200 bg-teal-50/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700 shadow-2xs">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="font-bold text-slate-900 text-sm">
            72-Hour Clinical Continuity Guarantee
          </div>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            In full compliance with National Medical Commission &amp; NABL patient safety guidelines: If your subscription renewal is delayed, your existing patient worklists, historical reports, and printing remain 100% accessible. Patient care is never interrupted.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-slate-800 font-mono text-[11px] shrink-0">
        <span className="flex items-center gap-1 font-bold">
          <QrCode className="w-3.5 h-3.5 text-teal-700" /> UPI (PhonePe, GPay, Paytm)
        </span>
        <span>• NetBanking</span>
        <span className="flex items-center gap-1">
          <FileText className="w-3.5 h-3.5 text-teal-700" /> B2B GST Tax Invoices
        </span>
      </div>
    </div>
  );
}
