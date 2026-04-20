'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/data';

/**
 * Sticky mobile "Call Now" button.
 * - Visible only on mobile (<768px)
 * - Appears after 200px scroll
 * - Subtle pulse every 5s
 *
 * TODO FROM MATT: Confirm mobile number to use for tap-to-call.
 * Currently uses siteConfig.phoneHref — placeholder tel:07XXXXXXXXX below
 * will take effect if siteConfig.phoneHref is switched to it.
 */

// TODO FROM MATT: Replace with Matt's mobile (e.g. 07XXX XXX XXX) if he wants tap-to-call to go to his mobile rather than the landline.
const MOBILE_FALLBACK_HREF = 'tel:07XXXXXXXXX';

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Use siteConfig phone by default; fallback to mobile placeholder if set
  const href = siteConfig.phoneHref || MOBILE_FALLBACK_HREF;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          aria-label={`Call ${siteConfig.phone}`}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25 }}
          className="md:hidden fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/40 hover:bg-brand-dark active:scale-95 transition-colors sticky-call-pulse"
        >
          <Phone className="h-6 w-6" strokeWidth={2.25} />
          <span className="sr-only">Call now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
