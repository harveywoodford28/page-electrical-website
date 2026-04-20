import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div aria-hidden className="absolute inset-0 opacity-[0.08] grain" />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-dark/40 blur-3xl"
      />
      <div className="container-x relative py-20 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mb-4">
            Need an electrician?
          </p>
          <h2 className="font-display font-bold tracking-tight text-white text-3xl md:text-5xl leading-[1.05]">
            Get a fast, honest quote from a Hampshire team you can trust.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a Quote <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white/20"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} /> Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
