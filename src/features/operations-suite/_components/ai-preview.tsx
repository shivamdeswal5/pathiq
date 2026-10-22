'use client';

import { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Languages,
  CheckCircle2,
  Stethoscope,
  Send,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';

export function AiPreview() {
  const [selectedLang, setSelectedLang] = useState<'en' | 'hi'>('hi');

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span>AI Clinical Co-Pilot &amp; Bilingual Explainer</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                NEW
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              Provisional impression drafting for pathologists + layperson WhatsApp explanations for patients.
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>NMC Act 2019 &amp; NABL ISO 15189 Aligned</span>
        </div>
      </div>

      {/* Dual Side-by-Side Live Demos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* LEFT: Pathologist AI Clinical Impression Assistant */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-900 text-xs">
                  Pathologist Clinical Co-Pilot
                </span>
              </div>
              <span className="text-[10px] font-mono text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                Result Entry Console
              </span>
            </div>

            <p className="text-[11px] text-slate-600 leading-snug">
              Analyzes out-of-range numerical parameters and drafts provisional clinical impressions in 1 click.
            </p>

            {/* Abnormal Finding Bench Strip */}
            <div className="bg-white rounded-lg p-2.5 border border-slate-200 font-mono text-[11px] space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase">
                Observed Abnormal Parameters:
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold">
                  Hb: 9.2 g/dL (LOW)
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold">
                  MCV: 74.0 fL (LOW)
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
                  Platelets: 140,000 /µL (BORDERLINE)
                </span>
              </div>
            </div>

            {/* AI Generated Clinical Impression Box */}
            <div className="p-3 rounded-lg bg-teal-500/5 border border-teal-500/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-teal-600" />
                  <span>Drafted Clinical Impression</span>
                </span>
                <span className="text-[9px] font-mono font-semibold text-slate-400">
                  Provisional • Editable
                </span>
              </div>
              <p className="text-[11px] text-slate-800 font-mono leading-relaxed bg-white/80 p-2 rounded border border-slate-200">
                &quot;Microcytic hypochromic blood picture with mild thrombocytopenia, suggestive of Iron Deficiency Anemia. Advise Serum Ferritin, Iron Profile, and clinical correlation with referring physician.&quot;
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Saves 70% typing time</span>
            </span>
            <span>Pathologist retains 100% final sign-off authority</span>
          </div>
        </div>

        {/* RIGHT: Patient-Facing Bilingual WhatsApp / Web Explainer */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-teal-100 text-teal-800">
                  <Languages className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-900 text-xs">
                  Bilingual Patient Explainer
                </span>
              </div>

              {/* Language Switcher Pill */}
              <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-200 text-[10px] font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedLang('hi')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    selectedLang === 'hi'
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLang('en')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    selectedLang === 'en'
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 leading-snug">
              Eliminates repetitive patient phone calls asking &quot;Report mein kya aaya hai?&quot; (What does my report say?).
            </p>

            {/* Smart Summary Card */}
            <div className="bg-white rounded-lg p-3 border border-slate-200 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                {selectedLang === 'hi'
                  ? 'सरल भाषा में आपकी जांच का सारांश'
                  : 'Plain-Language Test Summary'}
              </div>

              <p className="text-[11px] text-slate-700 leading-relaxed">
                {selectedLang === 'hi'
                  ? 'आपके हीमोग्लोबिन और लाल रक्त कोशिकाओं का आकार सामान्य स्तर से कम पाया गया है, जो सामान्य तौर पर खून की कमी (एनीमिया) की ओर संकेत करता है। बाकी जांच पैरामीटर सामान्य हैं।'
                  : 'Your hemoglobin and red blood cell indices are lower than standard biological reference ranges, which commonly indicates mild anemia. Other baseline parameters remain stable.'}
              </p>

              {/* Patient Reassurance Chips */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px]">
                <div className="p-1.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{selectedLang === 'hi' ? 'किडनी / शुगर: सामान्य' : 'Kidney / Sugar: Normal'}</span>
                </div>
                <div className="p-1.5 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                  <span>{selectedLang === 'hi' ? 'हीमोग्लोबिन: कम (9.2)' : 'Hemoglobin: Low (9.2)'}</span>
                </div>
              </div>

              {/* Strict Medical Disclaimer Notice */}
              <div className="p-2 rounded bg-slate-100 border border-slate-200 text-[10px] text-slate-600 flex items-start gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  {selectedLang === 'hi'
                    ? 'यह सारांश केवल जानकारी के लिए है। उचित उपचार और सलाह हेतु कृपया अपने डॉक्टर से संपर्क करें।'
                    : 'This summary is for educational clarity only. Please consult your treating physician for medical diagnosis and prescriptions.'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1 text-teal-700 font-semibold">
              <Send className="w-3 h-3" />
              <span>Delivered via WhatsApp &amp; QR link</span>
            </span>
            <span>Zero extra paper used</span>
          </div>
        </div>
      </div>
    </div>
  );
}
