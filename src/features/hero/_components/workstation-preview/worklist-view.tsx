'use client';

import { Clock, CheckCircle2, Home, ArrowRight } from 'lucide-react';

const accessions = [
  {
    id: 'ACC-2026-0842',
    patient: 'Ramesh Kumar',
    ageSex: '48Y / M',
    panels: ['CBC', 'Lipid Profile', 'HbA1c'],
    doctor: 'Dr. A. Sharma (Sharma Clinic)',
    type: 'Walk-in',
    status: 'RESULTS_ENTERED',
    time: '09:15 AM',
  },
  {
    id: 'ACC-2026-0841',
    patient: 'Sunita Devi',
    ageSex: '54Y / F',
    panels: ['LFT', 'KFT', 'Thyroid Profile (TSH)'],
    doctor: 'Dr. V. Gupta',
    type: 'Home Collection',
    status: 'VERIFIED',
    time: '08:45 AM',
  },
  {
    id: 'ACC-2026-0840',
    patient: 'Amit Patel',
    ageSex: '32Y / M',
    panels: ['Dengue NS1 Antigen', 'Platelet Count'],
    doctor: 'Direct Walk-in',
    type: 'Walk-in',
    status: 'DELIVERED',
    time: '08:20 AM',
  },
];

export function WorklistView() {
  return (
    <div className="space-y-4">
      {/* Worklist Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-500 uppercase font-mono">Today&apos;s Accessions</div>
          <div className="text-lg font-bold text-slate-900 font-mono">38 Samples</div>
        </div>
        <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-200">
          <div className="text-[10px] text-amber-800 uppercase font-mono">Pending Entry</div>
          <div className="text-lg font-bold text-amber-900 font-mono">6 Samples</div>
        </div>
        <div className="bg-teal-50/60 p-2.5 rounded-lg border border-teal-200">
          <div className="text-[10px] text-teal-800 uppercase font-mono">Ready to Dispatch</div>
          <div className="text-lg font-bold text-teal-900 font-mono">24 Reports</div>
        </div>
        <div className="bg-purple-50/60 p-2.5 rounded-lg border border-purple-200">
          <div className="text-[10px] text-purple-800 uppercase font-mono">Outsourced Tests</div>
          <div className="text-lg font-bold text-purple-900 font-mono">8 Reference Labs</div>
        </div>
      </div>

      {/* Accession Data Grid */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px]">
              <th className="py-2.5 px-3">Accession UID</th>
              <th className="py-2.5 px-3">Patient</th>
              <th className="py-2.5 px-3">Test Panels</th>
              <th className="py-2.5 px-3">Referring Doctor</th>
              <th className="py-2.5 px-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {accessions.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono font-bold text-slate-900 whitespace-nowrap">
                  {item.id}
                  <span className="block text-[10px] text-slate-500 font-normal">{item.time}</span>
                </td>
                <td className="py-2.5 px-3">
                  <div className="font-bold text-slate-900">{item.patient}</div>
                  <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
                    <span>{item.ageSex}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      {item.type === 'Home Collection' && <Home className="w-2.5 h-2.5 text-purple-600" />}
                      {item.type}
                    </span>
                  </div>
                </td>
                <td className="py-2.5 px-3">
                  <div className="flex flex-wrap gap-1">
                    {item.panels.map((p, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-2.5 px-3 text-slate-700 text-[11px] truncate max-w-[150px]">
                  {item.doctor}
                </td>
                <td className="py-2.5 px-3 text-center whitespace-nowrap">
                  {item.status === 'VERIFIED' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-100 text-teal-800">
                      <CheckCircle2 className="w-3 h-3 text-teal-600" /> Verified
                    </span>
                  )}
                  {item.status === 'RESULTS_ENTERED' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800">
                      <Clock className="w-3 h-3 text-amber-600" /> Review Needed
                    </span>
                  )}
                  {item.status === 'DELIVERED' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> WhatsApp Sent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
        <span>⚡ 1-Click Intake: Auto-calculates bill, prints labels, logs doctor referral</span>
        <span className="text-teal-700 font-semibold flex items-center gap-1">
          Zero Paper Registers Needed <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
