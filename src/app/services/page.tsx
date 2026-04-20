import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="relative isolate overflow-hidden text-white min-h-[55vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src="/images/service-installations.jpg"
              alt="Page Electrical services"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className="absolute inset-0 hero-overlay" />
          <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        </div>
        <div className="container-x relative pt-40 pb-16 lg:pt-48 lg:pb-20 max-w-3xl w-full">
          <Reveal>
            <p className="eyebrow !text-brand-light mb-6">Services</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Everything electrical — plus the things that plug into it.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              From a single repair to a full commercial M&amp;E package, we&apos;ve got Hampshire
              covered. Pick a service below to see what we do and how we do it.
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
