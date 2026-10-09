import * as React from 'react';
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';

export function WorkflowHero() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-300">
        <Clock className="w-3.5 h-3.5 text-teal-700" />
        <span>The 5-Minute Clinical Diagnostic Cycle</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        How Indian Pathology Labs <br />
        <span className="text-teal-700">Operate at Zero-Defect Precision.</span>
      </h1>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
        From the moment a patient reaches your intake desk to the certified WhatsApp PDF delivery on their smartphone. See the exact sequential workflow engineered for 10–50 samples/day labs.
      </p>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>NMC &amp; NABL ISO 15189 Aligned</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>No IT Setup Required</span>
        </span>
      </div>
    </div>
  );
}
