'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // lock scroll when mobile drawer open
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-ink/5'
          : 'bg-gradient-to-b from-ink/50 to-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="Page Electrical home" className="flex items-center gap-3">
          <div
            className={`relative h-11 w-11 rounded-lg overflow-hidden transition-all ${
              scrolled ? 'bg-white' : 'bg-white/95 ring-1 ring-white/20 backdrop-blur'
            }`}
          >
            <Image
              src="/brand/logo.png"
              alt="Page Electrical"
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`text-sm font-bold tracking-wider transition-colors ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              PAGE ELECTRICAL
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.22em] transition-colors ${
                scrolled ? 'text-muted' : 'text-white/70'
              }`}
            >
              Hampshire
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled ? 'text-ink/75 hover:text-brand' : 'text-white/90 hover:text-brand-light'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className={`hidden items-center gap-2 text-sm font-semibold md:flex transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            <Phone className="h-4 w-4 text-brand" strokeWidth={2.5} />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="hidden md:inline-flex btn-primary !px-5 !py-2.5 !text-xs">
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'bg-ink/5 text-ink' : 'bg-white/10 text-white backdrop-blur'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in drawer from right */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 top-20 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-20 bottom-0 right-0 w-[82%] max-w-sm bg-white shadow-2xl border-l-4 border-brand overflow-y-auto"
            >
              <div className="p-6 flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-ink font-semibold py-3 px-2 border-b border-ink/5 hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-6 space-y-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-2 text-ink font-semibold py-2 px-2"
                  >
                    <Phone className="h-4 w-4 text-brand" strokeWidth={2.5} />
                    {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
