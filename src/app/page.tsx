import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import { reviews, services, faqs, siteConfig } from '@/lib/data';

const featuredReviews = [reviews[0], reviews[1], reviews[6]];
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

      {/* SERVICES — moved high per Matt's feedback */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
            Five services. One trusted team covering every electrical need.
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">
            From a single socket to a full commercial installation — we cover
            domestic, commercial and industrial work across Hampshire.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} {...s} index={i} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link href="/services" className="btn-outline-navy">
            See all services
          </Link>
        </Reveal>
      </section>

      {/* TRUST / ABOUT PREVIEW */}
      <section className="bg-navy/[0.03] py-20 md:py-28">
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
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-3">About Page Electrical</p>
              <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
                30+ years of electrical experience across Hampshire.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg text-navy/75 leading-relaxed">
                Page Electrical Installations is a family-run firm founded on
                the idea that good electrical work should be straightforward,
                tidy and done right the first time. We serve homeowners,
                landlords, shops, offices and light industrial sites.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  'Fully certified electricians',
                  'Work to current regulations',
                  'Domestic, commercial, industrial',
                  'Free, honest quotes',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-navy/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-outline-navy">
                  More about us
                </Link>
                <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-navy font-semibold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-accent"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Customers say</p>
            <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
              Trusted by homeowners and businesses across Hampshire.
            </h2>
          </div>
          <Link href="/reviews" className="btn-outline-navy shrink-0">
            Read all reviews
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredReviews.map((r, i) => (
            <ReviewCard key={i} quote={r.quote} context={r.context} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-navy/[0.03] py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="h-display text-3xl md:text-5xl leading-[1.05]">
              Straight answers before you book.
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              We get asked the same questions a lot — so we&apos;ve answered
              the most common ones here. Can&apos;t see what you need? Give us
              a call and we&apos;ll help.
            </p>
            <Link href="/faq" className="mt-8 btn-outline-navy">
              All FAQs
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
