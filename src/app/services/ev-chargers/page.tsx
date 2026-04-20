import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'EV Charger Installation in Hampshire',
  description:
    'OZEV-approved EV charge point installation for homes and workplaces across Hampshire. Tidy cabling, fast turnaround, clear advice.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon="Plug"
      eyebrow="EV Chargers"
      title="EV charge point installation — home and workplace."
      intro="OZEV-approved EV charger installation for homes and workplaces across Hampshire. Tidy cabling, fast turnaround, and clear advice on the right charger for your car and usage."
      image="/images/hero-2.jpg"
      whyUs={[
        'OZEV-approved installer',
        'Single and multi-vehicle setups',
        'Load-balancing on fuse board upgrades',
        'Hidden cable runs where possible',
        'Works with all major charger brands',
      ]}
      process={[
        {
          title: 'Quick phone survey',
          body: 'A five-minute call to understand your car, parking, and where the charger needs to live. We flag anything unusual up front.',
        },
        {
          title: 'Quote',
          body: 'You get a clear, fixed-price quote — including any board upgrade or load balancing needed.',
        },
        {
          title: 'Install, test, certify',
          body: 'Most home installs are completed in a single half-day. Tested, certified and registered.',
        },
      ]}
      faqs={[
        {
          q: 'Do I need a fuse board upgrade for an EV charger?',
          a: 'Sometimes — it depends on your existing board and load. We\'ll check and tell you before you commit.',
        },
        {
          q: 'How long does a home install take?',
          a: 'Most home EV installs are done in half a day. We\'ll tidy up and run you through how it works before we leave.',
        },
        {
          q: 'Do you install workplace chargers?',
          a: 'Yes. Single or multiple units, with load balancing and back-office tariff setup where needed.',
        },
      ]}
    />
  );
}
