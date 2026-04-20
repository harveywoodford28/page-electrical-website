'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, BadgeCheck, Lock } from 'lucide-react';
import { certificationBadges } from '@/lib/data';

type Props = {
  /** Limit which badges to show by scope (defaults to 'all') */
  scope?: 'all' | 'air-conditioning' | 'ev-chargers' | 'solar' | 'building' | 'electrical';
};

/**
 * Certification / trust badge strip.
 *
 * Every badge is initially rendered as a greyed-out placeholder pill.
 * Real badge imagery is held as HTML comments inside this file for easy swap-in.
 *
 * TODO FROM MATT: Once Matt confirms which certifications he holds, we:
 *   1) Flip the badge `pending` flag to false in src/lib/data.ts
 *   2) Replace the placeholder pill with the real badge image (uncomment section below)
 *
 * Awaiting Matt's confirmation on:
 *   <!-- NICEIC Approved Contractor / Domestic Installer -->
 *   <!-- Part P Registered (auto-true if NICEIC Domestic Installer) -->
 *   <!-- 18th Edition Amendment 2 Qualified -->
 *   <!-- Public Liability Insurance £Xm (placeholder — ask Matt for insured value) -->
 *   <!-- Checkatrade badge if registered -->
 *   <!-- F-Gas / REFCOM registration (for AC page) -->
 *   <!-- OZEV installer register status (for EV page) -->
 *   <!-- MCS Certified Installer or MCS-certified partner arrangement (for Solar page) -->
 *   <!-- FMB Member (for Building page) -->
 *   <!-- TrustMark Registered (for Building page) -->
 */
export default function CertificationStrip({ scope = 'all' }: Props) {
  const visible = certificationBadges.filter(
    (b) => scope === 'all' || b.scope === 'all' || b.scope === scope,
  );

  return (
    <section className="border-y border-ink/5 bg-white">
      <div className="container-x py-10">
        <p className="eyebrow text-center mb-5">Certifications &amp; accreditations</p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {visible.map((b, i) => (
            <motion.div
              key={b.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`group flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ${
                b.pending
                  ? 'border-ink/10 bg-mist text-muted hover:border-brand/40 hover:text-ink'
                  : 'border-brand/40 bg-brand/5 text-ink hover:bg-brand hover:text-white'
              }`}
              title={b.pending ? 'Pending confirmation from Matt' : b.label}
            >
              {b.pending ? (
                <Lock className="h-3.5 w-3.5" strokeWidth={2.25} />
              ) : (
                <BadgeCheck className="h-4 w-4 text-brand group-hover:text-white" strokeWidth={2.25} />
              )}
              <span className="text-xs font-semibold uppercase tracking-wider">{b.label}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted">
          Certified to BS 7671 · 30+ years&apos; trade experience · Based in Hampshire
        </p>
      </div>

      {/*
        Live badge image slots — uncomment + swap source once Matt confirms:

        <img src="/brand/niceic.svg" alt="NICEIC Approved Contractor" />
        <img src="/brand/part-p.svg" alt="Part P Registered" />
        <img src="/brand/18th-edition.svg" alt="18th Edition Amendment 2 Qualified" />
        <img src="/brand/insurance.svg" alt="Public Liability Insured £Xm" />
        <img src="/brand/checkatrade.svg" alt="Checkatrade Verified" />
        <img src="/brand/f-gas.svg" alt="F-Gas Registered" />
        <img src="/brand/ozev.svg" alt="OZEV Approved Installer" />
        <img src="/brand/mcs.svg" alt="MCS Certified" />
        <img src="/brand/fmb.svg" alt="Federation of Master Builders Member" />
        <img src="/brand/trustmark.svg" alt="TrustMark Registered" />
      */}

      {/* Unused imports safeguard (kept to document brand scope) */}
      <span className="hidden">
        <ShieldCheck /> <Award />
      </span>
    </section>
  );
}
