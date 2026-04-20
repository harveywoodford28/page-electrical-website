import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://page-electrical.co.uk'),
  title: {
    default: 'Page Electrical — Reliable Electrical Services in Hampshire',
    template: '%s | Page Electrical',
  },
  description: siteConfig.description,
  icons: {
    icon: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
  openGraph: {
    title: 'Page Electrical — Reliable Electrical Services in Hampshire',
    description: siteConfig.description,
    type: 'website',
    locale: 'en_GB',
    siteName: siteConfig.fullName,
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Page Electrical Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Electrical — Reliable Electrical Services in Hampshire',
    description: siteConfig.description,
    images: ['/brand/logo.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
