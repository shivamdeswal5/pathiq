'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { FaqItem } from './_components/faq-item';

const faqsData = [
  {
    q: 'Do I need to buy a specialized barcode printer or scanner?',
    a: 'No. Pathiq is built to work out-of-the-box with standard 50×25mm thermal sticker rolls and standard domestic barcode printers (such as TVS LP 46 Neo, TSC TE 244, Zebra, or generic ESC/POS units). Any USB or Bluetooth handheld scanner works plug-and-play without special drivers.',
  },
  {
    q: 'Our letterhead is pre-printed at a local offset press. Will test tables overlap our header?',
    a: 'Not at all. Inside Settings > Branding, Pathiq includes a visual millimeter margin ruler. Simply measure the height of your pre-printed header with a physical ruler (e.g. 45mm), enter it, and the system automatically leaves that exact area blank on printouts.',
  },
  {
    q: 'I am a DMLT/BMLT technician running my own lab. Does Pathiq force an MBBS "Dr." prefix?',
    a: 'No. Pathiq is designed with Indian medical reality in mind. In full adherence with NMC and NABL ISO 15189 guidelines, technician and lab owner titles are completely flexible. You are never forced into inaccurate medical prefixes.',
  },
  {
    q: 'How does WhatsApp report delivery work? Do I have to pay per message?',
    a: 'Pathiq supports instant 1-click WhatsApp delivery directly from the test sign-off screen with pre-filled patient greetings and authenticated download links. There are zero hidden per-message SMS costs.',
  },
  {
    q: 'What happens when my 14-day free trial ends?',
    a: 'You can upgrade in under 60 seconds using any domestic UPI application (PhonePe, Google Pay, Paytm) or NetBanking. In accordance with our Patient Safety Invariant, if payment is delayed, our 72-hour grace period ensures you can always access, view, and print existing patient reports.',
  },
  {
    q: 'Can we track commissions paid to referring doctors and clinics?',
    a: 'Yes. Pathiq includes a dedicated Doctor Referral Ledger. You can configure individual doctor commission percentages or flat cuts, log referring clinics during patient intake, and generate end-of-month settlement sheets with zero manual calculations and 5% Section 194H TDS withholding.',
  },
  {
    q: 'Can our lab get manual onboarding or custom setup from your team?',
    a: 'Yes. If you run a high-volume diagnostic center (>200 samples/day) or multi-branch network, our central administration team can directly provision your account, migrate your test panels and biological reference ranges, and activate your subscription directly via official UTR/bank transfer.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <Container size="narrow">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-700 font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Common questions from Indian laboratory owners adopting Pathiq.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
