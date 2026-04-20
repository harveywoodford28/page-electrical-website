import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Page Electrical — Hampshire Electricians',
  description:
    'Get in touch with Page Electrical for a free quote. Call 023 9359 3998 or email info@page-electrical.co.uk.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient text-white pt-40 pb-24 relative">
        <div aria-hidden className="absolute inset-0 grain opacity-[0.15]" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow !text-accent mb-6">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              Get a quote. We reply fast.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Call, email or fill the form. For emergencies, phone is fastest —
              most call-outs across Hampshire are same-day or next morning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 space-y-8">
          <div>
            <p className="eyebrow mb-2">Call us</p>
            <a
              href={siteConfig.phoneHref}
              className="text-2xl md:text-3xl font-bold text-navy hover:text-accent-dark transition-colors"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-2 text-sm text-navy/60">{siteConfig.workingHours}</p>
          </div>

          <div>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={siteConfig.emailHref}
              className="text-xl font-semibold text-navy hover:text-accent-dark transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-2">Service area</p>
            <p className="text-navy/80">
              Gosport, Portsmouth, Fareham, Southampton, Havant and the wider
              Hampshire area.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-2">Follow us</p>
            <div className="flex gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 text-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
