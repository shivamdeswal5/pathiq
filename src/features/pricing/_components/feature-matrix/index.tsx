import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';

interface FeatureRow {
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
}

const matrixSections: { title: string; features: FeatureRow[] }[] = [
  {
    title: 'Accession Intake & Barcode Printing',
    features: [
      {
        name: 'Monthly Registered Sample Limit',
        starter: '600 Samples',
        growth: '2,000 Samples',
        scale: 'Unlimited',
      },
      {
        name: 'Staff & Technician Accounts',
        starter: '2 Accounts',
        growth: '5 Accounts',
        scale: 'Unlimited',
      },
      {
        name: '50×25mm Thermal Barcode Printing (Code-128)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Direct USB / Bluetooth Barcode Scanner Intake',
        starter: false,
        growth: true,
        scale: true,
      },
      {
        name: 'Multi-Counter Cash Drawers & Shifts',
        starter: false,
        growth: true,
        scale: true,
      },
    ],
  },
  {
    title: 'Clinical Diagnostics & Formats',
    features: [
      {
        name: '0.1mm Letterhead Ruler Calibration (Local Press)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'NMC / NABL Compliant Staff Titles (No forced Dr.)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Out-of-Range Panic Value Flagging (LOW/HIGH)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Dynamic Multi-Page Overflow Protection',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Outsourced / Reference Lab Sample Tracking',
        starter: false,
        growth: true,
        scale: true,
      },
    ],
  },
  {
    title: 'Delivery, Doctor Referrals & Billing',
    features: [
      {
        name: '1-Click WhatsApp PDF Report Dispatch',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Doctor Referral Commission & PnL Ledger',
        starter: false,
        growth: true,
        scale: true,
      },
      {
        name: 'Section 194H TDS Payout Statements',
        starter: false,
        growth: true,
        scale: true,
      },
      {
        name: 'Automated Patient Tax Invoicing (GST)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Dedicated Home Collection Booking Workstation',
        starter: false,
        growth: false,
        scale: true,
      },
    ],
  },
  {
    title: 'AI Intelligence & Patient Communication',
    features: [
      {
        name: '✨ AI Clinical Impression Assistant (NMC Act 2019 Aligned)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: '✨ Bilingual Smart Health Summary (Hindi & English)',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'WhatsApp Layperson Explainer with Doctor Direction',
        starter: true,
        growth: true,
        scale: true,
      },
      {
        name: 'Deterministic Fallback Engine (Zero Downtime / Offline)',
        starter: true,
        growth: true,
        scale: true,
      },
    ],
  },
];

function RenderValue({ val }: { val: string | boolean }) {
  if (typeof val === 'boolean') {
    return val ? (
      <Check className="w-4.5 h-4.5 text-teal-600 font-bold mx-auto" />
    ) : (
      <Minus className="w-4.5 h-4.5 text-slate-300 mx-auto" />
    );
  }
  return <span className="font-semibold text-slate-800 text-sm">{val}</span>;
}

export function FeatureMatrix() {
  return (
    <div className="mt-16 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Complete Feature Comparison Matrix
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Detailed breakdown of diagnostic, clinical, hardware, and billing capabilities across each tier.
        </p>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
        <table className="w-full text-left border-collapse min-w-[650px] text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
              <th className="py-4 px-5 w-2/5 text-sm">Capability Specification</th>
              <th className="py-4 px-5 text-center w-1/5 text-sm">Starter (₹499)</th>
              <th className="py-4 px-5 text-center w-1/5 bg-teal-50/70 text-teal-900 border-x border-teal-200 text-sm">
                Growth (₹999)
              </th>
              <th className="py-4 px-5 text-center w-1/5 text-sm">Scale (₹1,999)</th>
            </tr>
          </thead>
          <tbody>
            {matrixSections.map((sec, secIdx) => (
              <Fragment key={secIdx}>
                <tr className="bg-slate-100/70 border-y border-slate-200">
                  <td
                    colSpan={4}
                    className="py-3 px-5 font-bold text-slate-800 uppercase tracking-wider text-xs font-mono"
                  >
                    {sec.title}
                  </td>
                </tr>
                {sec.features.map((feat, featIdx) => (
                  <tr
                    key={featIdx}
                    className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-5 font-medium text-slate-800">{feat.name}</td>
                    <td className="py-3.5 px-5 text-center">
                      <RenderValue val={feat.starter} />
                    </td>
                    <td className="py-3.5 px-5 text-center bg-teal-50/30 border-x border-teal-100">
                      <RenderValue val={feat.growth} />
                    </td>
                    <td className="py-3.5 px-5 text-center">
                      <RenderValue val={feat.scale} />
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
