import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Paul Gradie</title>
        <meta
          name="description"
          content="My voice on building software, artificial intelligence, life, and much more."
        />
      </Head>
      <SimpleLayout
        title="In My Own Words"
        subtitle="...with a little help from AI"
        intro="On software, artificial intelligence, personal experiences, and more."
      >
        <div className="md:border-l md:border-slate-300/70 md:pl-8 md:dark:border-slate-600/70">
          <div className="flex max-w-3xl flex-col space-y-14">
            {groupByYear(articles).map((group, i) => {
              const year = group[0].date.split('-')[0]
              return (
                <div key={`${year}-${i}`}>
                  <Divider year={year} />
                  {group.map((article) => (
                    <Article key={article.slug} article={article} />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3 mt-3 mb-4 rounded-2xl border border-slate-300/50 bg-white/55 p-4 dark:border-slate-600/60 dark:bg-slate-800/45">
        <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        {article.series && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-300">
            <span>{article.series}</span>
            {Number.isFinite(article.seriesPart) && (
              <span className="text-cyan-800/70 dark:text-cyan-200/80">Part {article.seriesPart}</span>
            )}
          </div>
        )}
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

function groupByYear(arr) {
  arr.sort((a, b) => new Date(b.date) - new Date(a.date))

  const groupedArr = []

  for (const obj of arr) {
    const year = new Date(obj.date).getFullYear()

    let yearGroup = groupedArr.find(
      (subArr) => new Date(subArr[0].date).getFullYear() === year
    )

    if (yearGroup) {
      yearGroup.push(obj)
    } else {
      groupedArr.push([obj])
    }
  }

  return groupedArr
}

function Divider({ year }) {
  return (
    <div className="relative flex items-center py-7">
      <div className="flex-grow border-t border-slate-300/70 dark:border-slate-600/70" />
      <div className="mx-5 rounded-2xl border border-cyan-500/30 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur dark:bg-slate-800/70">
        <span className="font-display text-2xl font-bold text-slate-800 dark:text-slate-100">{year}</span>
      </div>
      <div className="flex-grow border-t border-slate-300/70 dark:border-slate-600/70" />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}