import Head from 'next/head'
import { React, useRef, useState, useEffect } from 'react';

import { useRouter } from 'next/router'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import { findPreviousAndNext } from '@/lib/findPreviousAndNext'
import { floor, round } from "lodash";

const WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN = 200;


function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  previousPathname,
  articles
}) {
  let router = useRouter()
  const { previousArticle, nextArticle } = findPreviousAndNext(articles, meta.date)

  const divRef = useRef(null);
  const [readTime, setReadTime] = useState(15);
  useEffect(() => {

    if (divRef.current) {
      const textContent = divRef.current.innerText;
      const words = textContent.split(/\s/).filter(Boolean);
      const time = round(floor(words.length / WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN, 0));
      setReadTime(time)
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`${meta.title} - Paul Gradie`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="flex flex-col xl:flex-row xl:gap-12">
            {/* Main content */}
            <div className="flex-1 xl:max-w-[46rem]">
              {previousPathname && (
                <button
                  type="button"
                  onClick={() => router.push("/articles")}
                  aria-label="Go back to articles"
                  className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-background-dark dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
                >
                  <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                </button>
              )}
              <article>
                <header className="flex flex-col">
                  <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(meta.date)}</span>
                  </time>
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-300 dark:text-zinc-100 sm:text-5xl">
                    {meta.title}
                  </h1>
                  <div className="mt-3">
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="text-zinc-400 dark:text-zinc-500">~{readTime} minute read</span>
                  </div>
                </header>
                <Prose countRef={divRef} className="mt-6 text-justify">{children}</Prose>
              </article>
            </div>

            {/* Sidebar */}
            <BlogSidebar articles={articles} currentArticle={meta} />
          </div>
          <Divider />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between items-stretch">
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
              />
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

function NavCard(props) {
  const { direction, article, onClick } = props;
  const isPrevious = direction === "Previous";

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col justify-between p-6 bg-zinc-50/5 backdrop-blur-sm border border-zinc-200/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-zinc-50/10 hover:border-zinc-200/20 hover:-translate-y-1 max-w-sm min-h-[140px]"
    >
      {/* Direction indicator */}
      <div className="flex items-center gap-2 mb-3">
        {isPrevious ? (
          <ArrowLeftIcon className="h-4 w-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
        ) : (
          <ArrowRightIcon className="h-4 w-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
        )}
        <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {direction}
        </span>
      </div>

      {/* Article content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-tight mb-2">
          {article.title}
        </h3>
        <time className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {formatDate(article.date)}
        </time>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </div>
  );
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

function BlogSidebar({ articles, currentArticle }) {
  const router = useRouter();

  // Filter out current article and get the 6 most recent others
  const otherArticles = articles
    .filter(article => article.date !== currentArticle.date)
    .slice(0, 6);

  if (otherArticles.length === 0) return null;

  return (
    <aside className="hidden xl:block xl:w-80 xl:flex-shrink-0">
      <div className="sticky top-8">
        <div className="bg-zinc-50/5 backdrop-blur-sm border border-zinc-200/10 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-zinc-200 mb-6 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-teal-400"></span>
            More from me
          </h2>

          <div className="space-y-4">
            {otherArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => router.push(`/articles/${article.slug}`)}
                className="group cursor-pointer p-3 rounded-xl hover:bg-zinc-50/5 transition-all duration-200 border border-transparent hover:border-zinc-200/10"
              >
                <h3 className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-tight mb-1 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {article.title}
                </h3>
                <time className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {formatDate(article.date)}
                </time>
                {article.description && (
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1 overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {article.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/10">
            <button
              onClick={() => router.push('/articles')}
              className="text-sm text-teal-400 hover:text-teal-300 transition-colors font-medium flex items-center gap-1"
            >
              View all articles
              <ArrowRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Divider() {
  return (
    <div className="relative flex py-8 items-center">
      <div className="flex-grow border-t border-zinc-200/20"></div>
      <div className="flex-shrink mx-6 px-4 py-2 bg-zinc-50/5 backdrop-blur-sm rounded-full border border-zinc-200/10">
        <span className="text-sm font-medium text-zinc-300">More from me</span>
      </div>
      <div className="flex-grow border-t border-zinc-200/20"></div>
    </div>
  );
}
