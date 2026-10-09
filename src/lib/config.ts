export const config = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  adminUrl: process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3001',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pathiq.in',
} as const;
