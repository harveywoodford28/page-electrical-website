'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  const headline = 'Reliable Electrical Services in Hampshire.';
  const words = headline.split(' ');
  return (
    <section className="relative isolate overflow-hidden text-white hero-gradient">
      <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
      <div className="container-x relative pt-40 pb-24 lg:pt-48 lg:pb-32 grid gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow !text-accent mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent inline-block" />
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
                  <span className="text-accent">{word}</span>
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
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Installations, repairs, AC, solar and EV chargers — delivered by a
            family-run team trusted by homeowners and businesses across
            Gosport, Portsmouth and Hampshire for over three decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <a href={siteConfig.phoneHref} className="btn-secondary">
              Call {siteConfig.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { n: '30+', l: 'Years' },
              { n: '500+', l: 'Jobs done' },
              { n: '5.0', l: 'Google rating' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/hero-1.jpg"
              alt="Page Electrical work in progress"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="hidden md:flex absolute -left-8 -bottom-8 bg-white text-navy rounded-2xl shadow-xl px-6 py-5 gap-4 items-center max-w-xs"
          >
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-navy/70 leading-tight">
                &ldquo;Cannot fault this company. Had them in for a full rewire.&rdquo;
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-navy/50">
                Verified Customer
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
