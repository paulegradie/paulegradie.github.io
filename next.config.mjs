import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
let nextConfig = {
  extension: /\.(md|mdx)$/,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,

}

if (isProd) {
  nextConfig = {
    ...nextConfig,
    images: {
      unoptimized: true,
    },
    webpack: config => {

      return {
        ...config,
        rules: [
          // …
          {
            test: /\.mdx?$/,
            use: [
              // Note that Webpack runs right-to-left: `@mdx-js/loader` is used first, then
              // `babel-loader`.
              { loader: 'babel-loader', options: {} },
              {
                loader: '@mdx-js/loader',
                /** @type {import('@mdx-js/loader').Options} */
                options: {},
              },
            ];
          }
        ]
      }
    }
    // experimental: {
    //   mdxRs: true,
    // },
    // images: {
    //   loader: 'akamai',
    //   path: '',
    // },
  }
}


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
