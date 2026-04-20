import {
  Zap,
  Snowflake,
  Building2,
  Sun,
  PlugZap,
  Home,
  Award,
  ShieldCheck,
  Star,
  Handshake,
  Sparkles,
  Clock,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Zap,
  Snowflake,
  Building2,
  Sun,
  PlugZap,
  Home,
  Award,
  ShieldCheck,
  Star,
  Handshake,
  Sparkles,
  Clock,
  BadgeCheck,
};

type Props = { name: string; className?: string; strokeWidth?: number };

export default function ServiceIcon({ name, className = 'h-6 w-6', strokeWidth = 2 }: Props) {
  const Icon = icons[name] ?? Zap;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
