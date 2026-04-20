import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQs — Page Electrical Hampshire',
  description:
    'Common questions on electrical work in Hampshire — certifications, emergency call-outs, rewires, EV chargers, solar, AC and more.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative isolate overflow-hidden text-white min-h-[55vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src="/images/faq-image.jpg"
              alt="Page Electrical FAQs"
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
            <p className="eyebrow !text-brand-light mb-6">FAQ</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Straight answers before you book.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              The questions we get asked most — certifications, timing, cost, emergencies.
              Can&apos;t see what you need? Call us on 023 9359 3998 and we&apos;ll help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-ink/5">
            <Image
              src="/images/faq-image.jpg"
              alt="Page Electrical work"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-brand shadow-lg -z-0"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-8">
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
