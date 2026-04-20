'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

type Props = {
  quote: string;
  context?: string;
  index?: number;
};

export default function ReviewCard({ quote, context, index = 0 }: Props) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="relative flex h-full flex-col rounded-2xl bg-white border border-ink/5 p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand/30"
    >
      <Quote className="absolute top-5 right-5 h-8 w-8 text-brand/15" strokeWidth={2} />
      <div className="flex gap-1 mb-4 text-brand">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" strokeWidth={1} />
        ))}
      </div>
      <blockquote className="flex-1 text-ink/80 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {context && (
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-dark">
          {context}
        </p>
      )}
    </motion.div>
  );
}
