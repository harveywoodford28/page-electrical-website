'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'bg-navy' : 'bg-white/10 backdrop-blur'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${scrolled ? 'text-accent' : 'text-accent'}`}
            >
              <path
                d="M13 2L4.09 12.97a.94.94 0 00.7 1.53H11l-2 7.5 8.91-10.97a.94.94 0 00-.7-1.53H13l2-7.5z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`text-sm font-bold tracking-wider ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              PAGE ELECTRICAL
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                scrolled ? 'text-navy/60' : 'text-white/70'
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
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-navy/80 hover:text-accent'
                  : 'text-white/90 hover:text-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className={`hidden items-center gap-2 text-sm font-semibold md:flex ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 text-accent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
              />
            </svg>
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="hidden md:inline-flex btn-primary !px-5 !py-2.5 !text-xs">
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-lg ${
              scrolled ? 'bg-navy/5' : 'bg-white/10'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-5 w-5 ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute inset-x-0 top-full bg-white shadow-lg border-t border-navy/5"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-navy font-medium py-2 border-b border-navy/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
