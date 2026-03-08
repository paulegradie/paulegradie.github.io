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
        <div className="md:border-l md:border-[color:var(--line)] md:pl-8 md:dark:border-slate-600/70">
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
      <Card className="surface-card md:col-span-3 mt-3 mb-4 rounded-2xl p-4">
        <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        {article.series && (
          <div className="accent-pill mt-3 text-xs font-semibold">
            <span>{article.series}</span>
            {Number.isFinite(article.seriesPart) && (
              <span className="opacity-75 dark:text-cyan-200/80">Part {article.seriesPart}</span>
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
      <div className="divider-line flex-grow border-t dark:border-slate-600/70" />
      <div className="surface-card-strong mx-5 rounded-2xl px-5 py-2.5 backdrop-blur">
        <span className="font-display text-2xl font-bold text-ink dark:text-slate-100">{year}</span>
      </div>
      <div className="divider-line flex-grow border-t dark:border-slate-600/70" />
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
