import { CheckCircle2 } from 'lucide-react';

const trustItems = [
  '14-Day Free Trial (No Card Needed)',
  'Onboarding in Under 1 Day',
  'Outsourced Reference Lab Sync',
  'Doctor Referral Ledgers Included',
  'Flat Starting at ₹499 / month',
];

export function TrustStrip() {
  return (
    <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
      {trustItems.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
