'use client';

import { Users2, FileSpreadsheet } from 'lucide-react';

const doctorLedgers = [
  {
    doctor: 'Dr. A. Sharma, MBBS, MD',
    clinic: 'Sharma Multispecialty Clinic',
    patientsReferred: 18,
    grossBilled: '₹14,200',
    arrangement: '15% Association',
    accruedLedger: '₹2,130',
    status: 'Active Relationship',
  },
  {
    doctor: 'Dr. V. Gupta, DGO',
    clinic: 'Gupta Maternity Nursing Home',
    patientsReferred: 11,
    grossBilled: '₹9,800',
    arrangement: 'Flat ₹150 / profile',
    accruedLedger: '₹1,650',
    status: 'Active Relationship',
  },
  {
    doctor: 'Dr. Neha Verma, BAMS',
    clinic: 'Verma Health Clinic',
    patientsReferred: 7,
    grossBilled: '₹4,500',
    arrangement: 'Neutral Record',
    accruedLedger: '₹0 (None)',
    status: 'Record Only',
  },
];

export function ReferralLedgerView() {
  return (
    <div className="space-y-4">
      {/* Context Banner */}
      <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-100 text-cyan-800">
            <Users2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-cyan-950">
              Referring Doctor Revenue Ledger &amp; Clinic Associations
            </div>
            <div className="text-[11px] text-cyan-800">
              Keep referring clinics happy without messy pocket notebooks or end-of-month discrepancies. Transparent, neutral record-keeping.
            </div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 font-mono font-bold text-[10px]">
          END-OF-MONTH STATEMENTS
        </span>
      </div>

      {/* Doctor Ledger Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px]">
              <th className="py-2.5 px-3">Referring Doctor &amp; Clinic</th>
              <th className="py-2.5 px-3 text-center">Patients This Month</th>
              <th className="py-2.5 px-3 text-right">Gross Revenue</th>
              <th className="py-2.5 px-3">Arrangement</th>
              <th className="py-2.5 px-3 text-right">Running Ledger</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono">
            {doctorLedgers.map((doc, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-sans">
                  <div className="font-bold text-slate-900">{doc.doctor}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{doc.clinic}</div>
                </td>
                <td className="py-2.5 px-3 text-center font-bold text-slate-800">
                  {doc.patientsReferred}
                </td>
                <td className="py-2.5 px-3 text-right text-slate-900 font-bold">
                  {doc.grossBilled}
                </td>
                <td className="py-2.5 px-3 text-slate-700 text-[11px]">
                  {doc.arrangement}
                </td>
                <td className="py-2.5 px-3 text-right font-extrabold text-teal-800">
                  {doc.accruedLedger}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600 font-mono text-[11px]">
          <FileSpreadsheet className="w-4 h-4 text-teal-700" />
          <span>One-click monthly settlement statement export with patient-wise test audit</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900">
          <span>Settlements remain 100% under lab owner manual control</span>
        </div>
      </div>
    </div>
  );
}
