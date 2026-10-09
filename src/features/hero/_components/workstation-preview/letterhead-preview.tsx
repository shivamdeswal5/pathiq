'use client';

import * as React from 'react';
import { Sliders, CheckCircle2, Ruler } from 'lucide-react';

export function LetterheadPreview() {
  const [marginMm, setMarginMm] = React.useState(42);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Left: Operational Context */}
      <div className="lg:col-span-5 space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-mono font-bold uppercase tracking-wider">
          <Ruler className="w-3 h-3 text-teal-600" />
          <span>Local Press stationery</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Pre-Printed Letterhead Alignment Engine
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Standalone labs spend ₹15,000–₹30,000 printing stationery at local offset presses. Generic hospital software prints duplicate headers or overlaps artwork. Pathiq lets you dial in the top margin with 0.1mm precision.
        </p>

        {/* Interactive Slider Controller */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-teal-600" />
              <span>Calibrate Top Header Margin:</span>
            </span>
            <span className="font-mono font-bold text-teal-700 text-sm">{marginMm} mm</span>
          </div>
          <input
            type="range"
            min="30"
            max="65"
            step="1"
            value={marginMm}
            onChange={(e) => setMarginMm(Number(e.target.value))}
            className="w-full accent-teal-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-600">
            <span>30mm (Minimal)</span>
            <span>45mm (Standard Offset)</span>
            <span>65mm (Wide Header)</span>
          </div>
        </div>

        <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Saves ₹3–₹5 per report vs expensive color inkjet cartridges</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>1-click toggle between pre-printed paper and digital PDF mode</span>
          </li>
        </ul>
      </div>

      {/* Right: Simulated A4 Sheet with Live Reserved Space */}
      <div className="lg:col-span-7 flex justify-center bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md border border-slate-300 p-4 space-y-3 font-sans text-xs">
          {/* Reserved Offset Press Header Box */}
          <div
            style={{ height: `${marginMm * 1.6}px` }}
            className="border-2 border-dashed border-amber-300 rounded-md bg-amber-50/70 flex flex-col items-center justify-center text-center p-2 transition-all relative"
          >
            <span className="text-[10px] font-mono font-bold text-amber-900">
              [Reserved for Local Press Pre-Printed Letterhead Artwork]
            </span>
            <span className="text-[9px] font-mono text-amber-700 mt-0.5">
              Top Clearance: {marginMm}.0 mm (0.0mm Overlap)
            </span>
            <div className="absolute top-1 right-2 text-[8px] font-mono text-amber-800">
              A4 PHYSICAL OFFSET
            </div>
          </div>

          {/* Clinical Report Body */}
          <div className="space-y-2 pt-1 border-t border-slate-200">
            <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-100 pb-1">
              <div>
                <span className="text-slate-600">Patient: </span>
                <strong className="text-slate-900">Ramesh Kumar (48Y/M)</strong>
              </div>
              <div>
                <span className="text-slate-600">Ref By: </span>
                <strong className="text-teal-700">Dr. A. Sharma</strong>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between font-mono py-1 border-b border-slate-100">
                <span className="text-slate-800">Hemoglobin (Hb)</span>
                <span className="font-bold text-rose-600">10.2 g/dL (LOW)</span>
                <span className="text-slate-600 text-[10px]">13.0 - 17.0</span>
              </div>
              <div className="flex justify-between font-mono py-1 border-b border-slate-100">
                <span className="text-slate-800">Total Leucocyte Count (TLC)</span>
                <span className="font-bold text-emerald-700">7,400 /uL</span>
                <span className="text-slate-600 text-[10px]">4,000 - 11,000</span>
              </div>
              <div className="flex justify-between font-mono py-1 border-b border-slate-100">
                <span className="text-slate-800">Fasting Blood Sugar (FBS)</span>
                <span className="font-bold text-rose-600">148 mg/dL (HIGH)</span>
                <span className="text-slate-600 text-[10px]">70 - 100</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-slate-100">
              <span>Sign-off: Pathologist / Biochemist</span>
              <span className="text-teal-700 font-semibold">NABL ISO 15189 Calibrated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
