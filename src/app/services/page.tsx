import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Electrical Services in Hampshire — Page Electrical',
  description:
    'Full list of Page Electrical services — electrical installations, air conditioning, building services, solar and battery, and EV chargers across Hampshire.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow !text-accent mb-6">Services</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Everything electrical — plus the things that plug into it.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              From a single repair to a full commercial M&amp;E package,
              we&apos;ve got Hampshire covered. Pick a service below to see
              what we do and how we do it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} {...s} index={i} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
