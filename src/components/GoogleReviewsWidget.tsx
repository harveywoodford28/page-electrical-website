'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { siteConfig } from '@/lib/data';

type Review = {
  quote: string;
  context: string;
};

type Props = {
  reviews: readonly Review[];
  rating?: number;
  count?: number;
};

/**
 * Google Reviews widget.
 * Currently renders the static `reviews` passed in as props (12 real reviews).
 *
 * TODO: Replace with live Google Places API once Matt shares his Google Business Profile
 * URL / Place ID. Stubbed integration outlined below.
 *
 * <!-- TODO: Replace with live Google Places API once Matt shares Google Business Profile URL -->
 *
 * Example live fetch (needs server-side proxy + API key):
 *   const res = await fetch(`/api/google-reviews?placeId=${PLACE_ID}`);
 *   const data = await res.json();
 *   // Map data.result.reviews[] into { quote, context, author_name, rating }
 */
export default function GoogleReviewsWidget({ reviews, rating = 5, count }: Props) {
  const total = count ?? reviews.length;

  return (
    <div>
      {/* Header pill: rating + count + Google link */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl bg-white border border-ink/10 px-5 py-3 shadow-sm hover:shadow-md transition-all hover:border-brand/40"
          aria-label={`View all ${total} Google reviews`}
        >
          <span className="text-3xl font-bold text-ink">{rating.toFixed(1)}</span>
          <div>
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#F9AB00] text-[#F9AB00]"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-xs text-muted mt-0.5">
              {total} Google reviews ·{' '}
              <span className="text-brand-dark group-hover:underline">See all</span>{' '}
              <ExternalLink className="inline h-3 w-3" strokeWidth={2.5} />
            </p>
          </div>
        </a>
      </div>

      {/* Horizontal scrolling review cards */}
      <div className="relative -mx-4 px-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-4 md:gap-5 pb-4 snap-x snap-mandatory">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] rounded-2xl bg-white border border-ink/5 shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5 fill-[#F9AB00] text-[#F9AB00]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-brand/40" strokeWidth={2} />
              </div>
              <p className="text-sm text-ink/80 leading-relaxed flex-1 line-clamp-6">
                {r.quote}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {r.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
