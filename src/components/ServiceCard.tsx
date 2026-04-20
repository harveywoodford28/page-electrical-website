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
  image: string;
  index?: number;
};

export default function ServiceCard({ slug, title, short, icon, image, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <Link
        href={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-ink/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:border-brand/40"
      >
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
            animate={{}}
            transition={{ type: 'spring', stiffness: 320, damping: 14 }}
          >
            <motion.span
              initial={false}
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 260, damping: 12 }}
            >
              <ServiceIcon name={icon} className="h-6 w-6" strokeWidth={2.25} />
            </motion.span>
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white drop-shadow">{title}</h3>
          </div>
        </div>
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
