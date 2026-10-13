'use client';

import { Layers, ArrowRight, CheckCircle2, Building } from 'lucide-react';

export function OutsourcedSyncView() {
  return (
    <div className="space-y-4">
      {/* Feature Context Banner */}
      <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-100 text-purple-800">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-purple-950">
              Reference Lab Outsourcing &amp; Result Merger Engine
            </div>
            <div className="text-[11px] text-purple-800">
              Unique to LabOS: Send specialized tests to external reference labs, and automatically merge results into 1 consolidated patient report.
            </div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 font-mono font-bold text-[10px]">
          NO DUPLICATE PAPERS
        </span>
      </div>

      {/* Outsourced Sample Tracking Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Left: Send-out Tracking */}
        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-purple-700" />
              <span>External Reference Lab Batch</span>
            </div>
            <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">
              Batch #OUT-2026-104
            </span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Partner Lab:</span>
              <span className="font-bold text-slate-900">Dr. Lal PathLabs (Regional Hub)</span>
            </div>
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Outsourced Test:</span>
              <span className="font-bold text-slate-900">Vitamin D3 (25-OH) &amp; Free T3/T4</span>
            </div>
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Dispatched At:</span>
              <span className="text-slate-700">08-Oct-2026, 11:30 AM (Cold Chain)</span>
            </div>
            <div className="flex justify-between font-mono">
              <span className="text-slate-500">Outsourced Cost:</span>
              <span className="font-bold text-slate-900">₹450 (Billed to Patient: ₹1,100)</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Result Received &amp; Digitized
            </span>
            <span className="text-[10px] font-mono text-purple-800 font-bold">Gross Margin: ₹650</span>
          </div>
        </div>

        {/* Right: Consolidated Patient Output */}
        <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/40 space-y-3 shadow-2xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-teal-200/60 pb-2">
              <span className="font-bold text-teal-950 text-xs">
                Consolidated Patient Report
              </span>
              <span className="text-[10px] font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold">
                1 SINGLE PDF
              </span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded bg-white border border-teal-200/80 space-y-1">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Section A: In-House Parameters</span>
                  <span className="text-teal-700 text-[10px]">Your Laboratory</span>
                </div>
                <div className="text-[10px] text-slate-600 font-mono">
                  CBC (Complete Blood Count) • Fasting Blood Sugar (FBS)
                </div>
              </div>

              <div className="p-2 rounded bg-white border border-teal-200/80 space-y-1">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Section B: Reference Lab Parameters</span>
                  <span className="text-purple-700 text-[10px]">Merged Automatically</span>
                </div>
                <div className="text-[10px] text-slate-600 font-mono">
                  Vitamin D (25-OH): 18.2 ng/mL (DEFICIENT) • Ref: Lal PathLabs
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-teal-200/60 flex items-center justify-between text-[11px]">
            <span className="text-teal-900 font-medium">Patient receives 1 seamless report</span>
            <span className="font-mono text-teal-700 font-bold flex items-center gap-1">
              Zero re-typing <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
