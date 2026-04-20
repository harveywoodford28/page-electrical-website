import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/data';

const svc = services.find((s) => s.slug === 'solar')!;

export const metadata: Metadata = {
  title: 'Solar Panel & Battery Installation in Hampshire',
  description:
    'Solar PV and battery storage installation for homes and businesses across Hampshire — electrical integration by Page Electrical with fully MCS-certified installation partners.',
};

/* TODO FROM MATT: MCS status — this page is currently worded as an electrician-led
   partnership with an MCS-certified installer (safe legal framing). If Matt is
   DIRECTLY MCS-certified + RECC/HIES, we can revert to "we are MCS certified" copy
   and add the MCS badge to the hero. See HTML comment below:
   <!-- MCS badge goes here if Matt confirms direct MCS registration — otherwise show partner MCS badge --> */

export default function Page() {
  return (
    <ServiceDetail
      icon={svc.icon}
      eyebrow="Solar & Battery"
      title="Solar PV and battery storage, installed properly."
      intro="Solar installation specialists working alongside fully MCS-certified installation partners — we handle the electrical integration, grid-tie and battery setup, and our MCS partner handles the panel installation and SEG paperwork so you get full export-tariff eligibility."
      image={svc.image}
      gallery={svc.gallery}
      whyUs={[
        'Electrician-led solar — the wiring, inverter and battery work is ours',
        'MCS-certified installation partner handles panels + SEG paperwork',
        'Bespoke system design for your roof, shading and usage',
        'Panel brands include SunPower, JA Solar and Longi',
        'Battery options: Tesla Powerwall, GivEnergy and SolarEdge',
        'Honest payback advice — no inflated promises',
      ]}
      process={[
        {
          title: 'Site and energy review',
          body: 'We look at your roof, shading and energy bills to understand what size system actually makes sense. Our MCS partner joins the site survey so the design and certification track together.',
        },
        {
          title: 'Design, quote, MCS paperwork',
          body: 'You get one clear quote covering panels, inverter, battery, grid-tie and install. Our MCS partner handles MCS certification and SEG registration so you qualify for the export tariff.',
        },
        {
          title: 'Install and commission',
          body: 'A typical domestic install is 1–2 days. We handle the electrical side — grid-tie, inverter and battery — and our partner handles the roof install and hands you the full MCS documentation pack.',
        },
      ]}
      faqs={[
        {
          q: 'Is the installation MCS certified — and can I claim SEG?',
          a: 'Yes. We work alongside fully MCS-certified installation partners so every system we deliver comes with MCS paperwork and SEG (Smart Export Guarantee) registration — that is the tariff that pays you for electricity you export to the grid.',
        },
        {
          q: 'Is there still 0% VAT on solar?',
          a: 'Yes — 0% VAT on solar panel installs is active until 31 March 2027. That saves around £2,850 on a typical install. Our quote reflects this automatically.',
        },
        {
          q: 'How much can I realistically save?',
          a: 'A typical Hampshire home with a 4–6kW system saves £700–£1,200 a year on energy bills, plus SEG export income. Payback usually sits between 6 and 10 years, with 25+ years of generation after that.',
        },
        {
          q: 'Do I need a battery?',
          a: "Not always — it depends on when you use electricity. If you are out during the day, a battery stores solar for evening use and dramatically improves payback. We'll explain the trade-off clearly so you can make the call.",
        },
        {
          q: 'What about winter and cloudy days?',
          a: 'Panels still generate in diffuse light — typically around 60% output on a fully overcast day. Winter output is lower than summer but yearly totals are calculated off UK average insolation, not best-case days.',
        },
        {
          q: 'Do I need planning permission?',
          a: 'Usually no — solar is permitted development for most homes. Listed buildings and conservation areas have different rules which we flag at survey.',
        },
        {
          q: 'Do you install for commercial properties?',
          a: 'Yes. Offices, workshops and light industrial units work particularly well — battery storage makes a big difference on commercial tariffs.',
        },
      ]}
    />
  );
}

/* <!-- MCS badge goes here if Matt confirms direct MCS registration — otherwise show partner MCS badge --> */
