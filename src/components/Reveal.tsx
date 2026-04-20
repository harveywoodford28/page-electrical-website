import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Reveal — simple wrapper. Always-visible content.
 * Stripped of JS-dependent visibility to prevent hydration/IO failures hiding content.
 * Subtle fade-up handled via CSS class in globals.css (.reveal-on-load).
 */
export default function Reveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
