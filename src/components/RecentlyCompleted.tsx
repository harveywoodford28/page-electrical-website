'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { recentCompletions } from '@/lib/data';

/**
 * "Recently Completed" ticker — horizontal scrolling strip of recent jobs.
 * Static fallback on mobile (grid of 4).
 *
 * TODO FROM MATT: Keep this list fresh — 6–10 recent jobs, remove the oldest monthly.
 * Data lives in src/lib/data.ts -> recentCompletions.
 */
export default function RecentlyCompleted() {
  // Double the list so the marquee loops seamlessly
  const loop = [...recentCompletions, ...recentCompletions];

  return (
    <section className="bg-ink text-white py-12 md:py-16 overflow-hidden">
      <div className="container-x mb-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light mb-2">
              Recently completed
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Fresh jobs across Hampshire.
            </h2>
          </div>
          <span className="hidden md:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Desktop ticker */}
      <div className="hidden md:block ticker-wrap relative">
        <div className="ticker-track gap-4">
          {loop.map((j, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-3"
            >
              <span className="h-2 w-2 rounded-full bg-brand-light shrink-0" />
              <span className="text-sm font-semibold text-white whitespace-nowrap">
                {j.service}
              </span>
              <span className="text-sm text-white/60 whitespace-nowrap">·</span>
              <span className="text-sm text-white/70 whitespace-nowrap">{j.town}</span>
              <span className="text-sm text-white/40 whitespace-nowrap">·</span>
              <span className="text-xs text-white/50 whitespace-nowrap">{j.when}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: static stack */}
      <div className="md:hidden container-x grid gap-3">
        {recentCompletions.slice(0, 4).map((j, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
          >
            <CheckCircle2 className="h-4 w-4 text-brand-light shrink-0" strokeWidth={2.25} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{j.service}</p>
              <p className="text-xs text-white/60">
                {j.town} · {j.when}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
