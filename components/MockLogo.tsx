import { IndustrySlug } from '@/data/industries'

interface Props {
  industry: IndustrySlug
  size?: number
  iconOnly?: boolean
  color?: string
}

const BLUE = '#243a8f'

const logoData: Record<IndustrySlug, { name: string; icon: React.ReactNode }> = {
  insurance: {
    name: 'Your Logo Here',
    icon: (
      <path
        d="M24 4 L6 12 L6 22 C6 34 14 42 24 46 C34 42 42 34 42 22 L42 12 Z"
        fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"
      />
    ),
  },
  lawfirm: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="24" y1="4" x2="24" y2="20" />
        <line x1="10" y1="12" x2="38" y2="12" />
        <path d="M10 12 L6 24 C6 28 10 30 14 30 C18 30 22 28 22 24 L18 12" />
        <path d="M38 12 L42 24 C42 28 38 30 34 30 C30 30 26 28 26 24 L30 12" />
        <line x1="20" y1="20" x2="28" y2="20" />
        <line x1="24" y1="20" x2="24" y2="44" />
        <line x1="14" y1="44" x2="34" y2="44" />
      </g>
    ),
  },
  realestate: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M24 6 L4 24 L10 24 L10 42 L20 42 L20 32 L28 32 L28 42 L38 42 L38 24 L44 24 Z" />
      </g>
    ),
  },
  financial: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,40 16,28 24,34 44,8" />
        <polyline points="34,8 44,8 44,18" />
        <line x1="4" y1="44" x2="44" y2="44" />
      </g>
    ),
  },
  hvac: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="24" y1="4" x2="24" y2="44" />
        <line x1="6.7" y1="14" x2="41.3" y2="34" />
        <line x1="6.7" y1="34" x2="41.3" y2="14" />
        <line x1="24" y1="10" x2="20" y2="6" />
        <line x1="24" y1="10" x2="28" y2="6" />
        <line x1="24" y1="38" x2="20" y2="42" />
        <line x1="24" y1="38" x2="28" y2="42" />
        <line x1="12" y1="17" x2="9" y2="13" />
        <line x1="12" y1="17" x2="8" y2="20" />
        <line x1="36" y1="31" x2="39" y2="35" />
        <line x1="36" y1="31" x2="40" y2="28" />
        <line x1="12" y1="31" x2="8" y2="28" />
        <line x1="12" y1="31" x2="9" y2="35" />
        <line x1="36" y1="17" x2="40" y2="20" />
        <line x1="36" y1="17" x2="39" y2="13" />
      </g>
    ),
  },
  roofing: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M4 28 L24 8 L44 28" />
        <path d="M10 24 L24 12 L38 24" />
        <line x1="24" y1="28" x2="24" y2="44" />
        <line x1="16" y1="44" x2="32" y2="44" />
      </g>
    ),
  },
  salonspa: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M24 4 L32 16 L44 20 L34 30 L36 44 L24 38 L12 44 L14 30 L4 20 L16 16 Z" />
      </g>
    ),
  },
  photography: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="7" />
        <line x1="24" y1="6" x2="24" y2="12" />
        <line x1="24" y1="36" x2="24" y2="42" />
        <line x1="6" y1="24" x2="12" y2="24" />
        <line x1="36" y1="24" x2="42" y2="24" />
        <line x1="11.3" y1="11.3" x2="15.5" y2="15.5" />
        <line x1="32.5" y1="32.5" x2="36.7" y2="36.7" />
        <line x1="36.7" y1="11.3" x2="32.5" y2="15.5" />
        <line x1="15.5" y1="32.5" x2="11.3" y2="36.7" />
      </g>
    ),
  },
  dental: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M14 8 C6 8 4 16 6 24 C8 32 12 40 16 44 C18 44 20 36 24 32 C28 36 30 44 32 44 C36 40 40 32 42 24 C44 16 42 8 34 8 C30 8 28 12 24 12 C20 12 18 8 14 8 Z" />
      </g>
    ),
  },
  plumbing: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4 L18 14 L10 22 L10 34 C10 40 16 44 24 44 C32 44 38 40 38 34 L38 22 L30 14 L30 4" />
        <line x1="14" y1="4" x2="34" y2="4" />
        <line x1="10" y1="28" x2="38" y2="28" />
      </g>
    ),
  },
  trainer: {
    name: 'Your Logo Here',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M28 4 L16 22 L26 22 L20 44 L36 22 L26 22" />
      </g>
    ),
  },
}

export default function MockLogo({ industry, size = 48, iconOnly = false, color }: Props) {
  const data = logoData[industry]
  if (!data) return null

  const iconSize = iconOnly ? size * 0.85 : size * 0.65
  const fontSize = Math.max(10, size * 0.22)
  const strokeColor = color || BLUE

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: strokeColor }}
      >
        {data.icon}
      </svg>
      {!iconOnly && (
        <span
          className="font-bold text-center leading-tight"
          style={{ color: strokeColor, fontSize, fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {data.name}
        </span>
      )}
    </div>
  )
}
