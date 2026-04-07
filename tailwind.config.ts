import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          blue:        'rgb(var(--accent) / <alpha-value>)',
          'blue-dark': 'rgb(var(--accent-dark) / <alpha-value>)',
          'blue-light':'var(--accent-light)',
          red:         '#cf181d',
          'red-dark':  '#a51216',
          'red-light': '#FDF0F0',
          navy:        '#1a1a2e',
        },
        brand: {
          primary: 'rgb(var(--accent) / <alpha-value>)',
          accent:  '#cf181d',
          bg:      'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          card:    'var(--brand-card)',
          text:    'var(--brand-text)',
          muted:   'var(--brand-muted)',
          border:  'var(--brand-border)',
          heading: 'var(--brand-heading)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 2px 12px rgba(36,58,143,0.08)',
        'card-hover':'0 8px 24px rgba(36,58,143,0.18)',
        banner:     '0 2px 8px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        card: '12px',
        btn:  '8px',
        pill: '9999px',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
