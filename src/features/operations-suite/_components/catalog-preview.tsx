'use client';

import { Sliders, Plus, CheckCircle2, IndianRupee } from 'lucide-react';

export function CatalogPreview() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Test Catalog &amp; Custom Panel Builder</div>
            <div className="text-[10px] text-slate-500 font-mono">
              Configure parameters, LOINC codes, reference intervals, and tiered B2C/B2B pricing.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-600 text-white font-semibold text-[11px] shadow-2xs">
          <Plus className="w-3.5 h-3.5" />
          <span>New Custom Panel</span>
        </div>
      </div>

      {/* Active Panel Config Card */}
      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-3 font-mono">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-xs font-sans">
              Comprehensive Metabolic &amp; Lipid Profile
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold uppercase">
              18 Parameters
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <div className="flex items-center gap-1 text-slate-600">
              <span>Counter MRP:</span>
              <strong className="text-slate-900 font-bold flex items-center">
                <IndianRupee className="w-3 h-3" />1,250
              </strong>
            </div>
            <div className="flex items-center gap-1 text-teal-700">
              <span>Doctor Rate:</span>
              <strong className="font-bold flex items-center">
                <IndianRupee className="w-3 h-3" />950
              </strong>
            </div>
          </div>
        </div>

        {/* Parameter Configuration Table */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden text-[10px]">
          <div className="grid grid-cols-12 bg-slate-100 p-2 font-bold text-slate-700 uppercase tracking-wider">
            <span className="col-span-4 text-left">Test Parameter</span>
            <span className="col-span-2 text-center">Unit</span>
            <span className="col-span-3 text-center">Male Ref Range</span>
            <span className="col-span-3 text-center">Female Ref Range</span>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-12 p-2 items-center text-slate-800">
              <span className="col-span-4 font-semibold">Total Cholesterol</span>
              <span className="col-span-2 text-center text-slate-500">mg/dL</span>
              <span className="col-span-3 text-center font-bold text-teal-800">125 – 200</span>
              <span className="col-span-3 text-center font-bold text-teal-800">125 – 200</span>
            </div>
            <div className="grid grid-cols-12 p-2 items-center text-slate-800 bg-slate-50/50">
              <span className="col-span-4 font-semibold">Triglycerides</span>
              <span className="col-span-2 text-center text-slate-500">mg/dL</span>
              <span className="col-span-3 text-center font-bold text-teal-800">&lt; 150</span>
              <span className="col-span-3 text-center font-bold text-teal-800">&lt; 150</span>
            </div>
            <div className="grid grid-cols-12 p-2 items-center text-slate-800">
              <span className="col-span-4 font-semibold">Serum Creatinine</span>
              <span className="col-span-2 text-center text-slate-500">mg/dL</span>
              <span className="col-span-3 text-center font-bold text-teal-800">0.7 – 1.3</span>
              <span className="col-span-3 text-center font-bold text-teal-800">0.5 – 1.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bullet Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-[11px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Age &amp; Gender Stratification</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Custom LOINC &amp; Formulas</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>B2C Retail &amp; B2B Doctor Rates</span>
        </div>
      </div>
    </div>
  );
}
