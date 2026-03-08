import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/getAllArticles'
import { SocialLink } from '@/components/SocialLink'
import { formatDate } from '@/lib/formatDate'

import portraitImage from '@/images/portrait.jpg'
import { Button } from '@/components/Button'

const RESUME_URL = 'https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing'

const focusAreas = [
  'Foundational AI model development and evaluation',
  'Applied AI systems and product delivery',
  'Principal-level platform architecture',
  'Cross-time-zone technical leadership',
]

const journey = [
  {
    range: '2024 - Present',
    company: 'Tilt Finance',
    progression: [
      { year: '', title: 'Staff Software Engineer' },
    ],
  },
  {
    range: '2020 - 2024',
    company: 'Octopus Deploy',
    progression: [
      { year: '', title: 'Senior Software Engineer' },
    ],
  },
  {
    range: '2017 - 2020',
    company: 'Zendesk',
    progression: [
      { year: '', title: 'Data Science Engineer (AI Team)' },
    ],
  },
  {
    range: '2014 - 2017',
    company: 'University of Melbourne',
    progression: [
      { year: '', title: 'PhD, Developmental Genetics' },
    ],
  },
  {
    range: '2010 - 2013',
    company: 'University of Connecticut',
    progression: [
      { year: '', title: 'MSc, Genetics, Genomics, and Bioinformatics' },
    ],
  },
  {
    range: '2007 - 2010',
    company: 'University of Connecticut',
    progression: [
      { year: '', title: 'BSc, Molecular and Cell Biology' },
    ],
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
        <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <div className="section-chip">Melbourne-based, building for global teams</div>
            <h1 className="font-display mt-5 text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              I turn complex ideas into
              <span className="text-gradient-brand block">high-impact software</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              I am Paul Gradie, a software engineer, founder, and inventor with a PhD background.
              I help teams move from research to production by building foundational AI models,
              applied AI systems, and resilient software that keeps delivering under real-world
              pressure.
            </p>
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
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel-strong reveal-up reveal-delay-1 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-3xl text-ink">Latest Writing</h2>
              <Link
                href="/articles"
                className="theme-link text-sm font-semibold"
              >
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
            <div className="glass-panel reveal-up reveal-delay-2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Current Focus</h2>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((focus) => (
                  <li key={focus} className="flex items-start gap-3 text-sm leading-relaxed text-muted dark:text-slate-200">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-[color:var(--brand-a)] to-[color:var(--brand-b)]" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Education and Career Snapshot</h2>
              <ol className="mt-4 space-y-4">
                {journey.map((item) => (
                  <li key={`${item.company}-${item.range}`} className="timeline-rail border-l pl-4 dark:border-slate-600/80">
                    <p className="eyebrow-label dark:text-slate-400">
                      {item.range}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink dark:text-slate-100">
                      {item.company}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {item.progression.map((step) => (
                        <li key={`${item.company}-${step.year}`} className="text-sm text-muted dark:text-slate-300">
                          <span className="font-semibold text-[color:var(--ink-muted)] dark:text-slate-400">{step.year}</span>{' '}
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
