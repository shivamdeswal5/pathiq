import * as React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export function ContactCards() {
  return (
    <div className="space-y-4">
      {/* WhatsApp Direct Card */}
      <div className="rounded-2xl p-6 border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between space-y-4 shadow-xs">
        <div className="space-y-2">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 w-fit">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Direct Founder WhatsApp</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Direct chat with our product and engineering founders for immediate technical questions and live video walkthroughs.
          </p>
        </div>
        <a
          href="https://wa.me/919999999999?text=Hi%20Pathiq%2C%20I%20run%20a%20pathology%20lab%20and%20want%20to%20learn%20more"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp (+91)</span>
        </a>
      </div>

      {/* Lab Phone Helpline */}
      <div className="rounded-2xl p-6 border border-slate-200 bg-white space-y-2 shadow-xs">
        <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 w-fit">
          <Phone className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Direct Lab Helpline</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Available Monday – Saturday, 8:00 AM – 8:00 PM IST for lab technician support and printer onboarding.
        </p>
        <div className="text-xs font-mono font-bold text-teal-800 pt-1">+91 98765 43210</div>
      </div>

      {/* Official Email */}
      <div className="rounded-2xl p-6 border border-slate-200 bg-white space-y-2 shadow-xs">
        <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 w-fit">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Corporate &amp; Billing Inquiries</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          For procurement tenders, partnership inquiries, and GST invoice verification.
        </p>
        <a
          href="mailto:support@pathiq.in"
          className="text-xs font-mono font-bold text-teal-800 hover:underline block pt-1"
        >
          support@pathiq.in
        </a>
      </div>

      {/* Registered Office */}
      <div className="rounded-2xl p-6 border border-slate-200 bg-white space-y-2 shadow-xs">
        <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 w-fit">
          <MapPin className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Registered Office</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Pathiq Health Technologies Private Limited <br />
          Cyber City, Sector 24, Gurugram, Haryana 122002, India
        </p>
      </div>
    </div>
  );
}
