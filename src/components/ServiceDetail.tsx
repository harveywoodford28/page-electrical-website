import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import CTABand from './CTABand';
import FAQAccordion from './FAQAccordion';
import ServiceIcon from './ServiceIcon';

type Props = {
  icon: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  gallery?: readonly string[];
  whyUs: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export default function ServiceDetail({
  icon,
  eyebrow,
  title,
  intro,
  image,
  gallery = [],
  whyUs,
  process,
  faqs,
}: Props) {
  return (
    <>
      {/* Full-bleed hero with image background */}
      <section className="relative isolate overflow-hidden text-white min-h-[70vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src={image}
              alt={title}
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
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                  <ServiceIcon name={icon} className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <p className="eyebrow !text-brand-light">{eyebrow}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Quote <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  All services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included + Process */}
      <section className="container-x py-20 md:py-28 grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-3">What&apos;s included</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
            Honest work, certified.
          </h2>
          <ul className="mt-10 space-y-4">
            {whyUs.map((w, i) => (
              <li
                key={w}
                className="flex items-start gap-3 text-ink/85 text-lg leading-relaxed"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2.25} />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1] mb-10 underline-grow">
            Our process.
          </h2>
          <div className="space-y-5">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-ink/5 shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:border-brand/20 hover:-translate-y-0.5"
              >
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold shadow-md shadow-brand/25">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="bg-mist py-20 md:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Recent work</p>
              <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
                A look at the work.
              </h2>
            </Reveal>
            <div className="grid gap-4 md:gap-6 md:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal key={g + i} delay={i * 0.1}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
                    <Image
                      src={g}
                      alt={`${title} gallery ${i + 1}`}
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
      )}

      {faqs.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow mb-3">FAQs</p>
              <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
                Common questions.
              </h2>
              <p className="mt-8 text-muted leading-relaxed">
                Not seeing what you need?{' '}
                <Link
                  href="/contact"
                  className="text-brand-dark font-semibold underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
                >
                  Ask us directly
                </Link>
                .
              </p>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal>
                <FAQAccordion items={faqs} />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
