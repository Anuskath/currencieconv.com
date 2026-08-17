import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Map standard colors to our design system
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        mute: 'rgb(var(--color-mute) / <alpha-value>)',
        hairline: 'rgb(var(--color-hairline) / <alpha-value>)',
        'hairline-strong': 'rgb(var(--color-hairline-strong) / <alpha-value>)',
        link: 'rgb(var(--color-link) / <alpha-value>)',
        'link-deep': 'rgb(var(--color-link-deep) / <alpha-value>)',
        'link-bg-soft': 'rgb(var(--color-link-bg-soft) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        'error-soft': 'rgb(var(--color-error-soft) / <alpha-value>)',
        'error-deep': 'rgb(var(--color-error-deep) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        'warning-soft': 'rgb(var(--color-warning-soft) / <alpha-value>)',
        'warning-deep': 'rgb(var(--color-warning-deep) / <alpha-value>)',
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        'canvas-soft': 'rgb(var(--color-canvas-soft) / <alpha-value>)',
        'canvas-soft-2': 'rgb(var(--color-canvas-soft-2) / <alpha-value>)',
        cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
        'cyan-soft': 'rgb(var(--color-cyan-soft) / <alpha-value>)',
        'cyan-deep': 'rgb(var(--color-cyan-deep) / <alpha-value>)',
        violet: 'rgb(var(--color-violet) / <alpha-value>)',
        'violet-soft': 'rgb(var(--color-violet-soft) / <alpha-value>)',
        'violet-deep': 'rgb(var(--color-violet-deep) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-develop': 'linear-gradient(to right, #007cf0, #00dfd8)',
        'gradient-preview': 'linear-gradient(to right, #7928ca, #ff0080)',
        'gradient-ship': 'linear-gradient(to right, #ff4d4d, #f9cb28)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Droid Sans Mono', 'Source Code Pro', 'monospace'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '48px', letterSpacing: '-2.4px', fontWeight: '600' }],
        'display-lg': ['32px', { lineHeight: '40px', letterSpacing: '-1.28px', fontWeight: '600' }],
        'display-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.96px', fontWeight: '600' }],
        'display-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.6px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md-strong': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '-0.28px', fontWeight: '400' }],
        'body-sm-strong': ['14px', { lineHeight: '20px', letterSpacing: '-0.28px', fontWeight: '500' }],
        caption: ['12px', { fontWeight: '400' }],
      },
      spacing: {
        'hairline': '1px',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--color-hairline) / 1)',
      },
    },
  },
  plugins: [],
};

export default config;

