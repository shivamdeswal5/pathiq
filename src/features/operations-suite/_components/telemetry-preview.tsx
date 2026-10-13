'use client';

import { Radio, Bell, CheckCircle2, ShieldAlert } from 'lucide-react';

const liveEvents = [
  {
    time: '09:15:02 AM',
    channel: 'lab:deswal-path:accessions',
    type: 'ACCESSION_CREATED',
    summary: 'Patient Ramesh Kumar (#ACC-2026-0842) registered at Reception Counter 1.',
    effect: 'Bench worklist auto-refreshed instantly without browser reload.',
    icon: Bell,
    badgeColor: 'teal',
  },
  {
    time: '09:22:45 AM',
    channel: 'lab:deswal-path:clinical',
    type: 'CRITICAL_PANIC_ALERT',
    summary: 'Platelet Count 18,000 /uL (Critically Low) entered on Hematology Bench.',
    effect: 'Broadcasts high-priority RED alarm banner to Consultant Pathologist terminal.',
    icon: ShieldAlert,
    badgeColor: 'rose',
  },
  {
    time: '09:35:10 AM',
    channel: 'lab:deswal-path:dispatch',
    type: 'REPORT_FINALIZED',
    summary: 'Report certified & signed by Dr. S. K. Deswal, MBBS, DCP.',
    effect: 'Front-desk WhatsApp dispatch terminal unlocked with signed PDF token.',
    icon: CheckCircle2,
    badgeColor: 'emerald',
  },
];

export function TelemetryPreview() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <Radio className="w-4 h-4 text-teal-700 animate-pulse" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Real-Time Multi-Station Sync (CloudEvents WebSockets)</div>
            <div className="text-[10px] text-slate-500 font-mono">
              Zero page reloads. Instant bidirectional synchronization across front-desk, bench, and doctor stations.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
          <span>WebSocket Stream Active • 4 Terminals Connected</span>
        </div>
      </div>

      {/* Realtime Event Stream Stream Log */}
      <div className="space-y-2 font-mono">
        {liveEvents.map((evt, idx) => {
          const Icon = evt.icon;
          return (
            <div
              key={idx}
              className={`p-3 rounded-xl border text-[11px] space-y-1.5 ${
                evt.badgeColor === 'rose'
                  ? 'bg-rose-50/50 border-rose-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      evt.badgeColor === 'rose' ? 'text-rose-600' : 'text-teal-700'
                    }`}
                  />
                  <span className="font-bold text-slate-900 text-[10px] font-sans">{evt.type}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-200/60 text-slate-700">
                    {evt.channel}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">{evt.time}</span>
              </div>

              <div className="text-slate-800 font-sans text-xs">{evt.summary}</div>
              <div className="text-[10px] text-teal-800 font-medium">↳ {evt.effect}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
