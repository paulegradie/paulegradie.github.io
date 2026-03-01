import Head from 'next/head'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { floor, round } from 'lodash'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import { findPreviousAndNext } from '@/lib/findPreviousAndNext'

const WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN = 200

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.75 4.75 12.25 8l-3.5 3.25M12.25 8H3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({ children, meta, previousPathname: _previousPathname, articles }) {
  const router = useRouter()
  const { previousArticle, nextArticle } = findPreviousAndNext(articles, meta.date)

  const contentRef = useRef(null)
  const bottomRef = useRef(null)

  const [readTime, setReadTime] = useState(10)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerDismissed, setDrawerDismissed] = useState(false)

  useEffect(() => {
    if (!contentRef.current) return

    const textContent = contentRef.current.innerText
    const words = textContent.split(/\s/).filter(Boolean)
    const minutes = round(floor(words.length / WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN, 0))

    setReadTime(Math.max(1, minutes))
  }, [])

  useEffect(() => {
    if (drawerDismissed || !bottomRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDrawerVisible(true)
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.01 }
    )

    observer.observe(bottomRef.current)
    return () => observer.disconnect()
  }, [drawerDismissed])

  return (
    <>
      <Head>
        <title>{`${meta.title} - Paul Gradie`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-20 lg:mt-32">
        <div className="xl:relative">
          <div className="w-full">
            <button
              type="button"
              onClick={() => router.push('/articles')}
              aria-label="Go back to articles"
              className="glass-panel group z-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:-translate-x-0.5 hover:shadow-md xl:absolute xl:-left-12 xl:top-0 xl:mb-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-cyan-800 transition group-hover:stroke-blue-700 dark:stroke-cyan-300 dark:group-hover:stroke-blue-200" />
            </button>
            <article>
              <header className="flex flex-col">
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-cyan-600/70 dark:bg-cyan-300/75" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
                <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                  {meta.title}
                </h1>
                {meta.series && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-800 dark:text-cyan-300">
                    <span>{meta.series}</span>
                    {Number.isFinite(meta.seriesPart) && (
                      <span className="text-cyan-800/75 dark:text-cyan-200/80">Part {meta.seriesPart}</span>
                    )}
                  </div>
                )}
                <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">~{readTime} minute read</div>
              </header>
              <Prose
                countRef={contentRef}
                className={[
                  'mt-7 text-justify',
                  meta?.tightListSpacing && '[&_li]:!my-2 [&_li>p]:!my-0 [&_li>ul]:!my-2 [&_li>ol]:!my-2',
                  meta?.tightSectionSpacing && '[&_hr]:!my-10',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {children}
              </Prose>
              <div ref={bottomRef} className="h-px w-full" aria-hidden="true" />
            </article>
          </div>

          <Divider />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {previousArticle && (
              <NavCard
                direction="Previous"
                article={previousArticle}
                onClick={() => router.push(`/articles/${previousArticle?.slug}`)}
              />
            )}
            {nextArticle && (
              <NavCard
                direction="Next"
                article={nextArticle}
                onClick={() => router.push(`/articles/${nextArticle?.slug}`)}
                className={!previousArticle ? 'md:col-start-2' : ''}
              />
            )}
          </div>
        </div>
      </Container>

      <BlogDrawer
        articles={articles}
        currentArticle={meta}
        isVisible={drawerVisible}
        isOpen={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => {
          setDrawerOpen(false)
          setDrawerDismissed(true)
        }}
      />
    </>
  )
}

function NavCard({ direction, article, onClick, className = '' }) {
  const isPrevious = direction === 'Previous'

  return (
    <div
      onClick={onClick}
      className={`glass-panel group relative flex min-h-[140px] cursor-pointer flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/35 hover:shadow-lg ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        {isPrevious ? (
          <ArrowLeftIcon className="h-4 w-4 text-cyan-800 transition-colors group-hover:text-blue-700 dark:text-cyan-300 dark:group-hover:text-blue-200" />
        ) : (
          <ArrowRightIcon className="h-4 w-4 text-cyan-800 transition-colors group-hover:text-blue-700 dark:text-cyan-300 dark:group-hover:text-blue-200" />
        )}
        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 transition-colors group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200">
          {direction}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold leading-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
          {article.title}
        </h3>
        <time className="text-sm text-slate-500 dark:text-slate-400">{formatDate(article.date)}</time>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

function BlogDrawer({ articles, currentArticle, isVisible, isOpen, onOpen, onClose }) {
  const router = useRouter()

  const otherArticles = articles
    .filter((article) => article.slug !== currentArticle.slug)
    .slice(0, 6)

  if (otherArticles.length === 0 || !isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden md:block">
      {isOpen ? (
        <div className="glass-panel-strong max-h-[70vh] w-[20rem] max-w-[85vw] overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-slate-300/60 px-4 py-3 dark:border-slate-600/60">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              More from me
            </h2>
            <button onClick={onClose} className="text-xs text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100">
              Close
            </button>
          </div>

          <div className="max-h-[52vh] space-y-3 overflow-y-auto px-3 py-3">
            {otherArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => router.push(`/articles/${article.slug}`)}
                className="group cursor-pointer rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-slate-300/60 hover:bg-white/65 dark:hover:border-slate-600/60 dark:hover:bg-slate-700/40"
              >
                <h3
                  className="mb-1 overflow-hidden text-sm font-medium leading-tight text-slate-800 transition-colors group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-300"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {article.title}
                </h3>
                <time className="text-xs text-slate-500 dark:text-slate-400">{formatDate(article.date)}</time>
                {article.description && (
                  <p
                    className="mt-1 overflow-hidden text-xs text-slate-500 dark:text-slate-400"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {article.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-300/60 px-4 py-3 dark:border-slate-600/60">
            <button
              onClick={() => router.push('/articles')}
              className="flex items-center gap-1 text-sm font-semibold text-cyan-800 transition hover:text-blue-700 dark:text-cyan-300 dark:hover:text-blue-300"
            >
              View all articles
              <ArrowRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onOpen}
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/45 bg-white/80 px-4 py-2 text-xs font-semibold text-cyan-900 shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-blue-700 dark:bg-slate-800/70 dark:text-cyan-200 dark:hover:text-blue-200"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.82)]" />
          <span>More from me</span>
          <ArrowRightIcon className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}

function Divider() {
  return (
    <div className="relative flex items-center py-12">
      <div className="flex-grow border-t border-slate-300/70 dark:border-slate-600/70" />
      <div className="mx-6 rounded-full border border-cyan-500/30 bg-white/75 px-4 py-2 shadow-sm backdrop-blur dark:bg-slate-800/75">
        <span className="text-sm font-semibold text-cyan-800 dark:text-cyan-300">Continue Reading</span>
      </div>
      <div className="flex-grow border-t border-slate-300/70 dark:border-slate-600/70" />
    </div>
  )
}



