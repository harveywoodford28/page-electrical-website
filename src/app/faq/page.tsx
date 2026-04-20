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
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow !text-accent mb-6">FAQ</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Straight answers before you book.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              The questions we get asked most — certifications, timing, cost,
              emergencies. Can&apos;t see what you need? Call us on 023 9359
              3998 and we&apos;ll help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-navy/5">
            <Image
              src="/images/faq-image.jpg"
              alt="Page Electrical work"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
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
