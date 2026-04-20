import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'electrical')!;

export const metadata: Metadata = {
  title: 'Electrical Installations & Repairs in Hampshire',
  description:
    'Full electrical installations, rewires, fuse board upgrades, fault-finding and certification across Hampshire. Domestic, commercial and industrial.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="Electrical"
      title="Electrical installations, repairs and rewires."
      intro="Domestic, commercial and industrial electrical work. From a faulty socket to a full rewire — tested, certified and signed off properly."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        'Fully certified electricians working to BS 7671',
        'Tidy workmanship — minimal plaster damage, cleaned after',
        '30+ years of Hampshire experience',
        'Clear fixed-price quotes before we start',
        'Notifiable work registered and certified',
      ]}
      process={[
        {
          title: 'Quote and survey',
          body: 'We visit, understand the job and give you a clear, itemised quote. No obligation, no pressure.',
        },
        {
          title: 'Schedule and deliver',
          body: 'We agree a start date and arrive when we say we will. Jobs are planned so your home or business runs as normally as possible.',
        },
        {
          title: 'Test, certify, sign off',
          body: 'All work is tested and you receive the relevant electrical installation certificate. Notifiable work is registered on your behalf.',
        },
      ]}
      faqs={[
        {
          q: 'How long does a full rewire take?',
          a: 'A typical 3-bed house rewire takes 3–5 working days depending on access and how much of the existing wiring can be reused.',
        },
        {
          q: 'Do you do emergency fault finding?',
          a: 'Yes. Call 023 9359 3998 and we will get someone to you as fast as possible.',
        },
        {
          q: 'Will my work be signed off?',
          a: 'Yes. All notifiable work is certified and registered. You get the paperwork you need for insurance and future property sales.',
        },
      ]}
    />
  );
}
