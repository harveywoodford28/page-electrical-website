import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, services } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <div className="relative h-12 w-12 rounded-lg bg-white overflow-hidden">
              <Image
                src="/brand/logo.png"
                alt="Page Electrical"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-bold tracking-wider text-sm">PAGE ELECTRICAL</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                Services Ltd
              </p>
            </div>
          </Link>
          <p className="text-sm text-white/65 leading-relaxed">
            {siteConfig.tagline}. Serving Hampshire homeowners and businesses for over 30 years.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-brand-light transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/65">
            <li><Link href="/about" className="hover:text-brand-light transition-colors">About</Link></li>
            <li><Link href="/reviews" className="hover:text-brand-light transition-colors">Reviews</Link></li>
            <li><Link href="/faq" className="hover:text-brand-light transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light transition-colors">Contact</Link></li>
            <li>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-light transition-colors"
              >
                Leave a Review
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 hover:text-brand-light transition-colors"
              >
                <Phone className="h-4 w-4 text-brand" strokeWidth={2} />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-2 hover:text-brand-light transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-brand shrink-0" strokeWidth={2} />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand shrink-0" strokeWidth={2} />
              {siteConfig.workingHours}
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-brand transition-colors"
            >
              <Facebook className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-brand transition-colors"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Page Electrical Services. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a
              href="https://www.kaizenai.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-light transition-colors"
            >
              Kaizen AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
