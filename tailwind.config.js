
import { colors as allColors } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {

      colors: {
        'primary': '#1E293B',  // Dark Blue Gray - slightly darker
        'secondary': '#475569',  // Cool Gray - slightly darker
        'background': '#E5E7EB',  // Nearly White
        'text': '#E0E0E0',  // Dark Blue Gray - slightly darker
        'success': '#568568',  // Emerald Green - slightly darker
        'error': '#C53030',  // Red - slightly darker
        'primary-dark': '#1B1D22',  // Cool Gray - unchanged
        'secondary-dark': '#A0AEC0',  // Light Gray - unchanged
        'background-dark': '#121212',  // Almost Black - darker
        'text-dark': '#000000',  // Light Gray - brighter
        'success-dark': '#2F855A',  // Emerald Green - slightly darker
        'error-dark': '#C53030',  // Red - slightly darker

        // Enhanced vibrant palette
        'accent-warm': '#F59E0B',     // Amber-500 - warm accent
        'accent-cool': '#3B82F6',     // Blue-500 - cool accent
        'accent-creative': '#8B5CF6', // Violet-500 - creative accent
        'accent-fresh': '#06B6D4',    // Cyan-500 - fresh accent
        'github': '#F97316',          // Orange-500 - GitHub brand
        'linkedin': '#0EA5E9',        // Sky-500 - LinkedIn brand
      },

      // Add gradient utilities
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1E293B 0%, #312E81 50%, #1E293B 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
      }
    },
    fontSize: {
      'xs': ['0.8125rem', { lineHeight: '1.5rem' }],
      'sm': ['0.875rem', { lineHeight: '1.5rem' }],
      'base': ['1rem', { lineHeight: '1.75rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: (theme) => ({
      invert: {
        css: {
          '--tw-prose-body': 'var(--tw-prose-invert-body)',
          '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
          '--tw-prose-links': 'var(--tw-prose-invert-links)',
          '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
          '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
          '--tw-prose-underline-hover':
            'var(--tw-prose-invert-underline-hover)',
          '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
          '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
          '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
          '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
          '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
          '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
          '--tw-prose-code': 'var(--tw-prose-invert-code)',
          '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
          '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
          '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
          '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
          '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
          '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
        },
      },
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.400'),
          '--tw-prose-headings': theme('colors.zinc.200'),
          '--tw-prose-links': theme('colors.teal.100'),
          '--tw-prose-links-hover': theme('colors.teal.600'),
          '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
          '--tw-prose-underline-hover': theme('colors.teal.500'),
          '--tw-prose-bold': theme('colors.zinc.200'),
          '--tw-prose-counters': theme('colors.zinc.300'),
          '--tw-prose-bullets': theme('colors.zinc.200'),
          '--tw-prose-hr': theme('colors.zinc.100'),
          '--tw-prose-quote-borders': theme('colors.zinc.200'),
          '--tw-prose-captions': theme('colors.zinc.400'),
          '--tw-prose-code': theme('colors.zinc.200'),
          '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
          '--tw-prose-pre-code': theme('colors.zinc.100'),
          '--tw-prose-pre-bg': theme('colors.zinc.900'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': theme('colors.zinc.200'),
          '--tw-prose-td-borders': theme('colors.zinc.100'),

          '--tw-prose-invert-body': theme('colors.zinc.400'),
          '--tw-prose-invert-headings': theme('colors.zinc.200'),
          '--tw-prose-invert-links': theme('colors.teal.400'),
          '--tw-prose-invert-links-hover': theme('colors.teal.400'),
          '--tw-prose-invert-underline': theme('colors.teal.400 / 0.3'),
          '--tw-prose-invert-underline-hover': theme('colors.teal.400'),
          '--tw-prose-invert-bold': theme('colors.zinc.200'),
          '--tw-prose-invert-counters': theme('colors.zinc.200'),
          '--tw-prose-invert-bullets': theme('colors.zinc.200'),
          '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
          '--tw-prose-invert-quote-borders': theme('colors.zinc.500'),
          '--tw-prose-invert-captions': theme('colors.zinc.500'),
          '--tw-prose-invert-code': theme('colors.zinc.300'),
          '--tw-prose-invert-code-bg': theme('colors.zinc.200 / 0.05'),
          '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
          '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
          '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),
          '--tw-prose-invert-th-borders': theme('colors.zinc.700'),
          '--tw-prose-invert-td-borders': theme('colors.zinc.800'),

          // Base
          color: 'var(--tw-prose-body)',
          lineHeight: theme('lineHeight.7'),
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7'),
          },

          // Headings
          'h1, h2, h3': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
          },

          h1: {
            fontSize: theme('fontSize.3xl')[0],
            lineHeight: theme('lineHeight.8'),
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.2'),
            textAlign: "left"
          },
          h2: {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.8'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.4'),
            textAlign: "left"
          },
          h3: {
            fontSize: theme('fontSize.base')[0],
            lineHeight: theme('lineHeight.8'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.4'),
            textAlign: "left"
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },

          // Images
          img: {
            borderRadius: theme('borderRadius.3xl'),
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)',
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.semibold'),
          },
          code: {
            display: 'inline-block',
            color: 'var(--tw-prose-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
            backgroundColor: 'var(--tw-prose-code-bg)',
            borderRadius: theme('borderRadius.lg'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
          },
          'a code': {
            color: 'inherit',
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold'),
          },

          // Quotes
          blockquote: {
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: theme('borderWidth.2'),
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            fontStyle: 'italic',
          },

          // Figures
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.3'),
          },
          'figcaption > p': {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6'),
          },
          li: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
            paddingLeft: theme('spacing[3.5]'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },

          // Code blocks
          pre: {
            color: 'var(--tw-prose-pre-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-pre-bg)',
            borderRadius: theme('borderRadius.3xl'),
            padding: theme('spacing.8'),
            overflowX: 'auto',
            border: '1px solid',
            borderColor: 'var(--tw-prose-pre-border)',
          },
          'pre code': {
            display: 'inline',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0,
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.20'),
            marginBottom: theme('spacing.20'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@screen lg': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`,
            },
          },

          // Tables
          table: {
            width: '100%',
            tableLayout: 'auto',
            textAlign: 'left',
            fontSize: theme('fontSize.sm')[0],
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)',
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            verticalAlign: 'bottom',
            paddingBottom: theme('spacing.2'),
          },
          'thead th:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          'thead th:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-td-borders)',
          },
          'tbody tr:last-child': {
            borderBottomWidth: 0,
          },
          'tbody td': {
            verticalAlign: 'baseline',
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: 'var(--tw-prose-th-borders)',
          },
          'tfoot td': {
            verticalAlign: 'top',
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
        },
      },
    }),
  },
}

// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   // Activate purge to eliminate unused classes in production
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: 'class', // Enables the dark mode feature, activated by a 'dark' class
//   theme: {
//     extend: {
//       // Add the new colors, while retaining the existing
//       colors: {
//         'primary': '#B7E4C7',
//         'secondary': '#95D5B2',
//         'background': '#D8F3DC',
//         'success': '#74C69D',
//         'text': '#081C15',
//         'primary-dark': '#DE639A',
//         'secondary-dark': '#1B4332',
//         'background-dark': '#081C15',
//         'success-dark': '#2D6A4F',
//         'text-dark': '#D8F3DC'
//       },
//       // Merge these font families with the default ones
//       fontFamily: {
//         'sans': ['Graphik', 'sans-serif', ...defaultTheme.fontFamily.sans],
//         'serif': ['Merriweather', 'serif'],
//       },
//       // Extend existing typography for 'dark' mode
//       typography: (theme) => ({
//         dark: {
//           css: {
//             color: theme('colors.gray.300'),
//             '[class~="lead"]': {
//               color: theme('colors.gray.400'),
//             },
//             a: {
//               color: theme('colors.gray.100'),
//             },
//             strong: {
//               color: theme('colors.gray.100'),
//             },
//             'ol > li::before': {
//               color: theme('colors.gray.400'),
//             },
//             'ul > li::before': {
//               backgroundColor: theme('colors.gray.600'),
//             },
//             hr: {
//               borderColor: theme('colors.gray.700'),
//             },
//           },
//         },
//       }),
//     },
//     // Your existing fontSize, height, etc can stay here
//     fontSize: {
//       'xs': '12px',
//       'sm': '14px',
//       'base': '16px',
//       'lg': '18px',
//       'xl': '20px',
//       '2xl': '24px',
//       '3xl': '30px',
//       '4xl': '36px',
//       '5xl': '48px',
//       '6xl': '64px'
//     },
//     height: {
//       '1/4': '25%',
//       '1/2': '50%',
//       '3/4': '75%',
//       'full': '100%'
//     }
//   },
//   variants: {
//     // You can specify variants
//     extend: {
//       typography: ['dark'],
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     // Add this plugin if you need form styling
//     // require('@tailwindcss/forms'),
//   ],
// }