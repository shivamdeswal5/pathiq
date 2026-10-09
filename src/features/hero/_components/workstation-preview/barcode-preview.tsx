'use client';

import * as React from 'react';
import { Printer, Tag, CheckCircle2 } from 'lucide-react';

export function BarcodePreview() {
  const [printed, setPrinted] = React.useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Left: Operational Context */}
      <div className="lg:col-span-5 space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-mono font-bold uppercase tracking-wider">
          <Tag className="w-3 h-3 text-teal-600" />
          <span>Specimen Integrity</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Native 50×25mm Thermal Barcode Engine
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Stop writing patient names on adhesive tape with marker pens. As soon as intake is submitted, Pathiq renders crisp Code-128 barcodes calibrated to domestic 50×25mm 2-up thermal rolls.
        </p>
        <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Works with TVS LP 46 Neo, TSC, Zebra, and generic ESC/POS units</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Prints panel codes (CBC, LFT, KFT) and tube color flags directly</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Direct print with sub-second response — no driver lockups</span>
          </li>
        </ul>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setPrinted(true);
              setTimeout(() => setPrinted(false), 2500);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{printed ? 'Sticker Dispatched to Printer!' : 'Simulate Sticker Print'}</span>
          </button>
        </div>
      </div>

      {/* Right: Realistic 50x25mm Label & Intake Pill */}
      <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
        {/* Sample Intake Card */}
        <div className="w-full sm:w-60 bg-white rounded-lg p-3 border border-slate-200 shadow-2xs text-[11px] space-y-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="font-mono font-bold text-slate-900">#ACC-2026-0819</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">
              INTAKE READY
            </span>
          </div>
          <div>
            <div className="text-slate-500 text-[10px]">Patient</div>
            <div className="font-bold text-slate-900">Ramesh Kumar (48Y / M)</div>
          </div>
          <div>
            <div className="text-slate-500 text-[10px]">Test Panels</div>
            <div className="font-medium text-slate-700">CBC • Lipid Profile • HbA1c</div>
          </div>
          <div>
            <div className="text-slate-500 text-[10px]">Referring Doctor</div>
            <div className="text-teal-700 font-medium">Dr. A. Sharma (Sharma Clinic)</div>
          </div>
        </div>

        {/* The Exact 50x25mm Thermal Sticker Simulation */}
        <div className="relative">
          <div
            className={`w-64 bg-white text-slate-900 rounded-md p-2.5 shadow-md border-2 ${
              printed ? 'border-teal-500 ring-4 ring-teal-100' : 'border-slate-300'
            } transition-all font-mono space-y-1`}
          >
            <div className="flex justify-between items-center border-b border-dashed border-slate-300 pb-1">
              <span className="font-extrabold text-[10px] tracking-tight">PATHIQ DIAGNOSTICS</span>
              <span className="text-[9px] bg-purple-100 text-purple-900 px-1 py-0.2 rounded font-black">
                EDTA LAVENDER
              </span>
            </div>

            <div className="text-[11px] font-black truncate">RAMESH KUMAR • 48Y/M</div>
            <div className="text-[9px] text-slate-600 font-semibold truncate">
              CBC • LIPID • HbA1c
            </div>

            {/* Realistic Barcode Strips */}
            <div className="py-1 flex flex-col items-center">
              <div className="h-6 w-full bg-slate-900 flex items-center justify-around px-2 text-white text-[7px] tracking-widest">
                || | ||| | || |||| | ||| | || ||| |
              </div>
              <div className="text-[9px] font-bold tracking-widest text-slate-800 pt-0.5">
                *ACC20260819*
              </div>
            </div>

            <div className="flex justify-between text-[8px] text-slate-500 border-t border-dashed border-slate-200 pt-0.5">
              <span>DT: 08-OCT-26 10:14</span>
              <span>STAFF: DMLT-01</span>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 text-[9px] font-mono text-slate-600 font-semibold">
            50mm × 25mm 2-Up Roll
          </div>
        </div>
      </div>
    </div>
  );
}
