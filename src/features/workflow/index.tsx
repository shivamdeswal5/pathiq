'use client';

import { UserCheck, FileText, Layers, Send, Wallet } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { WorkflowHero } from './_components/workflow-hero';
import { WorkflowStage, type WorkflowStageProps } from './_components/workflow-stage';

const stages: WorkflowStageProps[] = [
  {
    stepNumber: '01',
    badge: 'Front-Desk Intake & Billing',
    title: 'Instant Patient Registration & Counter Payment Settlement',
    timeEstimate: 'Avg 20 Seconds',
    problem:
      'Writing patient names, test lists, and payments in paper registers creates front-desk chaos during morning fasting rushes and causes cash discrepancies.',
    solution:
      'Register walk-in or home collection patients in seconds. Pre-configured panels (CBC, LFT, KFT, Lipid) auto-calculate fees, record cash or UPI payments, and generate unique accession UID numbers.',
    highlights: [
      'Instant accession UID serial generation (#ACC-2026-0842)',
      'Patient lookup by mobile number auto-populates demographics',
      'Split counter payments: Cash vs UPI collections tracked per shift',
      'Doctor referral clinic attribution at registration time',
    ],
    icon: UserCheck,
  },
  {
    stepNumber: '02',
    badge: 'Clinical Accuracy',
    title: 'Rapid Numerical Result Entry with Automated Panic Value Flagging',
    timeEstimate: 'Under 90 Seconds',
    problem:
      'Typing values into unstructured Word files leads to calculation errors and missed life-threatening abnormal levels (e.g. Platelets < 20,000 or Glucose > 400).',
    solution:
      'High-speed numerical bench entry matching your paper lab sheets. Automatically loads age & gender biological reference ranges and flags out-of-range panic values in RED so no critical patient result is missed.',
    highlights: [
      'Age and gender-stratified biological reference ranges auto-applied',
      'Automated visual flagging: RED for critical panic, AMBER for borderline',
      'Historical delta check compares with patient’s previous lab visits',
      'One-touch normal fill button for high-throughput screening profiles',
    ],
    icon: FileText,
  },
  {
    stepNumber: '03',
    badge: 'Industry First Innovation',
    title: 'Outsourced Reference Lab Tracking & Consolidated Result Merger',
    timeEstimate: 'Zero Duplicate Papers',
    problem:
      'Small labs outsource special tests (Biopsies, Vit D, Hormones) to reference centers (Lal PathLabs, SRL) and are forced to give patients two separate, messy, unbranded sheets.',
    solution:
      'Track outsourced test batches, dispatch dates, and partner lab status. When results arrive, Pathiq merges in-house and reference lab results into ONE single, consolidated, professionally branded patient report.',
    highlights: [
      'Log tests sent to Dr. Lal PathLabs, Metropolis, SRL, or local hubs',
      'Track pending vs received send-out status in real time',
      'Auto-merge reference lab parameters into your final branded patient PDF',
      'Track outsourced partner costs against patient billing to see exact gross margins',
    ],
    icon: Layers,
  },
  {
    stepNumber: '04',
    badge: 'Patient Delight',
    title: 'Certified Pathologist Sign-Off & 1-Click WhatsApp PDF Delivery',
    timeEstimate: 'Sub-Second Dispatch',
    problem:
      'Downloading PDFs to desktops, manually saving 30+ stranger numbers into personal phone contacts daily, and searching chat lists wastes hours every evening.',
    solution:
      'Deliver finalized, certified reports in 1 click directly to the patient’s WhatsApp number. Patients receive an authenticated PDF download with a tamper-proof public QR verification token for referring physicians.',
    highlights: [
      'Direct WhatsApp message link with personalized patient greeting',
      'Zero phone contact saving required on lab technician phone',
      'Tamper-proof public QR verification token prevents forged report disputes',
      'Drastically cuts down on patient phone calls asking "Is my report ready?"',
    ],
    icon: Send,
  },
  {
    stepNumber: '05',
    badge: 'Commercial Growth',
    title: 'Referring Doctor Revenue Ledgers & Shift Cash Reconciliation',
    timeEstimate: 'Daily Peace of Mind',
    problem:
      'Tracking doctor referral arrangements in pocket diaries causes end-of-month disputes, and cash leaks between morning and evening staff shifts.',
    solution:
      'Maintain clean, neutral records of referring doctors and clinic associations. Automatically logs referred tests and generates running revenue ledgers with 1-click settlement statements under lab owner manual control.',
    highlights: [
      'Doctor directory with clinic association and agreed referral arrangement',
      'Automated running ledger tracking tests referred and accrued balances',
      '1-click monthly settlement statement export with patient-wise audit trail',
      'Multi-counter cash drawers track shift handovers preventing pilferage',
    ],
    icon: Wallet,
  },
];

export function WorkflowSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/50">
      <Container size="narrow">
        <WorkflowHero />

        <div className="space-y-2">
          {stages.map((stage) => (
            <WorkflowStage key={stage.stepNumber} {...stage} />
          ))}
        </div>
      </Container>
    </section>
  );
}
