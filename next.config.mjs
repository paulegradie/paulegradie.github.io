import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
let nextConfig = {
  basePath: "",
  assetPrefix: "",
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  images: {
    loader: 'akamai',
    path: '',
  },
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
