import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electrician in Fareham | Page Electrical',
  description:
    'Trusted electricians in Fareham, Hampshire. 30+ years on full rewires, EV chargers, AC, solar and building M&E across Fareham, Stubbington and Titchfield.',
  alternates: { canonical: '/areas/fareham' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Page Electrical — Fareham',
  image: 'https://page-electrical.co.uk/images/hero-1.jpg',
  url: 'https://page-electrical.co.uk/areas/fareham',
  telephone: '+442393593998',
  areaServed: ['Fareham', 'Stubbington', 'Titchfield', 'Locks Heath'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fareham',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
};

export default function Page() {
  const localReviews = [reviews[0], reviews[4], reviews[8]].map((r) => ({
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
        town="Fareham"
        heroImage="/images/service-installations.jpg"
        bullets={[
          'Covering Fareham, Stubbington, Titchfield, Locks Heath and Whiteley',
          'Domestic AC and EV charger installs — the fastest-growing services in Fareham',
          'Rewires, fuse board upgrades and EICR testing on older Fareham housing stock',
          'Extensions and refurb M&E delivered alongside local Fareham builders',
        ]}
        reviews={localReviews}
        servingSince="2000"
      />
    </>
  );
}
