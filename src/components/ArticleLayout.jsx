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
              <ArrowLeftIcon className="h-4 w-4 stroke-[color:var(--brand-b)] transition group-hover:stroke-[color:var(--brand-a)] dark:stroke-cyan-300 dark:group-hover:stroke-blue-200" />
            </button>
            <article>
              <header className="flex flex-col">
                <time
                  dateTime={meta.date}
                  className="eyebrow-label order-first flex items-center dark:text-slate-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-[color:var(--brand-a)] dark:bg-cyan-300/75" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
                <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-ink dark:text-slate-100 sm:text-5xl">
                  {meta.title}
                </h1>
                {meta.series && (
                  <div className="accent-pill mt-4 text-sm font-semibold">
                    <span>{meta.series}</span>
                    {Number.isFinite(meta.seriesPart) && (
                      <span className="opacity-75 dark:text-cyan-200/80">Part {meta.seriesPart}</span>
                    )}
                  </div>
                )}
                <div className="mt-3 text-sm text-muted dark:text-slate-400">~{readTime} minute read</div>
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
      className={`glass-panel group relative flex min-h-[140px] cursor-pointer flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-a)]/35 hover:shadow-lg ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        {isPrevious ? (
          <ArrowLeftIcon className="h-4 w-4 text-[color:var(--brand-b)] transition-colors group-hover:text-[color:var(--brand-a)] dark:text-cyan-300 dark:group-hover:text-blue-200" />
        ) : (
          <ArrowRightIcon className="h-4 w-4 text-[color:var(--brand-b)] transition-colors group-hover:text-[color:var(--brand-a)] dark:text-cyan-300 dark:group-hover:text-blue-200" />
        )}
        <span className="eyebrow-label transition-colors group-hover:text-[color:var(--ink)] dark:text-slate-400 dark:group-hover:text-slate-200">
          {direction}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold leading-tight text-ink transition-colors group-hover:text-[color:var(--brand-b)] dark:text-slate-100 dark:group-hover:text-blue-300">
          {article.title}
        </h3>
        <time className="text-sm text-muted dark:text-slate-400">{formatDate(article.date)}</time>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--brand-c)]/16 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <div className="divider-line flex items-center justify-between border-b px-4 py-3 dark:border-slate-600/60">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-ink dark:text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-a)]" />
              More from me
            </h2>
            <button onClick={onClose} className="text-xs text-muted transition hover:text-ink dark:text-slate-400 dark:hover:text-slate-100">
              Close
            </button>
          </div>

          <div className="max-h-[52vh] space-y-3 overflow-y-auto px-3 py-3">
            {otherArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => router.push(`/articles/${article.slug}`)}
                className="group cursor-pointer rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[color:var(--line)] hover:bg-white/65 dark:hover:border-slate-600/60 dark:hover:bg-slate-700/40"
              >
                <h3
                  className="mb-1 overflow-hidden text-sm font-medium leading-tight text-ink transition-colors group-hover:text-[color:var(--brand-b)] dark:text-slate-200 dark:group-hover:text-blue-300"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {article.title}
                </h3>
                <time className="text-xs text-muted dark:text-slate-400">{formatDate(article.date)}</time>
                {article.description && (
                  <p
                    className="mt-1 overflow-hidden text-xs text-muted dark:text-slate-400"
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

          <div className="divider-line border-t px-4 py-3 dark:border-slate-600/60">
            <button
              onClick={() => router.push('/articles')}
              className="flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-b)] transition hover:text-[color:var(--brand-a)] dark:text-cyan-300 dark:hover:text-blue-300"
            >
              View all articles
              <ArrowRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onOpen}
          className="surface-card-strong group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[color:var(--brand-b)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-[color:var(--brand-a)] dark:text-cyan-200 dark:hover:text-blue-200"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--brand-a)] shadow-[0_0_10px_rgba(95,158,166,0.65)]" />
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
      <div className="divider-line flex-grow border-t dark:border-slate-600/70" />
      <div className="surface-card-strong mx-6 rounded-full px-4 py-2 backdrop-blur dark:bg-slate-800/75">
        <span className="text-sm font-semibold text-[color:var(--brand-b)] dark:text-cyan-300">Continue Reading</span>
      </div>
      <div className="divider-line flex-grow border-t dark:border-slate-600/70" />
    </div>
  )
}



