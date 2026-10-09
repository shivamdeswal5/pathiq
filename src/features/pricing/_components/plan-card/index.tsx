import * as React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { config } from '@/lib/config';

export interface PlanData {
  id: string;
  name: string;
  slug: 'STARTER' | 'GROWTH' | 'SCALE';
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
}

export interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
}

export function PlanCard({ plan, isAnnual }: PlanCardProps) {
  const price = isAnnual ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
  const billedInfo = isAnnual
    ? `Billed annually (₹${plan.yearlyPrice.toLocaleString('en-IN')}/yr)`
    : 'Billed monthly';

  const signupHref = `${config.appUrl}/signup?plan=${plan.slug}&billing=${isAnnual ? 'YEARLY' : 'MONTHLY'}`;

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
        plan.popular
          ? 'bg-white border-2 border-teal-600 shadow-xl shadow-teal-500/10 md:-translate-y-2 hover:-translate-y-3'
          : 'bg-white border border-slate-200 shadow-xs hover:border-teal-400 hover:shadow-lg hover:shadow-teal-900/5 hover:-translate-y-1'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1 whitespace-nowrap">
          <Sparkles className="w-3 h-3" />
          <span>Recommended for Standalone Labs</span>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
          <p className="text-xs text-slate-600 mt-1 min-h-[32px] leading-relaxed">{plan.tagline}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-slate-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-slate-500">/ month</span>
          </div>
          <div className="text-[11px] text-teal-800 font-mono font-medium">{billedInfo}</div>
        </div>

        <div className="pt-4 border-t border-slate-100 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
            Included Capabilities:
          </span>
          {plan.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-7">
        <a
          href={signupHref}
          className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer ${
            plan.popular
              ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs hover:scale-101 animate-shimmer-btn'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 hover:border-slate-300'
          }`}
        >
          <span>Start 14-Day Free Trial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
