import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electrician in Portsmouth | Page Electrical',
  description:
    'Reliable electricians in Portsmouth, Hampshire. 30+ years on rewires, EV chargers, AC, solar and commercial M&E across Portsea Island, Southsea and Cosham.',
  alternates: { canonical: '/areas/portsmouth' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Page Electrical — Portsmouth',
  image: 'https://page-electrical.co.uk/images/hero-1.jpg',
  url: 'https://page-electrical.co.uk/areas/portsmouth',
  telephone: '+442393593998',
  areaServed: ['Portsmouth', 'Southsea', 'Cosham', 'Portsea'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Portsmouth',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
};

export default function Page() {
  const localReviews = [reviews[1], reviews[10], reviews[6]].map((r) => ({
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
        town="Portsmouth"
        heroImage="/images/hero-2.jpg"
        bullets={[
          'Covering Portsea Island, Southsea, Cosham and the wider PO postcodes',
          'Commercial electrical for Portsmouth shops, offices and light industrial units',
          'Rewires, EICRs and landlord compliance across Portsmouth rentals',
          'Short-notice fault finding and emergency repairs across the city',
        ]}
        reviews={localReviews}
        servingSince="2000"
      />
    </>
  );
}
