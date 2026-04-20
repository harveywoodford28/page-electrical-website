'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  before: string;
  after: string;
  label?: string;
  town?: string;
  placeholder?: boolean;
};

/**
 * Horizontal before/after image slider with drag handle.
 * TODO FROM MATT: Replace the placeholder pairs in src/lib/data.ts (beforeAfterExamples)
 * with real matched before/after photos from completed Hampshire jobs.
 */
export default function BeforeAfterSlider({
  before,
  after,
  label,
  town,
  placeholder = true,
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, pct)));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="ba-slider relative aspect-[4/3] w-full bg-ink/5 select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* After (base layer) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={label ? `${label} — after` : 'After'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
            After
          </span>
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={label ? `${label} — before` : 'Before'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Before
          </span>
        </div>

        {/* Drag handle */}
        <motion.div
          className="ba-handle"
          style={{ left: `${position}%` }}
          drag={false}
        >
          <div className="ba-handle-knob">
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            <ChevronRight className="h-4 w-4 -ml-1" strokeWidth={2.5} />
          </div>
        </motion.div>
      </div>

      {(label || town || placeholder) && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            {label && <p className="text-sm font-semibold text-ink">{label}</p>}
            {town && <p className="text-xs text-muted">{town}</p>}
          </div>
          {placeholder && (
            <span className="rounded-full bg-brand/10 text-brand-dark text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
              Placeholder — real photos coming soon
            </span>
          )}
        </div>
      )}
    </div>
  );
}
