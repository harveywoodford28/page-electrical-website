type Props = { name: string; className?: string };

export default function ServiceIcon({ name, className = 'h-6 w-6' }: Props) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'Bolt':
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case 'Snowflake':
      return (
        <svg {...common}>
          <path d="M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M2 12h20" />
          <path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2M6 12l-2-2M6 12l-2 2M18 12l2-2M18 12l2 2" />
        </svg>
      );
    case 'Home':
      return (
        <svg {...common}>
          <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V10.5z" />
        </svg>
      );
    case 'Sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      );
    case 'Plug':
      return (
        <svg {...common}>
          <path d="M9 2v4M15 2v4" />
          <path d="M7 6h10v6a5 5 0 01-10 0V6zM12 17v5" />
        </svg>
      );
    default:
      return null;
  }
}
