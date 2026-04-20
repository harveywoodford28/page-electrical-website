'use client';

import { motion } from 'framer-motion';

type Props = {
  quote: string;
  context?: string;
  index?: number;
};

export default function ReviewCard({ quote, context, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="flex h-full flex-col rounded-2xl bg-white border border-navy/5 p-7 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 text-navy/80 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {context && (
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-navy/50">
          {context}
        </p>
      )}
    </motion.div>
  );
}
