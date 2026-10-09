import * as React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

export interface PillarCardProps {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

export function PillarCard({ badge, title, description, highlights, icon: Icon }: PillarCardProps) {
  return (
    <div className="clinical-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-teal-400/80 shadow-xs hover:shadow-md transition-all bg-white border border-slate-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase font-semibold">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h3>

        <p className="text-xs text-slate-600 leading-relaxed">{description}</p>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
