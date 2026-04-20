import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ReviewCard from '@/components/ReviewCard';
import CTABand from '@/components/CTABand';
import { reviews, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Customer Reviews — Page Electrical Hampshire',
  description:
    'Real reviews from Page Electrical customers across Hampshire — EV chargers, rewires, AC, emergency call-outs and more.',
};

export default function ReviewsPage() {
  return (
    <>
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow !text-accent mb-6">Reviews</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                What our customers say about us.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
                Twelve reviews from real Hampshire customers — rewires, EV
                chargers, AC installs, emergency call-outs, and everything in
                between.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={siteConfig.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M21.35 11.1H12v2.9h5.35c-.23 1.4-1.64 4.1-5.35 4.1a6 6 0 110-12c1.89 0 3.14.8 3.86 1.5l2.64-2.55C16.85 3.47 14.68 2.5 12 2.5 6.77 2.5 2.5 6.77 2.5 12S6.77 21.5 12 21.5c6.93 0 9.5-4.86 9.5-7.8 0-.52-.05-1.12-.15-1.6z" />
                  </svg>
                  Leave a Google Review
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                  </svg>
                  Review us on Facebook
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/reviews-hero.jpg"
                alt="Page Electrical work"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} index={i} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
