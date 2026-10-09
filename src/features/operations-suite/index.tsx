'use client';

import * as React from 'react';
import { Container } from '@/components/ui/container';
import { Sliders, ShieldCheck, Home, Radio, Settings } from 'lucide-react';
import { CatalogPreview } from './_components/catalog-preview';
import { RolesPreview } from './_components/roles-preview';
import { CollectionsPreview } from './_components/collections-preview';
import { TelemetryPreview } from './_components/telemetry-preview';
import { SettingsPreview } from './_components/settings-preview';

type SuiteTab = 'catalog' | 'roles' | 'collections' | 'telemetry' | 'settings';

const tabs = [
  { key: 'catalog' as SuiteTab, label: 'Test Catalog & Pricing', icon: Sliders },
  { key: 'roles' as SuiteTab, label: 'Role & Persona Simulator', icon: ShieldCheck },
  { key: 'collections' as SuiteTab, label: 'Home Phlebotomy Queue', icon: Home },
  { key: 'telemetry' as SuiteTab, label: 'Real-Time WebSockets', icon: Radio },
  { key: 'settings' as SuiteTab, label: 'Workspace Settings & NABL', icon: Settings },
];

export function OperationsSuite() {
  const [activeTab, setActiveTab] = React.useState<SuiteTab>('catalog');

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-300">
            <span>Complete Platform Depth</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Beyond Basic Reporting: <br className="hidden sm:inline" />
            <span className="text-teal-700">The Full Diagnostic Operations Engine.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything your lab needs to maintain clinical precision, control staff access, eliminate cash pilferage, and manage tests — without expensive IT retainers.
          </p>

          {/* Interactive Suite Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-200' : 'text-slate-500'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Preview Canvas with Smooth Fade Animation */}
        <div key={activeTab} className="max-w-5xl mx-auto animate-tab-fade">
          {activeTab === 'catalog' && <CatalogPreview />}
          {activeTab === 'roles' && <RolesPreview />}
          {activeTab === 'collections' && <CollectionsPreview />}
          {activeTab === 'telemetry' && <TelemetryPreview />}
          {activeTab === 'settings' && <SettingsPreview />}
        </div>
      </Container>
    </section>
  );
}
