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
          {/* Can modify the margin with ml-8 or so to push the text over for a list of years on the right to link to blogs later */}
          <div className="mx-auto max-w-[46rem]">
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
          <Divider />
          <div className="flex flex-row flex-grow-1 justify-between">
            {
              previousArticle
                ? <NavCard direction="Previous" article={previousArticle} onClick={() => router.push(`/articles/${previousArticle?.slug}`)} />
                : <div />
            }
            <div />
            {nextArticle ? <NavCard direction="Next" article={nextArticle} onClick={() => router.push(`/articles/${nextArticle?.slug}`)} /> : <div />}
          </div>
        </div>
      </Container>
    </>
  )
}

function NavCard(props) {
  return <div onClick={props.onClick} className="block max-w-sm p-6 bg-secondary border border-gray-200 rounded-lg shadow hover:shadow-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer hover:text-gray-800">
    <h5 className="mb-2 text-l font-bold tracking-tight text-gray-200 dark:text-white">{props.article.title}</h5>
    <p className="font-normal text-gray-300  hover:text-gray dark:text-gray-200">{props.article.date}</p>
  </div>
}

function Divider() {
  return (<div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-4 text-gray-400">More from me</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>)
}
