'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <Link
        href={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-navy/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-accent/30"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
          <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-navy shadow-lg">
            <ServiceIcon name={icon} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent-dark transition-colors">
            {title}
          </h3>
          <p className="text-sm text-navy/70 leading-relaxed flex-1">{short}</p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent-dark">
            Learn more
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
