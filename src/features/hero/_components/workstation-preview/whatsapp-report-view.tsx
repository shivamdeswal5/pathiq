'use client';

import * as React from 'react';
import { FileText, QrCode, ShieldCheck, CheckCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

export function WhatsappReportView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      {/* Left: Branded Laboratory Report Preview */}
      <div className="md:col-span-7 bg-white rounded-xl border border-slate-300 p-4 shadow-sm text-xs space-y-3 font-sans">
        {/* Lab Letterhead Header */}
        <div className="border-b-2 border-teal-700 pb-2.5 flex items-center justify-between">
          <div>
            <div className="font-extrabold text-sm text-slate-900 tracking-tight">
              DESWAL CLINICAL DIAGNOSTIC CENTER
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              Shop #4, Near Civil Hospital, Rohtak Road • Reg: HR/LAB/2024/891
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-bold border border-teal-200">
              NABL ISO 15189 Aligned
            </span>
          </div>
        </div>

        {/* Patient Demographics Strip */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono bg-slate-50 p-2 rounded border border-slate-200">
          <div>
            <span className="text-slate-500">Patient: </span>
            <strong className="text-slate-900">Ramesh Kumar (48Y / Male)</strong>
          </div>
          <div>
            <span className="text-slate-500">Accession UID: </span>
            <strong className="text-slate-900">#ACC-2026-0842</strong>
          </div>
          <div>
            <span className="text-slate-500">Referred By: </span>
            <strong className="text-teal-800">Dr. A. Sharma, MD</strong>
          </div>
          <div>
            <span className="text-slate-500">Collected: </span>
            <span>08-Oct-2026, 09:15 AM</span>
          </div>
        </div>

        {/* Test Parameters Snippet with Strict Tabular Grid Alignment */}
        <div className="space-y-1 font-mono text-[11px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 py-1.5 border-b border-slate-200 font-bold text-slate-800 text-[10px] uppercase tracking-wider">
            <span className="col-span-5 text-left">Test Name</span>
            <span className="col-span-4 text-left pl-1">Observed Value</span>
            <span className="col-span-3 text-right">Biological Range</span>
          </div>

          {/* Row 1: Hemoglobin */}
          <div className="grid grid-cols-12 items-center py-1 border-b border-slate-50">
            <span className="col-span-5 text-left text-slate-900 font-medium">Hemoglobin (Hb)</span>
            <div className="col-span-4 text-left pl-1 flex items-center gap-1.5">
              <span className="font-bold text-amber-700">9.4 g/dL</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">LOW</span>
            </div>
            <span className="col-span-3 text-right text-slate-500 text-[10px]">13.0 – 17.0</span>
          </div>

          {/* Row 2: TLC */}
          <div className="grid grid-cols-12 items-center py-1 border-b border-slate-50">
            <span className="col-span-5 text-left text-slate-900 font-medium">Total Leucocyte (TLC)</span>
            <div className="col-span-4 text-left pl-1 flex items-center gap-1.5">
              <span className="font-bold text-rose-600">13,800 /uL</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-rose-100 text-rose-800 font-bold">HIGH</span>
            </div>
            <span className="col-span-3 text-right text-slate-500 text-[10px]">4,000 – 11,000</span>
          </div>

          {/* Row 3: Glucose */}
          <div className="grid grid-cols-12 items-center py-1">
            <span className="col-span-5 text-left text-slate-900 font-medium">Plasma Glucose (FBS)</span>
            <div className="col-span-4 text-left pl-1 flex items-center gap-1.5">
              <span className="font-bold text-rose-700">168 mg/dL</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-rose-200 text-rose-900 font-bold animate-pulse">PANIC</span>
            </div>
            <span className="col-span-3 text-right text-slate-500 text-[10px]">70 – 100</span>
          </div>
        </div>

        {/* Doctor Sign-off & Public QR Token */}
        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-600">
            <QrCode className="w-5 h-5 text-slate-800" />
            <div>
              <div className="font-bold text-slate-900">Public QR Token Verified</div>
              <div className="text-[9px] text-slate-500">Scan to verify tamper-proof original</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-900">Dr. S. K. Deswal, MBBS, DCP</div>
            <div className="text-slate-500 text-[9px]">Consultant Pathologist • Sign-off Certified</div>
          </div>
        </div>
      </div>

      {/* Right: Authentic WhatsApp Dispatch Preview (Light Green Theme with Real Wallpaper) */}
      <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-300 font-sans flex flex-col bg-[#efeae2]">
        {/* WhatsApp Chat Top Bar */}
        <div className="bg-[#075e54] text-white p-3 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-700 border border-white/30 flex items-center justify-center text-xs font-bold text-white shadow-2xs">
              D
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <span>Deswal Diagnostics</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <div className="text-[10px] text-emerald-100/90 font-mono">Official Clinical Dispatch</div>
            </div>
          </div>
          <WhatsAppIcon size={20} className="text-emerald-200" />
        </div>

        {/* WhatsApp Message Canvas */}
        <div className="p-3.5 space-y-3">
          {/* Outgoing Message Bubble */}
          <div className="bg-[#d9fdd3] text-[#111b21] p-3 rounded-lg rounded-tl-none shadow-xs space-y-2 text-xs border border-[#c1e7bb]/70">
            <p className="leading-relaxed text-[11px]">
              Namaste <strong>Ramesh Kumar ji</strong> 🙏
              <br />
              Your diagnostic test report from <strong>Deswal Clinical Diagnostics</strong> (#ACC-2026-0842) is verified and ready.
            </p>

            {/* Embedded Authenticated PDF Attachment Card */}
            <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#e9edef] shadow-2xs">
              <div className="p-1.5 rounded bg-rose-50 border border-rose-200 text-rose-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 text-[11px]">
                <div className="font-semibold text-slate-900 truncate">Report_ACC-2026-0842.pdf</div>
                <div className="text-slate-500 text-[9px] font-mono">164 KB • Signed &amp; QR Verified</div>
              </div>
            </div>

            {/* Verification Link & Read Receipt */}
            <div className="pt-1 flex items-center justify-between text-[10px] text-[#667781] font-mono">
              <span className="text-teal-800 font-semibold underline">pathiq.in/v/tok_8842</span>
              <div className="flex items-center gap-1">
                <span>10:42 AM</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
              </div>
            </div>
          </div>

          {/* Value Callout Badge */}
          <div className="bg-white/80 backdrop-blur-xs p-2 rounded-lg border border-slate-200 text-center text-[10px] text-slate-700 font-medium shadow-2xs">
            <div className="flex items-center justify-center gap-1.5 text-teal-800 font-bold">
              <WhatsAppIcon size={14} className="text-[#25D366]" />
              <span>1-Click Dispatch Directly From Workstation</span>
            </div>
            <span className="text-slate-500 text-[9px]">Zero contact saving required on technician phone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
