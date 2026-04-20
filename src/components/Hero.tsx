'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';

// Hero background collage — cycles through real Page Electrical work photos.
// TODO FROM MATT: Drop more real job photos into /public/images and add to this array.
const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/service-installations.jpg',
];

const INTERVAL_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const headline = 'Reliable Electrical Services in Hampshire.';
  const words = headline.split(' ');

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden text-white min-h-[92vh] flex items-end">
      {/* Cross-fading background collage */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroImages[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="ken-burns h-full w-full">
              <Image
                src={heroImages[index]}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow !text-brand-light mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-brand-light inline-block" />
            30+ Years Serving Hampshire
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word === 'Hampshire.' ? (
                  <span className="text-brand-light">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Installations, repairs, AC, solar and EV chargers — delivered by a family-run team
            trusted by homeowners and businesses across Gosport, Portsmouth and Hampshire for
            over three decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a href={siteConfig.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {siteConfig.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
