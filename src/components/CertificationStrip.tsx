'use client';

import { certificationBadges } from '@/lib/data';

type Props = {
  scope?: 'all' | 'air-conditioning' | 'ev-chargers' | 'solar' | 'building' | 'electrical';
};

const TONE_CLASSES: Record<string, { ring: string; bg: string; text: string }> = {
  red: { ring: 'ring-red-500/30', bg: 'bg-red-50', text: 'text-red-700' },
  blue: { ring: 'ring-blue-500/30', bg: 'bg-blue-50', text: 'text-blue-700' },
  amber: { ring: 'ring-amber-500/30', bg: 'bg-amber-50', text: 'text-amber-700' },
  slate: { ring: 'ring-slate-500/30', bg: 'bg-slate-50', text: 'text-slate-700' },
  orange: { ring: 'ring-orange-500/30', bg: 'bg-orange-50', text: 'text-orange-700' },
  teal: { ring: 'ring-teal-500/30', bg: 'bg-teal-50', text: 'text-teal-700' },
  green: { ring: 'ring-emerald-500/30', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  lime: { ring: 'ring-lime-500/30', bg: 'bg-lime-50', text: 'text-lime-700' },
  indigo: { ring: 'ring-indigo-500/30', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  purple: { ring: 'ring-purple-500/30', bg: 'bg-purple-50', text: 'text-purple-700' },
};

function Badge({ b }: { b: (typeof certificationBadges)[number] }) {
  const tone = TONE_CLASSES[b.tone] ?? TONE_CLASSES.slate;
  return (
    <div
      className="flex shrink-0 flex-col items-center gap-2 px-6"
      title={b.pending ? `${b.label} — pending confirmation` : b.label}
    >
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-full ${tone.bg} ring-4 ${tone.ring} shadow-sm transition-transform duration-300 hover:scale-105`}
      >
        <span className={`text-[11px] font-bold uppercase tracking-tight ${tone.text}`}>
          {b.acronym}
        </span>
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted whitespace-nowrap">
        {b.label}
      </span>
    </div>
  );
}

export default function CertificationStrip({ scope = 'all' }: Props) {
  const visible = certificationBadges.filter(
    (b) => scope === 'all' || b.scope === 'all' || b.scope === scope,
  );
  // Duplicate the list so the marquee scroll loops seamlessly.
  const loop = [...visible, ...visible];

  return (
    <section className="border-y border-ink/5 bg-white">
      <div className="container-x py-10">
        <p className="eyebrow text-center mb-6">Certifications &amp; accreditations</p>
        <div className="cert-marquee group relative overflow-hidden">
          <div className="cert-track flex w-max items-start py-2 group-hover:[animation-play-state:paused]">
            {loop.map((b, i) => (
              <Badge key={`${b.id}-${i}`} b={b} />
            ))}
          </div>
          {/* edge fades */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
        <p className="mt-5 text-center text-xs text-muted">
          Certified to BS 7671 · 30+ years&apos; trade experience · Based in Hampshire
        </p>
      </div>
    </section>
  );
}
