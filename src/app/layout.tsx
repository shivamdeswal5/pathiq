import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { config } from '@/lib/config';

const SITE_URL = config.siteUrl;

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: "Pathiq — Operating System for India's Standalone Pathology Labs",
  description:
    "Say goodbye to paper registers and manual WhatsApp typing. Automated 50×25mm thermal barcode stickers, zero-drift offset letterhead alignment, 1-click WhatsApp PDF delivery, and doctor referral ledgers.",
  keywords: [
    'pathology lab software',
    'diagnostic lab management system',
    'LIMS India',
    'thermal barcode printer 50x25mm',
    'letterhead alignment software',
    'whatsapp lab report delivery',
    'DMLT lab management software',
    'pathology billing software India',
    'NABL ISO 15189 lab software',
  ],
  authors: [{ name: 'Pathiq Health Technologies' }],
  creator: 'Pathiq',
  publisher: 'Pathiq',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: "Pathiq — Operating System for India's Standalone Pathology Labs",
    description:
      'Run your diagnostic lab with zero paper & absolute precision. 50×25mm thermal barcodes, pre-printed letterhead engine, and 1-click WhatsApp delivery.',
    siteName: 'Pathiq',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pathiq Diagnostic Laboratory Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pathiq — Operating System for India's Standalone Pathology Labs",
    description:
      'Eliminate mislabeled samples and manual registers. Automated thermal barcodes, letterheads, and WhatsApp reports.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pathiq LabOS',
  applicationCategory: 'HealthCareApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '499',
    highPrice: '1999',
    offerCount: '3',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '128',
  },
  description:
    'Dedicated diagnostic laboratory operating system built for India standalone pathology centers doing 10-50 samples per day.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 antialiased selection:bg-teal-600 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
