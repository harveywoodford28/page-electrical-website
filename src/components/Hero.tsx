'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';

// Hero background collage — cycles through real Page Electrical work photos.
// Only high-res originals (>400KB) used here. FB-compressed thumbnails blur at full-screen scale.
const heroImages = [
  '/images/raw-from-matt/hero/cyberster-showroom.jpg',
  '/images/raw-from-matt/building-services/chery-bognor-regis.jpg',
  '/images/raw-from-matt/solar/residential-roof-install.jpg',
];

const INTERVAL_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden text-white min-h-[92vh] flex items-end">
      {/* Cross-fading background layers — CSS transitions, no JS-dependent visibility */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <div className="ken-burns h-full w-full">
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
        <div aria-hidden className="absolute inset-0 hero-overlay" />
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to hero image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-brand-light' : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="container-x relative pt-40 pb-16 lg:pt-48 lg:pb-24 w-full">
        <div className="max-w-3xl">
          <p className="hero-reveal hero-delay-1 eyebrow !text-brand-light mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-light inline-block" />
            30+ Years Serving Hampshire
          </p>

          <h1 className="hero-reveal hero-delay-2 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight">
            Reliable Electrical Services in{' '}
            <span className="text-brand-light">Hampshire.</span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Installations, repairs, AC, solar and EV chargers — delivered by a family-run team
            trusted by homeowners and businesses across Gosport, Portsmouth and Hampshire for
            over three decades.
          </p>

          <div className="hero-reveal hero-delay-4 mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a href={siteConfig.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="hero-reveal hero-delay-5 mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: '30+', l: 'Years' },
              { n: '500+', l: 'Jobs done' },
              { n: '5.0', l: 'Google rating' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-brand-light">{s.n}</div>
                <div className="text-[11px] uppercase tracking-widest text-white/65 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
