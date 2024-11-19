import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/Party-Bots',
        destination: 'https://coin-party.github.io/Party-Bots/',
        permanent: true,
      },
    ];
  },
}

if (isProd) {
  nextConfig = {
    ...nextConfig,
    images: {
      unoptimized: true,
    }
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
