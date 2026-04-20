import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'building')!;

export const metadata: Metadata = {
  title: 'Building Services (M&E) in Hampshire',
  description:
    'End-to-end mechanical and electrical building services for kitchens, bathrooms, extensions, loft conversions and renovations across Hampshire.',
};

/* TODO FROM MATT: FMB (Federation of Master Builders) + TrustMark membership.
   If Matt is a member of either, we surface both badges on this page and the
   homepage cert strip. HTML comment placeholders:
   <!-- FMB Member badge goes here once Matt confirms -->
   <!-- TrustMark Registered badge goes here once Matt confirms --> */

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="Building Services"
      title="Building work and M&E delivered under one roof."
      intro="Kitchens, bathrooms, extensions, loft conversions and full renovations — coordinated with our electrical and AC work so you get one team, one point of contact, and joined-up mechanical and electrical delivery."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        'Kitchens, bathrooms, extensions, loft conversions and renovations',
        'Full M&E package — first fix, second fix, AC and ventilation',
        'Coordinated with your architect, builder or PM',
        'Planning and building regs handled — no stress for you',
        'Typical projects £5k–£50k+ — priced clearly up front',
        /* TODO FROM MATT: Confirm FMB / TrustMark membership. If either is held,
           add a bullet here ("FMB Member — Building Work Guarantee") and uncomment
           the badge in CertificationStrip. */
        'Notifiable electrical work certified and registered via NICEIC',
      ]}
      process={[
        {
          title: 'Plans, scope and planning',
          body: 'We go through your drawings (or brief) and flag anything that needs thinking about early — planning permission, building regs, structural sign-off, sequencing with other trades.',
        },
        {
          title: 'First fix',
          body: 'Cabling, back boxes, conduits, pipework and AC infrastructure installed ready for walls and ceilings to be closed. Everything staged to run smoothly with the rest of the build.',
        },
        {
          title: 'Second fix and sign-off',
          body: 'Fittings, sockets, switches, AC units and final testing. Notifiable electrical work is certified and registered, and you get the paperwork pack on handover.',
        },
      ]}
      faqs={[
        {
          q: 'What size projects do you take on?',
          a: 'Most projects sit between £5k (small refurb M&E) and £50k+ (full extensions and commercial fit-outs). Happy to quote smaller jobs too if they fit round the bigger work.',
        },
        {
          q: 'What is the typical timeline for an extension or loft?',
          a: 'First fix on a domestic extension typically runs 2–5 days, second fix 2–3 days. Most full builds take 8–16 weeks depending on scope — we agree a programme up front and stick to it.',
        },
        {
          q: 'Do you help with planning permission and building regs?',
          a: 'Yes — we coordinate with your architect on planning, and notifiable electrical work is self-certified via NICEIC. Building control sign-off is built into the process.',
        },
        {
          q: 'Do you handle design or do I need an architect first?',
          a: 'For straightforward refurbs we can work off rough drawings. For extensions, loft conversions and anything structural, an architect or designer is usually needed — happy to recommend ones we work well with.',
        },
        {
          q: 'Do you work directly for homeowners or through builders?',
          a: 'Both. We work directly for homeowners running their own projects and as the M&E package within a wider build led by a builder, architect or PM.',
        },
        {
          q: 'Do you pay in stages?',
          a: 'Yes — payments are broken down by project stage (first fix, second fix, commissioning) so you are never paying ahead of work completed.',
        },
      ]}
    />
  );
}

/*
  <!-- FMB Member badge goes here once Matt confirms -->
  <!-- TrustMark Registered badge goes here once Matt confirms -->
*/
