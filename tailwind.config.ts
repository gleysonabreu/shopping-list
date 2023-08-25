import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        product: {
          purple: {
            light: '#A881E6',
            dark: '#523480',
            normal: '#7450AC'
          }
        },
        gray: {
          100: '#FBF9FE',
          200: '#AFABB6',
          300: '#252529',
          400: '#17171A',
          500: '#111112',
          600: '#0C0C0D'
        },
        feedback: {
          success: {
            normal: '#2F723D',
            light: '#4E995E'
          }
        },
        support: {
          pink: { 
            light: '#DB5BBF',
            dark: '#251622',
          },
          orange: { 
            light: '#E07B67',
            dark: '#261A17',
          },
          yellow: { 
            light: '#BB9F3A',
            dark: '#211E12',
          },
          green: { 
            light: '#8CAD51',
            dark: '#1C2015',
          },
          blue: { 
            light: '#7B94CB',
            dark: '#1A1D23',
          }
        }
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
