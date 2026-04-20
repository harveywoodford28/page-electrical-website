import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electrician in Gosport | Page Electrical',
  description:
    'Trusted electricians in Gosport, Hampshire. 30+ years serving the Gosport peninsula — rewires, EV chargers, AC, solar and building M&E. Honest quotes, tidy work.',
  alternates: { canonical: '/areas/gosport' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Page Electrical — Gosport',
  image: 'https://page-electrical.co.uk/images/hero-1.jpg',
  url: 'https://page-electrical.co.uk/areas/gosport',
  telephone: '+442393593998',
  areaServed: ['Gosport', 'Lee-on-Solent', 'Stubbington', 'Alverstoke'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gosport',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
};

export default function Page() {
  // Use 2-3 reviews that sound most local / community
  const localReviews = [reviews[3], reviews[11], reviews[7]].map((r) => ({
    quote: r.quote,
    context: r.context,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AreaPage
        town="Gosport"
        heroImage="/images/hero-1.jpg"
        bullets={[
          'Based locally — we know the housing stock on the Gosport peninsula inside out',
          'Same-day or next-morning callbacks across Gosport, Lee-on-Solent and Stubbington',
          '30+ years working on Gosport rewires, EV chargers, AC and commercial fit-outs',
          'Honest, itemised quotes — no upsells, no surprise extras',
        ]}
        reviews={localReviews}
        servingSince="2000"
      />
    </>
  );
}
