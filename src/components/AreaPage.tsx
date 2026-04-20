import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import ServiceCard from './ServiceCard';
import CTABand from './CTABand';
import CertificationStrip from './CertificationStrip';
import { services, siteConfig } from '@/lib/data';

type TownReview = {
  quote: string;
  context: string;
};

type Props = {
  town: string;
  heroImage?: string;
  bullets: string[];
  reviews: TownReview[];
  /** Shown in "serving since X" line — defaults to 2000 placeholder */
  servingSince?: string;
};

/**
 * Shared template for per-town SEO landing pages.
 *
 * TODO FROM MATT: Confirm the year Page Electrical started serving this area
 * (currently shown as "2000" placeholder on each area page).
 */
export default function AreaPage({
  town,
  heroImage = '/images/hero-2.jpg',
  bullets,
  reviews,
  servingSince = '2000',
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white min-h-[60vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src={heroImage}
              alt={`Electrician in ${town}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className="absolute inset-0 hero-overlay" />
          <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        </div>
        <div className="container-x relative pt-40 pb-16 lg:pt-48 lg:pb-20 w-full">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow !text-brand-light mb-6">Service area · {town}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                Trusted electricians in {town}.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                Hampshire-based, family-run, with over 30 years of electrical experience
                across {town} and the wider Solent. Honest quotes, tidy work, certified.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Quote <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <a href={siteConfig.phoneHref} className="btn-secondary">
                  <Phone className="h-4 w-4" strokeWidth={2.5} /> {siteConfig.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CertificationStrip />

      {/* Why [Town] */}
      <section className="container-x py-20 md:py-24 grid gap-12 lg:grid-cols-12 items-start">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-3">Why {town}</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
            Why {town} residents choose Page Electrical.
          </h2>
          <p className="mt-8 text-lg text-muted leading-relaxed max-w-prose">
            We have been serving {town} and the wider Hampshire area since {servingSince}.
            {' '}
            {/* TODO FROM MATT: Confirm actual year Page Electrical started serving this area. */}
            Here is what {town} customers tell us they value most.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-ink/5 shadow-sm p-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <span className="text-sm text-ink/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services in town */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Services in {town}</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
              Five services across {town} and Hampshire.
            </h2>
            <p className="mt-8 text-muted leading-relaxed">
              From a single socket to a full rewire, EV charger, AC unit or extension M&amp;E —
              we cover the lot across {town}.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Local trust */}
      <section className="container-x py-20 md:py-24 grid gap-12 lg:grid-cols-12 items-center">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-3">Local since {servingSince}</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
            Proudly serving {town} since {servingSince}.
          </h2>
          <p className="mt-8 text-muted leading-relaxed max-w-prose">
            Most of our {town} work comes from word of mouth — somebody we did a job for five
            years ago ringing up for their neighbour. That tells us we&apos;re doing something right.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand-dark text-sm font-semibold px-4 py-2">
            <MapPin className="h-4 w-4" strokeWidth={2.25} />
            {town}, Hampshire
          </div>
        </Reveal>
        <div className="lg:col-span-7 grid gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl bg-white border border-ink/5 shadow-sm p-6">
                <p className="text-ink/85 leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                  {r.context} · {town}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
