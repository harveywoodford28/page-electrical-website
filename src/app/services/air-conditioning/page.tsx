import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'air-conditioning')!;

export const metadata: Metadata = {
  title: 'Air Conditioning Installation in Hampshire',
  description:
    'Air conditioning supply, install, service and repair for homes and businesses across Hampshire. Daikin, Mitsubishi, Samsung — split, multi-split, cassette and ducted systems.',
};

/* TODO FROM MATT: F-Gas registration / REFCOM number — we can add the F-Gas badge
   to this page and the homepage cert strip once confirmed. Required by law for
   anyone handling refrigerant. See HTML comment below:
   <!-- F-Gas badge goes here once Matt confirms registration --> */

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="Air Conditioning"
      title="Air conditioning installation and maintenance."
      intro="Keep your home, shop or office comfortable year-round. We supply, install, service and repair air conditioning systems across Hampshire — from a single bedroom split to full multi-room, cassette and ducted systems."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        'Split, multi-split, cassette and ducted systems for homes and offices',
        'Brands we fit include Daikin, Mitsubishi and Samsung',
        /* TODO FROM MATT: Confirm F-Gas company registration (REFCOM or equivalent).
           Required by law for any refrigerant work. Once confirmed, add "F-Gas registered"
           as its own bullet and uncomment the badge in CertificationStrip. */
        'Refrigerant work handled by qualified engineers',
        'Right-sized systems — no oversell, clean cable-hidden installs',
        'Annual servicing contracts to keep units running efficiently',
      ]}
      process={[
        {
          title: 'Site visit and survey',
          body: 'We measure the space, look at where condenser units can sit, and discuss how you use the room. We recommend the right system — not the most expensive.',
        },
        {
          title: 'Quote and system spec',
          body: 'You get a clear quote covering unit, install, any electrical works and certification. No surprise extras on the invoice.',
        },
        {
          title: 'Install, commission, service plan',
          body: 'Typically one day for a single split, 2–5 days for multi-split. We test, commission, show you how to use it, and offer an annual service plan if you want one.',
        },
      ]}
      faqs={[
        {
          q: 'How much does an AC install cost?',
          a: 'Typical single split (one indoor unit, one outdoor): £1,500–£3,000 fully installed. Multi-split for 3 rooms: £3,500–£6,000. We quote after a site survey so you get an accurate number for your home.',
        },
        {
          q: 'How long does an install take?',
          a: 'A single wall-mounted split is usually a one-day install. Multi-split (3+ rooms) takes 2–5 days depending on cable runs and unit placement.',
        },
        {
          q: 'What warranty do I get?',
          a: 'One year workmanship as standard. Some manufacturer ranges (e.g. Daikin D1 Partners) offer 5-year extended warranties when fitted through accredited installers.',
        },
        {
          q: 'How often should I service my AC?',
          a: 'Annually — it is a legal requirement for commercial systems and strongly recommended for domestic. Regular servicing keeps units running efficiently, catches small issues early and extends lifespan.',
        },
        {
          q: 'How noisy are modern AC units?',
          a: 'Indoor units run 19–26dB (quieter than a whispered conversation). Outdoor condensers sit around 45–55dB — comparable to a quiet dishwasher at a few meters.',
        },
        {
          q: "Do you service AC units you didn't install?",
          a: 'Yes. We happily service and repair existing systems from any installer. Book in for a one-off service or an annual contract.',
        },
      ]}
      /* Seasonal nudge shown on the page as a closing note */
      seasonalNote="Planning AC for summer? Book your install by May to guarantee fitting before the heat peaks."
    />
  );
}

/* <!-- F-Gas badge goes here once Matt confirms registration --> */
