import { Shield, QrCode, FileText } from 'lucide-react';

export function ContinuityBanner() {
  return (
    <div className="mt-12 p-6 rounded-2xl border border-teal-200 bg-teal-50/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-700 shadow-2xs">
      <div className="flex items-start gap-3.5">
        <Shield className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-slate-900 text-base sm:text-lg">
            72-Hour Clinical Continuity Guarantee
          </div>
          <p className="text-slate-600 max-w-2xl leading-relaxed text-sm">
            In full compliance with National Medical Commission &amp; NABL patient safety guidelines: If your subscription renewal is delayed, your existing patient worklists, historical reports, and printing remain 100% accessible. Patient care is never interrupted.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-slate-800 font-mono text-xs shrink-0">
        <span className="flex items-center gap-1 font-bold">
          <QrCode className="w-4 h-4 text-teal-700" /> UPI (PhonePe, GPay, Paytm)
        </span>
        <span>• NetBanking</span>
        <span className="flex items-center gap-1 font-bold">
          <FileText className="w-4 h-4 text-teal-700" /> B2B GST Tax Invoices
        </span>
      </div>
    </div>
  );
}
