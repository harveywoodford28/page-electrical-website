'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Item = { q: string; a: string };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 rounded-2xl bg-white border border-navy/5 shadow-sm">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 text-left py-5 px-6 hover:bg-navy/5 transition-colors"
            aria-expanded={open === i}
          >
            <span className="text-base font-semibold text-navy">{item.q}</span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-transform ${
                open === i ? 'rotate-45 bg-accent text-navy' : ''
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-navy/75 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
