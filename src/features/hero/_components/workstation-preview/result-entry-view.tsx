'use client';

import { AlertCircle, CheckCircle2, Zap } from 'lucide-react';

const parameters = [
  {
    name: 'Hemoglobin (Hb)',
    method: 'Cyanmethemoglobin',
    value: '9.4',
    unit: 'g/dL',
    range: '13.0 - 17.0',
    flag: 'LOW',
    delta: '-1.8 g/dL vs last test',
  },
  {
    name: 'Total Leucocyte Count (TLC)',
    method: 'Automated Impedance',
    value: '13,800',
    unit: '/uL',
    range: '4,000 - 11,000',
    flag: 'HIGH',
    delta: '+3,400 /uL (Infection Indicator)',
  },
  {
    name: 'Platelet Count',
    method: 'Automated Counter',
    value: '1.85',
    unit: 'Lakh/uL',
    range: '1.50 - 4.50',
    flag: 'NORMAL',
    delta: 'Within Normal Biological Limits',
  },
  {
    name: 'Fasting Plasma Glucose (FBS)',
    method: 'GOD-POD Hexokinase',
    value: '168',
    unit: 'mg/dL',
    range: '70 - 100',
    flag: 'CRITICAL_HIGH',
    delta: 'Delta Warning: Sustained Hyperglycemia',
  },
];

export function ResultEntryView() {
  return (
    <div className="space-y-4">
      {/* Patient Context Ribbon */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-slate-900">#ACC-2026-0842</span>
          <span>•</span>
          <span className="font-bold text-slate-800">Ramesh Kumar</span>
          <span className="text-slate-500 font-mono">(48Y / Male)</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-mono font-semibold text-[11px]">
            Reference Profile: Male &gt; 18Y
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold hover:bg-slate-50"
          >
            <Zap className="w-3 h-3 text-amber-500" />
            <span>Fill Normal Ranges</span>
          </button>
        </div>
      </div>

      {/* Result Entry Grid */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px]">
              <th className="py-2.5 px-3">Investigation Parameter</th>
              <th className="py-2.5 px-3 text-right">Result Value</th>
              <th className="py-2.5 px-3">Unit</th>
              <th className="py-2.5 px-3">Biological Ref Range</th>
              <th className="py-2.5 px-3 text-center">Diagnostic Flag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono">
            {parameters.map((p, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-sans">
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{p.method}</div>
                </td>
                <td className="py-2.5 px-3 text-right">
                  <input
                    type="text"
                    readOnly
                    value={p.value}
                    className={`w-20 text-right px-2 py-1 rounded font-bold font-mono text-xs border ${
                      p.flag === 'CRITICAL_HIGH' || p.flag === 'HIGH'
                        ? 'bg-rose-50 border-rose-300 text-rose-700 ring-2 ring-rose-100'
                        : p.flag === 'LOW'
                          ? 'bg-amber-50 border-amber-300 text-amber-800'
                          : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  />
                </td>
                <td className="py-2.5 px-3 text-slate-600">{p.unit}</td>
                <td className="py-2.5 px-3 text-slate-600">{p.range}</td>
                <td className="py-2.5 px-3 text-center">
                  {p.flag === 'CRITICAL_HIGH' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
                      <AlertCircle className="w-3 h-3 text-rose-600" /> PANIC HIGH
                    </span>
                  )}
                  {p.flag === 'HIGH' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      HIGH
                    </span>
                  )}
                  {p.flag === 'LOW' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      LOW
                    </span>
                  )}
                  {p.flag === 'NORMAL' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> NORMAL
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-2.5 bg-rose-50/70 rounded-lg border border-rose-200 flex items-center justify-between text-[11px] text-rose-900">
        <span className="flex items-center gap-1.5 font-semibold">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>Automated Panic Flagging: Fasting Glucose (168 mg/dL) exceeds clinical threshold.</span>
        </span>
        <span className="font-mono text-rose-700 font-bold">NMC Aligned</span>
      </div>
    </div>
  );
}
