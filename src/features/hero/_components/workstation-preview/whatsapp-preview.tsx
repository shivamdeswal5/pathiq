'use client';

import * as React from 'react';
import { Send, FileCheck, CheckCircle2, QrCode, ShieldCheck } from 'lucide-react';

export function WhatsappPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Left: Operational Context */}
      <div className="lg:col-span-5 space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-wider">
          <Send className="w-3 h-3 text-emerald-600" />
          <span>Patient Experience</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          1-Click WhatsApp PDF Report Dispatch
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          No downloading files to your desktop. No saving 30 new patient numbers to your personal phone daily. When tests are signed off, 1 click triggers a pre-composed WhatsApp message with authenticated download links.
        </p>

        <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Zero phone contact saving required on technician devices</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Tamper-proof public QR verification token prevents forged reports</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Reduces front-desk calls asking &quot;Is my test report ready?&quot;</span>
          </li>
        </ul>
      </div>

      {/* Right: Realistic WhatsApp Chat View */}
      <div className="lg:col-span-7 flex justify-center bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
        <div className="w-full max-w-sm bg-[#0c1a17] text-slate-100 rounded-xl p-4 shadow-xl border border-emerald-950 font-sans space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold text-white">
                P
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Pathiq Diagnostics</span>
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[10px] text-emerald-400">Official Diagnostic Portal</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-400">10:42 AM</span>
          </div>

          {/* WhatsApp Message Bubble */}
          <div className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none space-y-2 text-xs border border-white/5">
            <p className="text-slate-200 leading-relaxed text-[11px]">
              Namaste <strong>Ramesh Kumar ji</strong> 🙏
              <br />
              Your diagnostic test report for Accession{' '}
              <span className="font-mono text-emerald-400">#ACC-2026-0819</span> has been certified
              and verified.
            </p>

            {/* Signed PDF Attachment Card */}
            <div className="flex items-center gap-2.5 p-2 bg-black/40 rounded-md border border-white/10 hover:border-emerald-500/50 transition-colors">
              <FileCheck className="w-6 h-6 text-rose-400 shrink-0" />
              <div className="min-w-0 flex-1 text-[11px]">
                <div className="font-semibold text-white truncate">Report_ACC-2026-0819.pdf</div>
                <div className="text-slate-400 text-[9px] flex items-center gap-2">
                  <span>142 KB</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono">NABL Verified</span>
                </div>
              </div>
              <QrCode className="w-4 h-4 text-slate-400 shrink-0" />
            </div>

            <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400 font-mono">
              <span>View Online: pathiq.in/v/tok_7x9...</span>
              <span className="text-emerald-400 font-bold">10:42 AM ✓✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
