
export interface BillingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
}

export function BillingToggle({ isAnnual, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
      <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-xl border border-slate-200">
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
            !isAnnual
              ? 'bg-white text-slate-900 shadow-xs font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Monthly Billing
        </button>
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
            isAnnual
              ? 'bg-white text-slate-900 shadow-xs font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Annual Billing</span>
          <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
            Save 17% (2 Mo Free)
          </span>
        </button>
      </div>
      <span className="text-xs font-mono text-slate-500">
        Billed in INR (₹) • GST Input Invoicing Included
      </span>
    </div>
  );
}
