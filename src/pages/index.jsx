import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { SocialLink } from '@/components/SocialLink'
import portraitImage from '@/images/photos/PaulG.png'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

const RESUME_URL =
  'https://docs.google.com/document/d/1ZGeHJqQbX38He0TcC9hepM6w2rRRd-gM2HD4IrjfT3U/edit?usp=sharing'

const focusAreas = [
  {
    title: 'Platform architecture',
    description:
      'Designing resilient platform systems, migration discipline, and delivery-ready engineering for complex teams.',
  },
  {
    title: 'Product engineering',
    description:
      'Turning ambiguity into useful software through clear plans, incremental delivery, and operational realism.',
  },
  {
    title: 'Applied AI workflows',
    description:
      'Using AI fluency as a capability layer to make engineering, review, and product work more productive.',
  },
  {
    title: 'Founder-led experiments',
    description:
      'Building practical products and productized experiments that sharpen my judgment and engineering craft.',
  },
]

const journey = [
  {
    range: '2024 - Present',
    company: 'Tilt Finance',
    progression: [{ year: '', title: 'Staff Software Engineer' }],
  },
  {
    range: '2020 - 2024',
    company: 'Octopus Deploy',
    progression: [{ year: '', title: 'Senior Software Engineer' }],
  },
  {
    range: '2017 - 2020',
    company: 'Zendesk',
    progression: [{ year: '', title: 'Data Science Engineer (AI Team)' }],
  },
  {
    range: '2014 - 2017',
    company: 'University of Melbourne',
    progression: [{ year: '', title: 'PhD, Developmental Genetics' }],
  },
  {
    range: '2010 - 2013',
    company: 'University of Connecticut',
    progression: [{ year: '', title: 'MSc, Genetics, Genomics, and Bioinformatics' }],
  },
  {
    range: '2007 - 2010',
    company: 'University of Connecticut',
    progression: [{ year: '', title: 'BSc, Molecular and Cell Biology' }],
  },
]

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

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Paul Gradie - Software Engineer and Builder</title>
        <meta
          name="description"
          content="Paul Gradie designs and ships software products, blending research depth, AI fluency, and pragmatic engineering leadership."
        />
      </Head>

      <Container className="mt-8 sm:mt-12">
        <section className="space-y-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="reveal-up">
              {/* <div className="section-chip">Melbourne-based, building for global teams</div> */}
              <h1 className="font-display mt-5 max-w-[13ch] text-5xl leading-[0.95] text-ink sm:max-w-[14ch] sm:text-6xl lg:max-w-[15ch] lg:text-7xl">
                <span className="block">I build software where</span>
                <span className="text-gradient-brand block" style={{ textWrap: 'balance' }}>
                  research, product, and production meet.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m Paul Gradie - a scientist-trained staff software engineer, platform
                leader, founder, and AI-fluent product builder. I help teams move from ambiguity
                to production systems that are testable, observable, maintainable, and useful.
              </p>
            </div>

            <div className="reveal-up reveal-delay-1 lg:pl-6">
              <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-3">
                <div className="absolute inset-x-6 top-4 h-16 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-transparent blur-xl" />
                <Link href="/about" className="group block">
                  <Image
                    src={portraitImage}
                    alt="Paul Gradie portrait"
                    sizes="(min-width: 1024px) 26rem, 80vw"
                    className="aspect-[4/5] w-full rounded-[1.3rem] object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="reveal-up reveal-delay-2">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {focusAreas.map((item) => (
                <div key={item.title} className="glass-panel h-full rounded-3xl p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects" className="rounded-2xl px-5 py-3">
                Explore Projects
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href="/articles" variant="secondary" className="rounded-2xl px-5 py-3">
                Read Articles
              </Button>
              <Button
                href={RESUME_URL}
                target="_blank"
                variant="secondary"
                className="rounded-2xl px-5 py-3"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-1">
              <SocialLink
                href="https://github.com/paulegradie"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel-strong reveal-up reveal-delay-1 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-3xl text-ink">Latest Writing</h2>
              <Link href="/articles" className="theme-link text-sm font-semibold">
                View all
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="surface-card rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-[color:var(--brand-a)]/45 hover:shadow-md"
                >
                  <time className="eyebrow-label dark:text-slate-400">
                    {formatDate(article.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-ink dark:text-slate-100">
                    <Link href={`/articles/${article.slug}`} className="theme-link">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-300">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* <div className="glass-panel reveal-up reveal-delay-2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Current Focus</h2>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((focus) => (
                  <li key={focus} className="flex items-start gap-3 text-sm leading-relaxed text-muted dark:text-slate-200">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-[color:var(--brand-a)] to-[color:var(--brand-b)]" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Education and Career Snapshot</h2>
              <ol className="mt-4 space-y-4">
                {journey.map((item) => (
                  <li
                    key={`${item.company}-${item.range}`}
                    className="timeline-rail border-l pl-4 dark:border-slate-600/80"
                  >
                    <p className="eyebrow-label dark:text-slate-400">{item.range}</p>
                    <p className="mt-1 text-sm font-semibold text-ink dark:text-slate-100">
                      {item.company}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {item.progression.map((step) => (
                        <li
                          key={`${item.company}-${step.year}`}
                          className="text-sm text-muted dark:text-slate-300"
                        >
                          <span className="font-semibold text-[color:var(--ink-muted)] dark:text-slate-400">
                            {step.year}
                          </span>{' '}
                          {step.title}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
