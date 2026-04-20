'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ServiceIcon from './ServiceIcon';

type Props = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  image?: string | null;
  index?: number;
};

export default function ServiceCard({
  slug,
  title,
  short,
  icon,
  image,
  index = 0,
}: Props) {
  const hasImage = !!image;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <Link
        href={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-ink/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-brand/40"
      >
        {hasImage ? (
          <div className="relative h-52 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
            <motion.div
              className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30"
              whileHover={{ scale: 1.12, rotate: 8 }}
              transition={{ type: 'spring', stiffness: 320, damping: 14 }}
            >
              <ServiceIcon name={icon} className="h-6 w-6" strokeWidth={2.25} />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white drop-shadow">{title}</h3>
            </div>
          </div>
        ) : (
          <div className="relative h-52 overflow-hidden bg-gradient-to-br from-brand/5 via-brand/10 to-brand/20 flex flex-col items-center justify-center">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/15 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl"
            />
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-brand/10 border border-brand/15"
              whileHover={{ scale: 1.08, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <ServiceIcon name={icon} className="h-10 w-10" strokeWidth={2} />
            </motion.div>
            <h3 className="relative mt-5 text-xl font-bold text-ink">{title}</h3>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm text-muted leading-relaxed flex-1">{short}</p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-dark">
            <span className="transition-all group-hover:mr-1">Learn more</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
