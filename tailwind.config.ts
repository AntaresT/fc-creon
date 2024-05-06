import type { Config } from 'tailwindcss'

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
      fontFamily: {
        monument: ['var(--font-monument)'],
        satoshi: ['var(--font-satoshi)'],
      },
      spacing: {
        '8vh': '80vh',
      },
      zIndex: {
        '2': '2',
      },
      height: {
        '800': '800px',
        tiny: '1px',
        '485': '485px',
        '600px': '600px',
        '700px': '700px',
      },
      width: {
        '800': '800px',
        '35r': '35rem',
        '45r': '45rem',
        '75%': '75%',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '700px': '700px',
      },
      padding: {
        '12px': '12px',
        '16px': '16px',
      },
      colors: {
        darkCian: '#13171D',
      },
    },
  },
  plugins: [],
}
export default config
