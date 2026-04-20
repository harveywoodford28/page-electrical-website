'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { serviceTowns } from '@/lib/data';

/**
 * Interactive SVG coverage map of the Hampshire / Solent area.
 * Approximate silhouette — not pixel-accurate OS data.
 * Highlights service towns in brand green. Tooltip on hover.
 * Falls back to a text list on small screens for accessibility + mobile UX.
 */
export default function HampshireCoverageMap() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <div>
      {/* Desktop + tablet: SVG map */}
      <div className="hidden md:block relative">
        <div className="rounded-3xl bg-mist border border-ink/5 p-6 md:p-10 shadow-sm">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            role="img"
            aria-label="Map of Page Electrical service area in Hampshire and the Solent"
          >
            {/* Water */}
            <rect x="0" y="0" width="800" height="500" fill="#EAF2F6" />

            {/* Approximate Hampshire mainland outline */}
            <path
              d="M 30 30 L 780 30 L 780 250 L 700 270 L 620 290 L 560 285 L 520 300 L 480 310 L 440 305 L 400 300 L 370 310 L 340 315 L 300 310 L 260 305 L 220 300 L 180 290 L 140 275 L 100 260 L 70 240 L 50 200 L 40 150 L 30 90 Z"
              fill="#DDEBD5"
              stroke="#B6CFA6"
              strokeWidth="2"
            />

            {/* Gosport peninsula (rough) */}
            <path
              d="M 340 305 L 360 340 L 380 360 L 395 345 L 405 315 L 390 305 Z"
              fill="#DDEBD5"
              stroke="#B6CFA6"
              strokeWidth="2"
            />

            {/* Portsea Island (Portsmouth + Southsea) */}
            <path
              d="M 435 315 L 475 320 L 485 360 L 470 385 L 435 380 L 425 345 Z"
              fill="#DDEBD5"
              stroke="#B6CFA6"
              strokeWidth="2"
            />

            {/* Hayling Island */}
            <path
              d="M 525 325 L 575 330 L 585 375 L 540 380 L 525 355 Z"
              fill="#DDEBD5"
              stroke="#B6CFA6"
              strokeWidth="2"
            />

            {/* Label: Solent */}
            <text
              x="400"
              y="440"
              textAnchor="middle"
              fill="#7FA5B8"
              fontSize="14"
              fontStyle="italic"
              fontWeight="500"
            >
              The Solent
            </text>

            {/* Town markers */}
            {serviceTowns.map((t) => {
              const isHover = hoverId === t.slug;
              const r = t.primary ? 12 : 9;
              return (
                <g
                  key={t.slug}
                  onMouseEnter={() => setHoverId(t.slug)}
                  onMouseLeave={() => setHoverId(null)}
                  onFocus={() => setHoverId(t.slug)}
                  onBlur={() => setHoverId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${t.name} — service area`}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Pulse ring on hover */}
                  {isHover && (
                    <circle
                      cx={t.x}
                      cy={t.y}
                      r={r + 8}
                      fill="#5EAD43"
                      opacity="0.25"
                    />
                  )}
                  <circle
                    cx={t.x}
                    cy={t.y}
                    r={r}
                    fill="#5EAD43"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x={t.x}
                    y={t.y - r - 8}
                    textAnchor="middle"
                    fill="#0E0E0E"
                    fontSize={t.primary ? '14' : '12'}
                    fontWeight="600"
                  >
                    {t.name}
                  </text>

                  {/* Tooltip */}
                  {isHover && (
                    <g>
                      <rect
                        x={t.x - 100}
                        y={t.y + r + 8}
                        width="200"
                        height="34"
                        rx="6"
                        fill="#0E0E0E"
                      />
                      <text
                        x={t.x}
                        y={t.y + r + 29}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="500"
                      >
                        ✓ Service area — contact for booking
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          <p className="mt-6 text-sm text-muted text-center">
            Outside these areas? Get in touch — we often travel further for larger jobs.
          </p>
        </div>
      </div>

      {/* Mobile fallback — stacked list */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {serviceTowns.map((t, i) => (
          <motion.div
            key={t.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-center gap-2 rounded-xl bg-white border border-ink/10 px-4 py-3"
          >
            <MapPin className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} />
            <span className="text-sm font-medium text-ink">{t.name}</span>
          </motion.div>
        ))}
        <p className="col-span-2 mt-2 text-xs text-muted text-center">
          Outside these areas? Get in touch — we often travel further for larger jobs.
        </p>
      </div>
    </div>
  );
}
