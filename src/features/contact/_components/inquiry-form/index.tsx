'use client';

import { useState, type FormEvent } from 'react';
import { Send, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { config } from '@/lib/config';

export function InquiryForm() {
  const [labName, setLabName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [volume, setVolume] = useState('50-100');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Pathiq Team, I would like to request custom onboarding for my laboratory:
- Lab Name: ${labName || 'Not specified'}
- Contact Person: ${ownerName || 'Not specified'}
- WhatsApp / Phone: ${phone || 'Not specified'}
- City: ${city || 'Not specified'}
- Daily Sample Volume: ${volume} samples/day
- Requirements: ${notes || 'Standard custom setup'}`;

    window.open(config.getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="space-y-2 border-b border-slate-100 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800">
          <Building2 className="w-4 h-4 text-teal-600" />
          <span>Custom Onboarding &amp; Enterprise Setup</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Request Lab Account Provisioning
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Need a high-volume tier, multi-branch licensing, or manual activation via your accounts team? Submit below and our onboarding desk will configure your account within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="labName" className="font-semibold text-slate-700 block text-sm">
              Diagnostic Lab Name *
            </label>
            <input
              id="labName"
              type="text"
              required
              placeholder="e.g. Shanti Pathology Laboratory"
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="ownerName" className="font-semibold text-slate-700 block text-sm">
              Owner / Biochemist Name *
            </label>
            <input
              id="ownerName"
              type="text"
              required
              placeholder="e.g. Rajesh Sharma, BMLT / DMLT"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="font-semibold text-slate-700 block text-sm">
              WhatsApp Mobile Number *
            </label>
            <input
              id="phone"
              type="tel"
              required
              inputMode="numeric"
              placeholder="e.g. 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="city" className="font-semibold text-slate-700 block text-sm">
              City &amp; State *
            </label>
            <input
              id="city"
              type="text"
              required
              placeholder="e.g. Indore, Madhya Pradesh"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="volume" className="font-semibold text-slate-700 block text-sm">
            Average Daily Sample Volume
          </label>
          <select
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all cursor-pointer"
          >
            <option value="10-25">10–25 Samples / Day (Starter Lab)</option>
            <option value="25-60">25–60 Samples / Day (Growth Lab)</option>
            <option value="60-150">60–150 Samples / Day (Scale Lab)</option>
            <option value="150+">150+ Samples / Day (Enterprise / Multi-Center)</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="notes" className="font-semibold text-slate-700 block text-sm">
            Specific Requirements (Optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder="e.g. We have existing test panels to import, need 3 technician logins, or need admin manual activation with GST invoice."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer hover:scale-101 active:scale-99"
        >
          <Send className="w-4.5 h-4.5" />
          <span>Submit Request &amp; Open WhatsApp Chat</span>
        </button>

        {submitted && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Request opened on WhatsApp. Our admin team will respond with credentials within 2 hours.
            </span>
          </div>
        )}

        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Zero Obligation • Free Reference Range Setup Included</span>
        </div>
      </form>
    </div>
  );
}
