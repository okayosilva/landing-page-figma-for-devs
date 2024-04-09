import type { Config } from 'tailwindcss'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-01': '#fafafa',
        'gray-02': '#f4f4f5',
        'gray-03': '#e4e4e7',
        'gray-04': '#d4d4d8',
        'gray-05': '#a1a1aa',
        'gray-06': '#71717a',
        'gray-07': '#52525b',
        'gray-08': '#3f3f46',
        'gray-09': '#27272a',
        'gray-10': '#18181b',
        'gray-11': '#09090b',
        'indigo-01': '#f3f2ff',
        'indigo-02': '#e8e8ff',
        'indigo-03': '#d4d5ff',
        'indigo-04': '#b4b1ff',
        'indigo-05': '#8e85ff',
        'indigo-06': '#7a67ff',
        'indigo-07': '#5530f7',
        'indigo-08': '#481ee3',
        'indigo-09': '#3b18bf',
        'indigo-10': '#32169c',
        'indigo-11': '#1c0b6a',
      },
      maxWidth: {
        'size-Ui': '1216px',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
