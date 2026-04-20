import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Building Services (M&E) in Hampshire',
  description:
    'End-to-end mechanical and electrical building services for extensions, refurbishments and light commercial fit-outs across Hampshire.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon="Home"
      eyebrow="Building Services"
      title="Complete M&E for new builds and refurbs."
      intro="End-to-end mechanical and electrical installations for extensions, refurbishments and light commercial fit-outs. Coordinated with other trades and delivered on programme."
      image="/images/service-maintenance.jpg"
      whyUs={[
        'Full first-fix and second-fix electrical',
        'AC, heating and ventilation coordination',
        'Works with your builder, architect or PM',
        'One point of contact for all M&E',
        'Priced up front with no scope creep',
      ]}
      process={[
        {
          title: 'Plans and spec review',
          body: 'We go through the drawings with you (or your builder) and flag anything that needs thinking about early.',
        },
        {
          title: 'First fix',
          body: 'Cabling, back boxes, conduits and pipework installed ready for walls and ceilings to be closed.',
        },
        {
          title: 'Second fix and commissioning',
          body: 'Fittings, sockets, switches, AC units and final testing. Everything tested, certified and signed off.',
        },
      ]}
      faqs={[
        {
          q: 'Do you work directly for homeowners or through builders?',
          a: 'Both. We work directly for homeowners running their own projects and as a subcontractor for builders, architects and project managers.',
        },
        {
          q: 'Can you price off drawings?',
          a: 'Yes. Share your plans and scope and we will come back with a clear quote and programme.',
        },
        {
          q: 'Do you cover heating and AC in a single package?',
          a: 'Yes — we can package electrical and AC together so you\'ve got one team and one point of contact.',
        },
      ]}
    />
  );
}
