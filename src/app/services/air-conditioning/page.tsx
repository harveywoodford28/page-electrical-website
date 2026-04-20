import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Air Conditioning Installation in Hampshire',
  description:
    'Air conditioning supply, install, service and repair for homes and businesses across Hampshire. Split and multi-split systems.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon="Snowflake"
      eyebrow="Air Conditioning"
      title="Air conditioning installation and maintenance."
      intro="Keep your home, shop or office comfortable year-round. We supply, install, service and repair split and multi-split AC systems across Hampshire."
      image="/images/service-repairs.jpg"
      whyUs={[
        'Domestic and commercial installs',
        'Right-sized systems — no oversell',
        'Servicing and repairs for existing units',
        'Clean, cable-hidden installs',
        'Honest advice on running costs',
      ]}
      process={[
        {
          title: 'Site visit and survey',
          body: 'We measure the space, discuss how you use it, and recommend the right system — not the most expensive one.',
        },
        {
          title: 'Quote and spec',
          body: 'You get a clear quote covering unit, install and any additional works. No surprise extras on the invoice.',
        },
        {
          title: 'Install and commission',
          body: 'Usually a one- or two-day install depending on complexity. We test, commission and show you how to use it.',
        },
      ]}
      faqs={[
        {
          q: 'Can I get AC fitted in an older house?',
          a: 'Usually yes. We work around existing structures to keep install mess to a minimum and hide cabling where we can.',
        },
        {
          q: 'Do you service AC units you didn\'t install?',
          a: 'Yes. We happily service and repair existing systems from any installer.',
        },
        {
          q: 'How often should I service my AC?',
          a: 'Annual servicing keeps units running efficiently, extends lifespan and catches small issues before they become big ones.',
        },
      ]}
    />
  );
}
