'use client';

import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';
import { trustPoints } from '@/lib/data';

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/5 bg-mist">
      <div className="container-x py-8 grid gap-6 grid-cols-2 md:grid-cols-4">
        {trustPoints.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              <ServiceIcon name={t.icon} className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="text-sm font-semibold text-ink">{t.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
