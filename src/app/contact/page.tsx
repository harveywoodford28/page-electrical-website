import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
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
              Pick up the phone or drop us an email. For emergencies, phone is fastest — most
              call-outs across Hampshire are same-day or next morning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7 space-y-7">
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

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="rounded-2xl border border-ink/5 bg-mist p-8 md:p-10">
            <p className="eyebrow mb-3">Fastest way to reach us</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Phone first. We pick up.
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Tell us a little about the job — what it is, where you are, and how soon you need
              it. Most enquiries get a quote the same day.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={siteConfig.phoneHref} className="btn-primary justify-center">
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Call {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="btn-secondary justify-center">
                <Mail className="h-4 w-4" strokeWidth={2.5} />
                Email us
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
            <p className="mt-6 text-xs text-muted">
              No call-out fee for quotes. No obligation.
            </p>
          </div>
        </Reveal>
      </section>

    </>
  );
}
