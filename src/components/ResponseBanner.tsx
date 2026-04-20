'use client';

import { Phone, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/data';

/**
 * Thin response-time banner — honest "fast same-day callback" phrasing.
 * Does NOT claim 24/7 emergency service.
 *
 * TODO FROM MATT: If Matt confirms he takes genuine 24/7 emergency calls,
 * swap the copy below to "Emergency electricians available 24/7".
 */
export default function ResponseBanner() {
  return (
    <div className="bg-ink text-white text-xs sm:text-sm">
      <div className="container-x flex flex-wrap items-center justify-center md:justify-between gap-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand-light">
            <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-white/85">
            {/* TODO FROM MATT: If 24/7 emergency service confirmed, replace with:
                "Emergency electricians available 24/7 across Hampshire" */}
            Fast response across Hampshire — typical same-day callback
          </span>
        </div>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-1.5 font-semibold text-brand-light hover:text-white transition-colors"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
