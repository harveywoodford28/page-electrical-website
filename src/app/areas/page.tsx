import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import HampshireCoverageMap from '@/components/HampshireCoverageMap';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Areas We Serve — Hampshire Electricians | Page Electrical',
  description:
    'Areas we serve across Hampshire — Gosport, Portsmouth, Fareham, Southampton and the wider Solent. 30+ years of electrical work across the region.',
  alternates: { canonical: '/areas' },
};

const areas = [
  {
    slug: 'gosport',
    name: 'Gosport',
    blurb: 'Our home base. 30+ years of electrical work on the Gosport peninsula.',
    image: '/images/hero-1.jpg',
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    blurb: 'Rewires, EV chargers and commercial M&E across Portsea Island and Southsea.',
    image: '/images/hero-2.jpg',
  },
  {
    slug: 'fareham',
    name: 'Fareham',
    blurb: 'AC, EV, rewires and extension M&E across Fareham, Stubbington and Locks Heath.',
    image: '/images/service-installations.jpg',
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    blurb: 'Commercial electrical, rewires and EICRs across the SO postcodes.',
    image: '/images/service-maintenance.jpg',
  },
];

export default function AreasIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white min-h-[50vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src="/images/about-hero.jpg"
              alt="Areas we serve across Hampshire"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className="absolute inset-0 hero-overlay" />
          <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        </div>
        <div className="container-x relative pt-40 pb-16 lg:pt-48 lg:pb-20 max-w-3xl">
          <Reveal>
            <p className="eyebrow !text-brand-light mb-6">Coverage</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Areas we serve across Hampshire.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              We cover Gosport, Portsmouth, Fareham, Southampton and the wider Solent.
              For larger jobs we travel further — just ask.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid of area cards */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link
                href={`/areas/${a.slug}`}
                className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={a.image}
                    alt={`Electrician in ${a.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-brand text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 shadow">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {a.name}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      Electrician in {a.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/85 max-w-md">{a.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-light">
                      Explore {a.name} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Full coverage</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
              Hampshire &amp; the Solent.
            </h2>
          </Reveal>
          <HampshireCoverageMap />
        </div>
      </section>

      <CTABand />
    </>
  );
}
