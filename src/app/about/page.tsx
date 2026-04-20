import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import { siteConfig } from '@/lib/data';

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow !text-accent mb-6">About us</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                30+ years of electrical work, done properly, across Hampshire.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
                Page Electrical Installations Ltd is a family-run electrical
                contractor serving domestic, commercial and industrial clients
                across Gosport, Portsmouth and the wider Hampshire area.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/about-hero.jpg"
                alt="Page Electrical work"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
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
            <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
              Meet Matt Page.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-navy/80 leading-relaxed text-lg">
              <p>
                Matt Page founded Page Electrical Installations after over 30
                years serving Hampshire homeowners and businesses. The company
                was built on a simple idea — turn up when you say you will, do
                the job properly, leave the place cleaner than you found it.
              </p>
              <p>
                From full rewires and fuse board upgrades to EV charger
                installs, AC and solar, Matt and the team handle work across
                the full electrical spectrum. Clients call him direct. No
                gatekeepers, no upsells, no hidden agenda.
              </p>
              <p>
                &ldquo;Most of our work comes from word of mouth — someone we did
                a job for five years ago ringing up for their neighbour. That
                tells us we&apos;re doing something right.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white py-20 md:py-24 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.08]" />
        <div className="container-x relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {s.n}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">The Team</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
            A small, skilled team you see on the tools.
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden bg-white border border-navy/5 shadow-sm">
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
                  <h3 className="text-xl font-bold text-navy">{m.name}</h3>
                  <p className="text-sm text-accent-dark font-semibold uppercase tracking-wider mt-1">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-navy/[0.03] py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow mb-3">Service area</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1]">
              We cover Hampshire — Gosport, Portsmouth and beyond.
            </h2>
            <p className="mt-5 text-navy/70 leading-relaxed text-lg">
              Our core service area is Gosport, Portsmouth, Fareham, Southampton
              and Havant. For larger jobs we travel further across the south
              coast — just ask.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.cities.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-white border border-navy/10 text-sm font-medium text-navy"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white border border-navy/5 shadow-sm p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                What we cover
              </h3>
              <ul className="space-y-3 text-navy/80">
                {[
                  'Domestic — homes, flats, HMOs',
                  'Commercial — shops, offices, light units',
                  'Industrial — workshops, warehouses',
                  'New builds and refurbishments',
                  'Emergency call-outs across Hampshire',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline-navy mt-8 w-full">
                Book a visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
