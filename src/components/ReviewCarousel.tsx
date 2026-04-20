'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

type Review = { quote: string; context?: string };

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reviews.length]);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const r = reviews[index];

  return (
    <div
      className="relative rounded-3xl bg-white border border-ink/5 shadow-lg p-8 md:p-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="absolute top-6 right-6 md:top-8 md:right-8 h-12 w-12 text-brand/15" strokeWidth={1.5} />
      <div className="flex gap-1 mb-5 text-brand">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" strokeWidth={1} />
        ))}
      </div>
      <div className="min-h-[180px] md:min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <blockquote className="text-lg md:text-xl text-ink/85 leading-relaxed">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            {r.context && (
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {r.context}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-brand' : 'w-2 bg-ink/15 hover:bg-ink/30'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
