import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] grain"
      />
      <div className="container-x relative py-20 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="eyebrow mb-4">Need an electrician?</p>
          <h2 className="h-display !text-white text-3xl md:text-5xl leading-[1.05]">
            Get a fast, honest quote from a Hampshire team you can trust.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
          <a href={siteConfig.phoneHref} className="btn-secondary">
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
