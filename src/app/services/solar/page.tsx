import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Solar Panel & Battery Installation in Hampshire',
  description:
    'Solar PV and battery storage installation for homes and businesses across Hampshire. Cut your energy bills and take control of rising costs.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon="Sun"
      eyebrow="Solar & Battery"
      title="Solar PV and battery storage, installed properly."
      intro="We design, supply and install solar PV and battery storage for homes and businesses across Hampshire. Cut your energy bills and take back control of rising costs."
      image="/images/hero-1.jpg"
      whyUs={[
        'Bespoke system design for your roof and usage',
        'Battery storage to get the most out of your panels',
        'Grid-tie with clear MCS paperwork',
        'Honest advice on payback — no inflated promises',
        'Fully electrical-led installs, not third-party',
      ]}
      process={[
        {
          title: 'Site and energy review',
          body: 'We look at your roof, shading and energy bills to understand what size system makes sense for you.',
        },
        {
          title: 'Design and quote',
          body: 'You get a clear system design, realistic generation estimate and itemised quote — including battery and grid-tie.',
        },
        {
          title: 'Install and commission',
          body: 'A typical domestic install is 1–2 days. We handle MCS paperwork and hand you the full documentation pack.',
        },
      ]}
      faqs={[
        {
          q: 'How long until a solar install pays for itself?',
          a: 'It depends on system size, your usage pattern and battery spec. We will give you a realistic estimate before you commit.',
        },
        {
          q: 'Do I need a battery?',
          a: 'Not always — it depends on when you use electricity. We\'ll explain the trade-off clearly so you can make the call.',
        },
        {
          q: 'Do you install for commercial properties?',
          a: 'Yes. We cover offices, workshops and light industrial units — battery storage can make a big difference on commercial tariffs.',
        },
      ]}
    />
  );
}
