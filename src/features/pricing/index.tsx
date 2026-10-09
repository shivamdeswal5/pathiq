'use client';

import * as React from 'react';
import { Container } from '@/components/ui/container';
import { BillingToggle } from './_components/billing-toggle';
import { PlanCard, type PlanData } from './_components/plan-card';
import { EnterpriseCard } from './_components/enterprise-card';
import { ContinuityBanner } from './_components/continuity-banner';
import { FeatureMatrix } from './_components/feature-matrix';

const pricingPlans: PlanData[] = [
  {
    id: 'starter',
    slug: 'STARTER',
    name: 'Starter Lab',
    tagline: 'Ideal for solo biochemists and new labs doing 10–25 samples/day.',
    monthlyPrice: 499,
    yearlyPrice: 4990,
    features: [
      'Up to 2 Staff / Technician Logins',
      'Up to 600 Monthly Samples',
      '50×25mm Thermal Barcode Printing',
      'Pre-Printed Letterhead Margin Calibration',
      '1-Click WhatsApp PDF Report Delivery',
      'Daily Front-Desk Cash & Counter Ledger',
    ],
  },
  {
    id: 'growth',
    slug: 'GROWTH',
    name: 'Growth Lab',
    tagline: 'The sweet spot for active standalone labs doing 25–60 samples/day.',
    monthlyPrice: 999,
    yearlyPrice: 9990,
    popular: true,
    features: [
      'Up to 5 Staff & Phlebotomist Logins',
      'Up to 2,000 Monthly Samples',
      'Everything in Starter Tier',
      'Doctor Referral Commission Ledger (TDS 194H)',
      'Direct USB / Bluetooth Barcode Scanner Intake',
      'NABL Outsourced Sample Sync Tracking',
      'Multi-Counter Cash Drawers & Reconciliation',
    ],
  },
  {
    id: 'scale',
    slug: 'SCALE',
    name: 'Scale Lab',
    tagline: 'For high-volume centers, home collection networks, or expanding labs.',
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    features: [
      'Unlimited Staff & Phlebotomist Logins',
      'Unlimited Monthly Sample Accessions',
      'Everything in Growth Tier',
      'Home Phlebotomy Booking Workstation',
      'Priority Support Line',
      'Custom Letterhead Offset Calibration Profiles',
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Flat Pricing for Every Stage <br className="hidden sm:inline" />
            <span className="text-teal-700">of Your Diagnostic Lab.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            No surprise per-SMS charges. No hidden analyzer integration fees. Transparent pricing with instant UPI &amp; NetBanking activation.
          </p>

          <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
        </div>

        {/* 3 Standard Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Enterprise & High-Volume Custom Tier */}
        <EnterpriseCard />

        {/* 72-Hour Clinical Continuity & Payment Trust Banner */}
        <ContinuityBanner />

        {/* Full Feature Comparison Matrix */}
        <FeatureMatrix />
      </Container>
    </section>
  );
}
