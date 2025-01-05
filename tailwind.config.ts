import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      screens: {
         sm: '36em', // 576px
         md: '48em', // 768px
         lg: '62em', // 992px
         xl: '75em', // 1200px
         '2xl': '87.5em', // 1400px
      },
      fontSize: {
         xs: 'var(--fluid-12-14)',
         sm: 'var(--fluid-14-15)',
         base: 'var(--fluid-14-16)',
         lg: 'var(--fluid-15-17)',
         xl: 'var(--fluid-16-18)',
         '2xl': 'var(--fluid-17-20)',
         '3xl': 'var(--fluid-19-25)',
         '4xl': 'var(--fluid-20-30)',
         '5xl': 'var(--fluid-25-40)',
      },
      extend: {
         colors: {
            primary: colors.slate[950],
            secondary: colors.slate[800],
            tertiary: colors.slate[700],
            quaternary: 'hsl(216 20 95)',
            quinary: colors.white,
         },
         boxShadow: {
            custom: '0px 1px 4px hsl(0 0 0 / 0.2)',
         },
         spacing: {
            'spacing-1': 'var(--fluid-2-4)',
            'spacing-2': 'var(--fluid-5-7)',
            'spacing-3': 'var(--fluid-7-10)',
            'spacing-4': 'var(--fluid-10-12)',
            'spacing-5': 'var(--fluid-13-16)',
            'spacing-6': 'var(--fluid-8-17)',
            'spacing-7': 'var(--fluid-12-19)',
            'spacing-8': 'var(--fluid-14-23)',
            'spacing-9': 'var(--fluid-13-25)',
            'spacing-10': 'var(--fluid-20-32)',
            'spacing-11': 'var(--fluid-28-42)',
            'spacing-12': 'var(--fluid-68-78)',
            'spacing-13': 'var(--fluid-130-150)',
         },
         keyframes: {
            loading: {
               '0%': { color: '#000000' },
               '50%': { color: '#cccccc' },
               '100%': { color: '#000000' },
            },
         },
      },
   },
   plugins: [],
} satisfies Config
