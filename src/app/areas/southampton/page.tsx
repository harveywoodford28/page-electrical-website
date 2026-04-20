import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electrician in Southampton | Page Electrical',
  description:
    'Experienced electricians in Southampton, Hampshire. 30+ years on full rewires, commercial M&E, EV chargers and AC across SO postcodes.',
  alternates: { canonical: '/areas/southampton' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Page Electrical — Southampton',
  image: 'https://page-electrical.co.uk/images/hero-1.jpg',
  url: 'https://page-electrical.co.uk/areas/southampton',
  telephone: '+442393593998',
  areaServed: ['Southampton', 'Woolston', 'Bitterne', 'Shirley'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Southampton',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
};

export default function Page() {
  const localReviews = [reviews[2], reviews[5], reviews[9]].map((r) => ({
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
        town="Southampton"
        heroImage="/images/service-maintenance.jpg"
        bullets={[
          'Covering Southampton, Woolston, Bitterne, Shirley and the wider SO postcodes',
          'Commercial electrical for Southampton offices, retail units and warehouses',
          'Full rewires, consumer unit upgrades and EICR certification',
          'Travel a little further for Southampton — for larger jobs we are there the next day',
        ]}
        reviews={localReviews}
        servingSince="2000"
      />
    </>
  );
}
