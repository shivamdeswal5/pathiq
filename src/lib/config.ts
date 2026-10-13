const appUrl = process.env.NEXT_PUBLIC_APP_URL || '';
const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

if (!appUrl && typeof window !== 'undefined') {
  console.error('CRITICAL: NEXT_PUBLIC_APP_URL environment variable is not defined.');
}

if (!siteUrl && typeof window !== 'undefined') {
  console.error('CRITICAL: NEXT_PUBLIC_SITE_URL environment variable is not defined.');
}

export const config = {
  appUrl: appUrl.replace(/\/$/, ''),
  adminUrl: adminUrl.replace(/\/$/, ''),
  siteUrl: siteUrl.replace(/\/$/, ''),
  whatsappNumber,
  getWhatsAppUrl: (message: string) => {
    const phone = whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  },
} as const;

