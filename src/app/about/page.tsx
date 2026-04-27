import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import ServiceIcon from '@/components/ServiceIcon';
import { siteConfig, values } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Page Electrical — 30+ Years Serving Hampshire',
  description:
    'Page Electrical Installations Ltd is a family-run Hampshire electrical firm with over 30 years of experience. Led by Matt Page, serving homeowners and businesses across Gosport, Portsmouth and the wider Hampshire area.',
};

// NOTE: Team member names/photos below are placeholders — awaiting details from Matt.
const team = [
  {
    name: 'Matt Page',
    role: 'Director & Lead Electrician',
    photo: '/images/matt-page.jpg',
    bio:
      'Matt founded Page Electrical Installations after decades on the tools in Hampshire. Direct, honest and always on time.',
  },
  {
    name: 'Team Member',
    role: 'Qualified Electrician',
    photo: '/images/team-2.png',
    bio: 'Awaiting details from Matt.',
  },
  {
    name: 'Team Member',
    role: 'Qualified Electrician',
    photo: '/images/team-3.png',
    bio: 'Awaiting details from Matt.',
  },
];

const stats = [
  { n: '30+', l: 'Years of experience' },
  { n: '500+', l: 'Jobs completed' },
  { n: '5.0', l: 'Average Google rating' },
  { n: '100%', l: 'Certified work' },
];

const gallery = [
  '/images/about-hero.jpg',
  '/images/about-team.jpg',
  '/images/service-installations.jpg',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — full-bleed image */}
      <section className="relative isolate overflow-hidden text-white min-h-[70vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src="/images/about-hero.jpg"
              alt="Page Electrical team at work"
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
              <p className="eyebrow !text-brand-light mb-6">About us</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                30+ years of electrical expertise in Hampshire.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                Page Electrical Installations Ltd is a family-run electrical contractor serving
                domestic, commercial and industrial clients across Gosport, Portsmouth and the
                wider Hampshire area.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Director's story */}
      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl max-w-md">
            <Image
              src="/images/matt-page.jpg"
              alt="Matt Page, Director of Page Electrical"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-3">The Director</p>
            <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
              Meet Matt Page.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-lg text-ink/80 leading-relaxed max-w-prose">
              <p>
                Matt Page founded Page Electrical Installations after over 30 years serving
                Hampshire homeowners and businesses. The company was built on a simple idea — turn
                up when you say you will, do the job properly, leave the place cleaner than you
                found it.
              </p>
              <p>
                From full rewires and fuse board upgrades to EV charger installs, AC and solar,
                Matt and the team handle work across the full electrical spectrum. Clients call
                him direct. No gatekeepers, no upsells, no hidden agenda.
              </p>
              <p className="border-l-4 border-brand pl-5 italic text-ink/75">
                &ldquo;Most of our work comes from word of mouth — someone we did a job for five
                years ago ringing up for their neighbour. That tells us we&apos;re doing something
                right.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats — dark background */}
      <section className="relative bg-ink text-white py-20 md:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.1]" />
        <div aria-hidden className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
        <div className="container-x relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="text-5xl md:text-6xl font-bold text-brand-light mb-2">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">The team</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
            A small, skilled team you see on the tools.
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden bg-white border border-ink/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-square">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink">{m.name}</h3>
                  <p className="text-sm text-brand-dark font-semibold uppercase tracking-wider mt-1">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workplace gallery */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">On site</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
              A look at the work.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g} delay={i * 0.1}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src={g}
                    alt={`Page Electrical gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
            Four principles, every job.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="rounded-2xl bg-white border border-ink/5 shadow-sm p-7 h-full transition-all duration-300 hover:shadow-md hover:border-brand/25 hover:-translate-y-0.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand mb-4">
                  <ServiceIcon name={v.icon} className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coverage — interactive map */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Service area</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
              We cover Hampshire — Gosport, Portsmouth and beyond.
            </h2>
            <p className="mt-8 text-muted leading-relaxed text-lg max-w-prose">
              Our core service area runs along the south Hampshire coast. For larger jobs we
              travel further — just ask.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid gap-12 lg:grid-cols-2 items-start">
            <div className="flex flex-wrap gap-3">
              {siteConfig.cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink/10 text-sm font-medium text-ink"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand" strokeWidth={2.25} />
                  {c}
                </span>
              ))}
            </div>
            <div className="rounded-2xl bg-white border border-ink/5 shadow-sm p-8">
              <h3 className="text-xl font-bold text-ink mb-5">What we cover</h3>
              <ul className="space-y-3 text-ink/80">
                {[
                  'Domestic — homes, flats, HMOs',
                  'Commercial — shops, offices, light units',
                  'Industrial — workshops, warehouses',
                  'New builds and refurbishments',
                  'Emergency call-outs across Hampshire',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline mt-8 w-full">
                Book a visit <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
