'use client';

import * as React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, FlaskConical, MapPin } from 'lucide-react';

const roles = [
  {
    role: 'LAB OWNER',
    icon: UserCheck,
    color: 'emerald',
    badge: 'Full Administrative Authority',
    description:
      'Complete visibility over diagnostic revenue, doctor commission ledgers, expense profit/loss, and staff management.',
    permissions: ['Reports Finalize', 'Doctor Ledgers', 'P&L Analytics', 'RBAC Simulation'],
  },
  {
    role: 'CONSULTANT PATHOLOGIST',
    icon: Stethoscope,
    color: 'teal',
    badge: 'Clinical Authority',
    description:
      'Gated medical sign-off, panic value verification, diagnostic interpretations, and legal digital signature stamping.',
    permissions: ['Clinical Sign-off', 'Panic Review', 'Interpretation Notes', 'Audit Trail'],
  },
  {
    role: 'LAB TECHNICIAN',
    icon: FlaskConical,
    color: 'cyan',
    badge: 'Operational Bench Access',
    description:
      'High-speed bench data entry and accession intake. Strictly restricted from viewing doctor referral cuts or financial books.',
    permissions: ['Result Entry', 'Accession Intake', 'Sample Batching', 'Normal Range Fill'],
  },
  {
    role: 'PHLEBOTOMIST',
    icon: MapPin,
    color: 'amber',
    badge: 'Field & Home Collection',
    description:
      'Mobile-optimized run queue for home blood sample collection, patient GPS routing, and cold-chain specimen intake.',
    permissions: ['Home Collection Run', 'Specimen Check-in', 'Patient Timestamps', 'Transit Status'],
  },
];

export function RolesPreview() {
  const [selectedRole, setSelectedRole] = React.useState('LAB OWNER');

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Role-Based Access Control &amp; Persona Simulator</div>
            <div className="text-[10px] text-slate-500 font-mono">
              Protect clinical integrity. Test exact permissions across 4 native laboratory roles with 1 click.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Active Simulation: {selectedRole}</span>
        </div>
      </div>

      {/* Role Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = selectedRole === r.role;
          return (
            <button
              key={r.role}
              type="button"
              onClick={() => setSelectedRole(r.role)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${
                isSelected
                  ? 'border-teal-500 bg-teal-50/40 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-1.5 rounded-lg border ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-500">
                  {isSelected ? 'ACTIVE' : 'SELECT'}
                </span>
              </div>

              <div>
                <div className="font-bold text-slate-900 text-xs tracking-tight">{r.role}</div>
                <div className="text-[10px] text-slate-500 leading-snug mt-0.5">{r.description}</div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1">
                <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Key Access:</div>
                <div className="flex flex-wrap gap-1">
                  {r.permissions.map((p, i) => (
                    <span
                      key={i}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
