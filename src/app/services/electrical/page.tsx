import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'electrical')!;

export const metadata: Metadata = {
  title: 'Electrical Installations, Rewires & EICR in Hampshire',
  description:
    'Full electrical installations, rewires, fuse box upgrades, EICR testing and emergency repairs across Hampshire. Domestic, commercial and industrial — BS 7671 compliant.',
};

/* TODO FROM MATT: Part P registration, 18th Edition Amendment 2 qualification,
   and NICEIC Approved Contractor / Domestic Installer status. Each unlocks a
   badge on this page and the homepage cert strip. HTML comment placeholders:
   <!-- Part P Registered badge goes here once Matt confirms -->
   <!-- 18th Edition Amendment 2 Qualified badge goes here once Matt confirms -->
   <!-- NICEIC Approved Contractor / Domestic Installer badge goes here once Matt confirms --> */

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="Electrical"
      title="Electrical installations, repairs and rewires."
      intro="Domestic, commercial and industrial electrical work across Hampshire. From a faulty socket to a full rewire — tested, certified and signed off to BS 7671."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        'Full rewires, fuse box (consumer unit) upgrades and new installations',
        'EICR testing and remedial work for landlords and homeowners',
        'Emergency repairs and fault finding across Hampshire',
        'Commercial installations — shops, offices, light industrial',
        /* TODO FROM MATT: Confirm NICEIC / Part P / 18th Edition status.
           All three are "must-have" trust signals — loud claims once confirmed. */
        'All work to BS 7671 / 18th Edition — tested and certified',
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
          body: 'All work is tested to BS 7671 and you receive the relevant electrical installation certificate. Notifiable work is registered on your behalf.',
        },
      ]}
      faqs={[
        {
          q: 'How long does a full rewire take?',
          a: 'A typical 3-bed house rewire takes 3–5 working days depending on access and how much of the existing wiring can be reused. We agree a clear timeline up front.',
        },
        {
          q: 'How much does an EICR cost and how often do I need one?',
          a: 'Expect £150–£300 for a typical domestic EICR, more for larger properties. Landlords must have one every 5 years (or at change of tenancy); homeowners should have one every 10 years or before selling.',
        },
        {
          q: 'Do I need to rewire before selling my house?',
          a: 'Not always — an EICR tells you whether the existing wiring is safe and compliant. Partial rewires are often enough if the main issues are concentrated (e.g. old consumer unit, unearthed circuits).',
        },
        {
          q: 'Do you do emergency fault finding?',
          a: 'Yes. Call 023 9359 3998 and we will get someone to you as fast as possible — most call-outs across Hampshire are same-day or next morning.',
        },
        {
          q: 'Do I need to upgrade my consumer unit (fuse box)?',
          a: 'If your current unit has rewireable fuses, no RCD protection, or is showing signs of heat/damage — yes. Modern units with RCBOs are safer and required for most new circuits.',
        },
        {
          q: 'Will my work be signed off and certified?',
          a: 'Yes. All notifiable work is certified and registered with Building Control. You get the paperwork you need for insurance, compliance and future property sales.',
        },
      ]}
    />
  );
}

/*
  <!-- Part P Registered badge goes here once Matt confirms -->
  <!-- 18th Edition Amendment 2 Qualified badge goes here once Matt confirms -->
  <!-- NICEIC Approved Contractor / Domestic Installer badge goes here once Matt confirms -->
*/
