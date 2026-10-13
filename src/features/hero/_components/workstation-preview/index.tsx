'use client';

import { useState } from 'react';
import { WorklistView } from './worklist-view';
import { ResultEntryView } from './result-entry-view';
import { OutsourcedSyncView } from './outsourced-sync-view';
import { ReferralLedgerView } from './referral-ledger-view';
import { WhatsappReportView } from './whatsapp-report-view';

type TabKey = 'worklist' | 'result_entry' | 'outsourced' | 'referrals' | 'report';

interface TabItem {
  key: TabKey;
  label: string;
  badge?: string;
}

const TABS: TabItem[] = [
  { key: 'worklist', label: '1. Accession Worklist' },
  { key: 'result_entry', label: '2. Result Entry & Panic Flags' },
  { key: 'outsourced', label: '3. Outsourced Test Tracker', badge: 'Unique' },
  { key: 'referrals', label: '4. Referring Doctor Ledger' },
  { key: 'report', label: '5. Branded Report & WhatsApp' },
];

export function WorkstationPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('worklist');

  return (
    <div className="relative mt-12 max-w-5xl mx-auto group">
      {/* Ambient Telemetry Halo Glow (21st.dev style) */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-teal-500/15 via-cyan-500/20 to-emerald-500/15 blur-xl -z-10 animate-ambient-pulse pointer-events-none" />

      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl shadow-slate-200/60 transition-all text-left">
        {/* Top Header & Tab Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs font-mono font-semibold text-slate-600">
              Pathiq Clinical Workstation • Deswal Pathology Center
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto max-w-full">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 active:scale-97 ${activeTab === tab.key
                    ? 'bg-white text-teal-800 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Panes with Silky Crossfade Transition */}
        <div key={activeTab} className="pt-6 animate-tab-fade">
          {activeTab === 'worklist' && <WorklistView />}
          {activeTab === 'result_entry' && <ResultEntryView />}
          {activeTab === 'outsourced' && <OutsourcedSyncView />}
          {activeTab === 'referrals' && <ReferralLedgerView />}
          {activeTab === 'report' && <WhatsappReportView />}
        </div>
      </div>
    </div>
  );
}
