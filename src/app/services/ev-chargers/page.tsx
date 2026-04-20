import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'ev-chargers')!;

export const metadata: Metadata = {
  title: 'EV Charger Installation in Hampshire',
  description:
    'EV charge point installation for homes, flats, landlords and workplaces across Hampshire. Pod Point, Ohme, Zappi, EO, Wallbox — tidy cabling, half-day installs.',
};

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="EV Chargers"
      title="EV charge point installation — home and workplace."
      intro="EV charger installation for homes, flats, landlords and workplaces across Hampshire. Tidy cabling, half-day installs, and clear advice on the right charger for your car and usage."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        /* TODO FROM MATT: Confirm OZEV installer register status. If confirmed, the bullet
           below is accurate; if not, soften to "electrical specialists partnering with
           OZEV-approved installers for grant-eligible work". */
        'OZEV-approved installations for homes, flats and workplaces',
        'Installs for Pod Point, Ohme, Zappi, EO, Wallbox and Rolec',
        '3kW / 7kW / 22kW options — advice on the right speed for you',
        'Load balancing and fuse board upgrades where needed',
        'Hidden cable runs, tested, certified and DNO-notified',
      ]}
      process={[
        {
          title: 'Quick phone survey',
          body: 'A five-minute call to understand your car, parking, where the charger needs to live, and the route to your consumer unit. We flag anything unusual up front.',
        },
        {
          title: 'Quote + grant check',
          body: 'You get a clear, fixed-price quote — including any board upgrade or load balancing. We check whether the £500 OZEV grant applies to your situation and handle the paperwork if so.',
        },
        {
          title: 'Install, test, certify',
          body: 'Typically half a day for a standard home install. We test, certify, notify the DNO where required, and register the install.',
        },
      ]}
      faqs={[
        {
          q: 'Am I eligible for the £500 OZEV grant in 2026?',
          a: 'Recent changes to the OZEV grant mean it now targets flats, renters, landlords and businesses — from April 2026 it is no longer available to homeowners with driveways. Get in touch and we will explain whether you qualify and process the paperwork on your behalf if so.',
        },
        {
          q: 'What charger brands do you install?',
          a: 'We install Pod Point, Ohme, Zappi (Myenergi), EO, Wallbox, Rolec and others. If you already have a preference we will fit it; if not we will recommend the right unit for your car and how you use it.',
        },
        {
          q: 'What speed charger do I need — 3kW, 7kW or 22kW?',
          a: '7kW is the standard for home installs and adds ~25 miles of range per hour — plenty for overnight charging. 22kW needs a three-phase supply (rare in homes, common in commercial premises). 3kW units are slow and usually avoided.',
        },
        {
          q: 'How long does a home install take?',
          a: 'Most home EV installs are done in half a day. We tidy up, commission the unit, run you through how to use it, and leave paperwork before we go.',
        },
        {
          q: 'Do I need a fuse board upgrade for an EV charger?',
          a: 'Sometimes — it depends on your existing board, the house load and cable run. We will check on the phone survey and tell you before you commit.',
        },
        {
          q: 'Will my charger work with solar panels?',
          a: 'Yes. A Zappi (Myenergi) can be set to only use solar excess — cutting your EV charging cost to near-zero when the sun is out. We can also integrate with Octopus Go, Intelligent Octopus and similar smart tariffs.',
        },
        {
          q: 'Do you install workplace chargers?',
          a: 'Yes — single or multiple units, with load balancing and tariff setup where needed. Workplaces may qualify for the Workplace Charging Scheme (up to £350/socket, up to 40 sockets) which we can advise on.',
        },
      ]}
    />
  );
}
