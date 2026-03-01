import { useEffect, useRef } from 'react'
import { Fraunces, Sora } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

const sans = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <div className={`${sans.variable} ${display.variable} site-shell`}>
      <div className="site-backdrop" aria-hidden="true" />
      <div className="relative min-h-screen">
        <Header />
        <main className="pb-12">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
