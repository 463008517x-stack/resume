/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#3B82F6',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        ink: {
          base: '#0A0A0A',
          elevated: '#111113',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        paper: {
          base: '#FAFAFA',
          elevated: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      backgroundImage: {
        'aurora-1':
          'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(59,130,246,0.18), transparent 60%)',
        'aurora-2':
          'radial-gradient(ellipse 60% 40% at 80% 30%, rgba(168,85,247,0.10), transparent 60%)',
        noise: "url('/resume/noise.svg')",
        'gradient-accent': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'aurora-shift': 'auroraShift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.8 },
        },
        auroraShift: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)' },
          '50%': { transform: 'translate(2%, 1%) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};
