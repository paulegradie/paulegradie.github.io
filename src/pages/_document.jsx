import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  updateMode()
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    // Default to dark mode; persist only explicit light mode with isDarkMode='false'.
    let isDarkMode = window.localStorage.isDarkMode !== 'false'

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-W2FKLDHMXG`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W2FKLDHMXG');
          `
          }}
        />
      </Head>
      <body className="flex min-h-full flex-col antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

