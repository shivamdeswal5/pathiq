import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';

const steps = [
  { step: '01', title: 'Intake & Accession', time: '20s', desc: 'Panel bundles & cash/UPI' },
  { step: '02', title: '50×25mm Barcode', time: '1s', desc: 'Code-128 & tube flags' },
  { step: '03', title: 'Result Entry', time: '2m', desc: 'Panic flags & delta alerts' },
  { step: '04', title: 'Letterhead / WhatsApp', time: '1m', desc: '0.1mm ruler & signed PDF' },
];

export function WorkflowTeaser() {
  return (
    <div className="py-12 bg-white border-b border-slate-200">
      <Container>
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-md">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>Standard Operating Procedure</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              The 5-Minute Diagnostic Cycle
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              See the exact step-by-step clinical workflow engineered for Indian standalone pathology labs doing 10–50 samples/day.
            </p>
          </div>

          {/* Quick Steps Roadmap */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1 text-center sm:text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-700">{s.step}</span>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded font-semibold">
                    {s.time}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">{s.title}</div>
                <div className="text-[10px] text-slate-600 truncate">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Link to Full Tour */}
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/workflow"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-xs"
            >
              <span>View Full Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
