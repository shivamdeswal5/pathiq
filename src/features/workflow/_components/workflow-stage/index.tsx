import { LucideIcon, CheckCircle2 } from 'lucide-react';

export interface WorkflowStageProps {
  stepNumber: string;
  badge: string;
  title: string;
  timeEstimate: string;
  problem: string;
  solution: string;
  highlights: string[];
  icon: LucideIcon;
  badgeColor?: 'teal' | 'emerald' | 'cyan' | 'purple' | 'amber';
}

export function WorkflowStage({
  stepNumber,
  badge,
  title,
  timeEstimate,
  problem,
  solution,
  highlights,
  icon: Icon,
}: WorkflowStageProps) {
  return (
    <div className="relative pl-8 sm:pl-10 border-l-2 border-teal-200 pb-12 last:pb-0">
      {/* Step Circle Indicator */}
      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm ring-4 ring-white">
        {stepNumber}
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-teal-300 transition-all space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-teal-800">
              {badge}
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
            {timeEstimate}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
          <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200/80 space-y-1.5">
            <span className="font-mono font-bold text-rose-800 uppercase text-xs tracking-wider block">
              Traditional Lab Friction
            </span>
            <p className="text-slate-700 leading-relaxed">{problem}</p>
          </div>

          <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-200/80 space-y-1.5">
            <span className="font-mono font-bold text-teal-800 uppercase text-xs tracking-wider block">
              The Pathiq Operating System
            </span>
            <p className="text-slate-700 leading-relaxed">{solution}</p>
          </div>
        </div>

        <div className="pt-3.5 border-t border-slate-100 space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
            Key Diagnostic Capabilities:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
