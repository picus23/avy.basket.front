import colors from 'tailwindcss/colors'

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      ...colors,
      light: '#F7F7F7',
      no_active: '#585757',
      primary: '#0085FF',
      link: '#69b1ff'
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        'popBorder': '0 2px 0 rgba(0, 0, 0, 0.02)'
      }
    }
  },
  plugins: [],
}
export default config
