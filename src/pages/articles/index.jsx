import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

export default function ArticlesIndex({ articles }) {
  const featuredArticles = [
    {
      slug: 'we-need-to-start-talking-to-aI-like-it-thinks',
      title: 'We Need to Start Talking to AI Like It Thinks',
    },
    {
      slug: 'proxy-code-formerly-known-as-vibe-coding',
      title: 'Proxy Coding (formerly known as "Vibe Coding")',
    },
    {
      slug: 'guild-driven-development',
      title: 'Guild Driven Development: The Review Guild Model for AI-enabled development',
    },
    {
      slug: 'the-glass-wall-in-global-tech-pay',
      title: 'The Glass Wall in Global Tech Pay',
    },
  ]

  return (
    <>
      <Head>
        <title>Articles - Paul Gradie</title>
        <meta
          name="description"
          content="Writing on software, AI-enabled engineering, product systems, and technical leadership."
        />
      </Head>
      <SimpleLayout
        title="My writing on software, AI, and product systems"
        subtitle=""
        intro="Thoughts on building systems, engineering teams, AI-native workflows, and durable product practice."
      >
        <div className="space-y-8">
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="font-display text-2xl text-ink">Start here</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A few pieces that capture my current thinking about AI-enabled engineering, review workflows,
              and the social systems that make software work.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {featuredArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/articles/${article.slug}`} className="theme-link font-semibold">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
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
