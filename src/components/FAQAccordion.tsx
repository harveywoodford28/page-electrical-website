'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

type Item = { q: string; a: string };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-2xl bg-white border border-ink/5 shadow-sm overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 text-left py-5 px-6 hover:bg-mist transition-colors"
            aria-expanded={open === i}
          >
            <span className="text-base font-semibold text-ink">{item.q}</span>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                open === i
                  ? 'rotate-45 bg-brand text-white shadow-md shadow-brand/30'
                  : 'bg-ink/5 text-ink'
              }`}
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
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
                <p className="px-6 pb-6 text-ink/75 leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
