import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import HampshireCoverageMap from '@/components/HampshireCoverageMap';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Page Electrical — Hampshire Electricians',
  description:
    'Get in touch with Page Electrical for a free quote. Call 023 9359 3998 or email info@page-electrical.co.uk.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-white min-h-[50vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <div className="ken-burns h-full w-full">
            <Image
              src="/images/hero-2.jpg"
              alt="Contact Page Electrical"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className="absolute inset-0 hero-overlay" />
          <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        </div>
        <div className="container-x relative pt-40 pb-16 lg:pt-48 lg:pb-20 max-w-3xl w-full">
          <Reveal>
            <p className="eyebrow !text-brand-light mb-6">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Get a quote. We reply fast.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              Call, email or fill the form. For emergencies, phone is fastest — most call-outs
              across Hampshire are same-day or next morning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 space-y-7">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Phone className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="eyebrow mb-1">Call us</p>
              <a
                href={siteConfig.phoneHref}
                className="block text-2xl md:text-3xl font-bold text-ink hover:text-brand-dark transition-colors"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-1 text-sm text-muted">{siteConfig.workingHours}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="eyebrow mb-1">Email</p>
              <a
                href={siteConfig.emailHref}
                className="text-xl font-semibold text-ink hover:text-brand-dark transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <MapPin className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="eyebrow mb-1">Service area</p>
              <p className="text-ink/80 leading-relaxed">
                Gosport, Portsmouth, Fareham, Southampton, Havant, Hayling Island, Lee-on-Solent
                and the wider Hampshire area.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Clock className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="eyebrow mb-1">Hours</p>
              <p className="text-ink/80">{siteConfig.workingHours}</p>
              <p className="text-sm text-muted mt-1">Emergency call-outs outside hours — call.</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Follow us</p>
            <div className="flex gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 hover:bg-brand hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </section>

      {/* Coverage strip */}
      <section className="bg-mist py-16 md:py-20">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Where we work</p>
            <h2 className="h-display text-3xl md:text-4xl leading-[1.1] underline-grow">
              Hampshire &amp; the Solent.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HampshireCoverageMap />
          </Reveal>
        </div>
      </section>
    </>
  );
}
