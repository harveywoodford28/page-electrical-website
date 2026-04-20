import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import TrustStrip from '@/components/TrustStrip';
import CertificationStrip from '@/components/CertificationStrip';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { reviews, services, faqs, siteConfig, beforeAfterExamples } from '@/lib/data';

const topFaqs = faqs.slice(0, 3);

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Page Electrical Services',
  image: 'https://page-electrical.co.uk/images/hero-1.jpg',
  '@id': 'https://page-electrical.co.uk/',
  url: 'https://page-electrical.co.uk/',
  telephone: '+442393593998',
  email: 'info@page-electrical.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gosport',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
  areaServed: ['Gosport', 'Portsmouth', 'Fareham', 'Southampton', 'Havant', 'Hampshire'],
  priceRange: '££',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '12',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />

      <TrustStrip />
      <CertificationStrip />

      {/* SERVICES */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
            Five services. One trusted team.
          </h2>
          <p className="mt-8 text-lg text-muted leading-relaxed max-w-prose">
            From a single socket to a full commercial installation — we cover domestic, commercial
            and industrial work across Hampshire.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} {...s} index={i} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link href="/services" className="btn-outline">
            See all services <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </Reveal>
      </section>

      {/* OUR WORK — before/after */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Our work</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
            Before and after — the work in detail.
          </h2>
          <p className="mt-8 text-lg text-muted leading-relaxed max-w-prose">
            Drag the handle to reveal the finish. Real jobs from across Hampshire.
          </p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterExamples.map((b, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <BeforeAfterSlider
                before={b.before}
                after={b.after}
                label={b.label}
                town={b.town}
                placeholder
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST / ABOUT PREVIEW */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Page Electrical team"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-brand shadow-lg -z-0"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-3">About Page Electrical</p>
              <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
                30+ years of trusted electrical work in Hampshire.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5 text-lg text-ink/80 leading-relaxed max-w-prose">
                <p>
                  Page Electrical Installations is a family-run firm founded on the idea that good
                  electrical work should be straightforward, tidy and done right the first time.
                </p>
                <p>
                  We serve homeowners, landlords, shops, offices and light industrial sites across
                  Gosport, Portsmouth, Fareham, Southampton, Havant and the wider Hampshire area.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  'Fully certified electricians',
                  'Works to BS 7671 regulations',
                  'Domestic, commercial, industrial',
                  'Free, honest quotes',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <span className="text-ink/85">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="/about" className="btn-outline">
                  Meet the team <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-ink font-semibold"
                >
                  <Phone className="h-4 w-4 text-brand" strokeWidth={2.5} />
                  {siteConfig.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RECENTLY COMPLETED TICKER */}

      {/* REVIEWS — Google widget */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Customers say</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
            Trusted by Hampshire homes and businesses.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <GoogleReviewsWidget reviews={reviews} rating={5} count={12} />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link href="/reviews" className="btn-outline">
            Read all reviews <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </Reveal>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="h-display text-3xl md:text-5xl leading-[1.05] underline-grow">
              Straight answers before you book.
            </h2>
            <p className="mt-8 text-muted leading-relaxed">
              We get asked the same questions a lot — so we&apos;ve answered the most common ones
              here. Can&apos;t see what you need? Give us a call and we&apos;ll help.
            </p>
            <Link href="/faq" className="mt-8 btn-outline">
              All FAQs <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQAccordion items={topFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
