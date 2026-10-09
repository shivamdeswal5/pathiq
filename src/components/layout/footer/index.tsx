'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { config } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-100 border border-teal-200 p-1 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Pathiq Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">Pathiq</span>
            </Link>

            <p className="text-slate-600 leading-relaxed max-w-sm">
              The operating system purpose-built for India&apos;s independent pathology labs. Eliminating paper registers, mislabeled vacutainers, and manual WhatsApp messaging.
            </p>

            <div className="flex items-center gap-2 text-teal-800 text-[11px] font-mono">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>NABL ISO 15189 &amp; NMC Regulatory Aligned</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-700 transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/workflow" className="hover:text-teal-700 transition-colors">
                  5-Min Clinical Workflow
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal-700 transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-700 transition-colors">
                  Contact &amp; Custom Setup
                </Link>
              </li>
              <li>
                <a href={`${config.appUrl}/login`} className="hover:text-teal-700 transition-colors">
                  Diagnostic Lab Sign In
                </a>
              </li>
              <li>
                <a href={`${config.appUrl}/signup`} className="hover:text-teal-700 transition-colors">
                  Start 14-Day Free Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Regulatory Compliance (Razorpay Mandate) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-teal-700 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-700 transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-teal-700 transition-colors">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-700 transition-colors">
                  Grievance &amp; Support Officer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Pathiq Health Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for India&apos;s pathology community</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
