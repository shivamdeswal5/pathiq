'use client';

import * as React from 'react';
import { Home, MapPin, Clock, CheckCircle2, User, Phone } from 'lucide-react';

export function CollectionsPreview() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <Home className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Home Phlebotomy Queue &amp; Specimen Check-In</div>
            <div className="text-[10px] text-slate-500 font-mono">
              Manage home blood collection runs, phlebotomist dispatch, and cold-chain lab intake.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-300 font-mono text-[10px] font-bold">
          <span>Active Bookings: 4 Scheduled Today</span>
        </div>
      </div>

      {/* Main 2-Column Split: Dispatch Queue & Specimen Check-In Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Active Home Visit Record */}
        <div className="md:col-span-7 bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5 font-mono text-[11px]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 font-sans text-xs">Booking #HC-2026-042</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold uppercase">
              In Transit to Lab
            </span>
          </div>

          <div className="space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <strong className="text-slate-900">Mrs. Meena Sharma (62Y / Female)</strong>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <Phone className="w-3 h-3" /> +91 98120-XXXXX
              </span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
              <span className="leading-tight">House #142, Sector 14, Near Community Center</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Time Slot: 07:30 AM – 08:30 AM (Fasting)</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-[10px]">
            <div>
              <span className="text-slate-500">Assigned Phlebotomist: </span>
              <strong className="text-slate-900 font-semibold">Ravi Kumar (Phleb #02)</strong>
            </div>
            <div className="text-teal-800 font-bold">2 Vacutainers (Grey, Lavender)</div>
          </div>
        </div>

        {/* Right: Specimen Check-in Verification Box */}
        <div className="md:col-span-5 bg-teal-50/50 rounded-xl p-3.5 border border-teal-200 space-y-2.5">
          <div className="flex items-center gap-1.5 text-teal-900 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4 text-teal-700" />
            <span>Lab Bench Specimen Intake</span>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
            When phlebotomist arrives back at lab, scan or check-in vacutainers. Validates tube temperature and automatically converts booking into accession #ACC-2026-0845.
          </p>

          <div className="space-y-1.5 pt-1 text-[10px] font-mono">
            <div className="flex items-center justify-between p-1.5 rounded bg-white border border-teal-100">
              <span className="text-slate-600">Fluoride Grey (Glucose)</span>
              <span className="text-emerald-700 font-bold">Verified ✓</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white border border-teal-100">
              <span className="text-slate-600">EDTA Lavender (HbA1c)</span>
              <span className="text-emerald-700 font-bold">Verified ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
