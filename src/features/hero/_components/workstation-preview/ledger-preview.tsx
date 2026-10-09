'use client';

import * as React from 'react';
import { Users2, Wallet, CheckCircle2 } from 'lucide-react';

export function LedgerPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Left: Operational Context */}
      <div className="lg:col-span-5 space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-mono font-bold uppercase tracking-wider">
          <Users2 className="w-3 h-3 text-cyan-600" />
          <span>Doctor Relationships</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Referral Doctor Ledger &amp; TDS 194H
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Keep referring clinics and doctors happy without pocket diaries or awkward end-of-month arguments. Pathiq calculates doctor cuts test-by-test with automatic 5% TDS compliance and multi-counter cash balancing.
        </p>

        <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span>Configurable doctor-wise cut (flat ₹ or % share per test)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span>1-click monthly settlement statement with patient-wise audit</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span>Separate cash vs UPI drawers eliminate front-desk leakages</span>
          </li>
        </ul>
      </div>

      {/* Right: Realistic Doctor Statement & Counter Ledger */}
      <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch justify-center gap-4 bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
        {/* Doctor Cut Summary */}
        <div className="w-full sm:w-60 bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs text-xs space-y-2.5">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
            <div>
              <div className="font-bold text-slate-900">Dr. A. Sharma</div>
              <div className="text-[10px] text-slate-500 font-mono">Sharma Clinic • MBBS, MD</div>
            </div>
            <span className="text-[10px] bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded font-mono font-bold">
              15% Cut
            </span>
          </div>

          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-slate-600">
              <span>Tests Referred:</span>
              <span className="font-semibold text-slate-900">14 Tests</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Gross Billed:</span>
              <span className="font-semibold text-slate-900">₹12,400</span>
            </div>
            <div className="flex justify-between text-teal-800">
              <span>Commission (15%):</span>
              <span className="font-bold">₹1,860</span>
            </div>
            <div className="flex justify-between text-slate-600 border-t border-slate-100 pt-1">
              <span>TDS (Sec 194H @ 5%):</span>
              <span className="text-rose-600 font-medium">-₹93</span>
            </div>
            <div className="flex justify-between text-slate-900 font-bold border-t border-slate-200 pt-1 text-xs">
              <span>Net Settlement:</span>
              <span className="text-emerald-700">₹1,767</span>
            </div>
          </div>
        </div>

        {/* Counter Cash Drawer Status */}
        <div className="w-full sm:w-56 bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs text-xs space-y-2.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs pb-1 border-b border-slate-100">
              <Wallet className="w-3.5 h-3.5 text-teal-600" />
              <span>Counter 1 Cash Drawer</span>
            </div>
            <div className="space-y-1.5 pt-2 font-mono text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Cash in Till:</span>
                <span className="font-bold text-slate-900">₹8,250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">UPI / QR Code:</span>
                <span className="font-bold text-slate-900">₹14,150</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1">
                <span className="text-slate-500">Today&apos;s Total:</span>
                <span className="font-bold text-teal-700">₹22,400</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Reconciled
            </span>
            <span className="text-slate-400">Zero Leakage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
