import * as React from 'react';
import Link from 'next/link';
import { Building2, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export function EnterpriseCard() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Context & Capabilities */}
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>High-Volume Diagnostic Centers &amp; Multi-Branch Networks</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Need a Custom Plan or More than 200 Samples / Day?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            For diagnostic networks, high-throughput centers, or labs requiring customized test catalogs and manual corporate activation. Our central administration team directly sets up your lab, migrates historical reference ranges, and issues tax invoices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Direct Admin Account &amp; Staff Provisioning</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Multi-Counter Cash Drawers &amp; Branch Ledgers</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Free Custom Panel &amp; Range Data Migration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Dedicated WhatsApp SLA &amp; Support Escalation</span>
            </div>
          </div>
        </div>

        {/* Right Column: CTAs */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-stretch sm:items-start lg:items-end">
          <Link
            href="/contact?plan=enterprise"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-sm"
          >
            <span>Request Custom Setup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20run%20a%20high-volume%20diagnostic%20center%20and%20want%20to%20discuss%20a%20custom%20Pathiq%20plan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat with Founders on WhatsApp</span>
          </a>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1 font-mono">
            <ShieldCheck className="w-3 h-3 text-teal-400" />
            <span>Admin Instant UTR Activation Supported</span>
          </div>
        </div>
      </div>
    </div>
  );
}
