import Image from 'next/image';
import Link from 'next/link';
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
  whyUs,
  process,
  faqs,
}: Props) {
  return (
    <>
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-navy">
                  <ServiceIcon name={icon} />
                </span>
                <p className="eyebrow !text-accent">{eyebrow}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Quote
                </Link>
                <Link href="/services" className="btn-secondary">
                  All services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-3">Why Page Electrical</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1]">
            Honest work, certified to current regulations.
          </h2>
          <ul className="mt-8 space-y-4">
            {whyUs.map((w) => (
              <li key={w} className="flex items-start gap-3 text-navy/80 text-lg leading-relaxed">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {w}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="h-display text-3xl md:text-4xl leading-[1.1] mb-8">
            Our process.
          </h2>
          <div className="space-y-6">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-navy/5 shadow-sm p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-accent font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                    <p className="mt-2 text-navy/70 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {faqs.length > 0 && (
        <section className="bg-navy/[0.03] py-20 md:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow mb-3">FAQs</p>
              <h2 className="h-display text-3xl md:text-4xl leading-[1.1]">
                Common questions on {title.split(' ')[0].toLowerCase()} work.
              </h2>
              <p className="mt-6 text-navy/70 leading-relaxed">
                Not seeing what you need?{' '}
                <Link href="/contact" className="text-accent-dark font-semibold underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
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
