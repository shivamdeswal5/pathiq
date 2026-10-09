'use client';

import * as React from 'react';
import { Settings, FileText, CheckCircle2, ShieldCheck, PenTool } from 'lucide-react';

export function SettingsPreview() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <Settings className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Laboratory Workspace Settings &amp; Digital Signatures</div>
            <div className="text-[10px] text-slate-500 font-mono">
              NABL/ISO 15189 compliance, doctor digital signatures, letterhead margin alignment, and staff access.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-300 font-mono text-[10px] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
          <span>NMC &amp; Clinical Establishments Act Aligned</span>
        </div>
      </div>

      {/* 3-Column Settings Module Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Card 1: Letterhead Mode Switcher */}
        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
          <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs">
            <FileText className="w-4 h-4 text-teal-700" />
            <span>Letterhead Layout Mode</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Toggle between digital PDF letterhead with full color logos, or pre-printed offset stationery mode with millimeter margin calibration.
          </p>
          <div className="p-2 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span>Pre-Printed Stationery Mode</span>
            <span className="text-teal-700 font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Card 2: Doctor Signatures */}
        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
          <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs">
            <PenTool className="w-4 h-4 text-teal-700" />
            <span>Digital Signatures &amp; Stamps</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Store authorized pathologist signatures with medical council registration numbers. Never allows unauthorized technician sign-offs.
          </p>
          <div className="p-2 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span>Dr. S. K. Deswal, DCP</span>
            <span className="text-emerald-700 font-bold">Verified ✓</span>
          </div>
        </div>

        {/* Card 3: Multi-Shift Cash Drawers */}
        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
          <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4 text-teal-700" />
            <span>Counter Cash Drawers</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Separate cash vs UPI drawers reconcile daily counter collections per staff shift with zero pilferage or front-desk discrepancies.
          </p>
          <div className="p-2 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span>Shift Handover Reconciled</span>
            <span className="text-emerald-700 font-bold">Zero Leakage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
