'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { config } from '@/lib/config';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Diagnostic Workflow', href: '/workflow' },
    { label: 'Transparent Pricing', href: '/pricing' },
    { label: 'Contact & Demo', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-header border-b border-slate-200 bg-white/95 transition-all">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 p-1 flex items-center justify-center group-hover:border-teal-400 transition-colors">
              <Image
                src="/logo.svg"
                alt="Pathiq Logo"
                width={26}
                height={26}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                Pathiq
              </span>
              <span className="text-[10px] text-teal-600 font-mono tracking-wider -mt-1 font-semibold uppercase">
                Diagnostic OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors py-1 hover:text-teal-700 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20run%20a%20pathology%20lab%20and%20want%20to%20learn%20more%20about%20Pathiq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all"
            >
              <WhatsAppIcon size={14} className="text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`${config.appUrl}/login`}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Sign In
            </a>

            <a
              href={`${config.appUrl}/signup`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition-all hover:scale-102"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>14-Day Free Trial</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 space-y-3 animate-in fade-in duration-150">
            <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-md hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20run%20a%20pathology%20lab%20and%20want%20to%20learn%20more%20about%20Pathiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
              >
                <WhatsAppIcon size={14} className="text-[#25D366]" />
                <span>Chat on WhatsApp (+91)</span>
              </a>
              <a
                href={`${config.appUrl}/login`}
                className="text-center py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
              >
                Sign In to LabOS
              </a>
              <a
                href={`${config.appUrl}/signup`}
                className="text-center py-2.5 text-xs font-bold text-white bg-teal-600 rounded-lg shadow-xs"
              >
                Start 14-Day Free Trial
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
