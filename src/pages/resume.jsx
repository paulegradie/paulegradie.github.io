import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'

const RESUME_URL =
  'https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing'

const highlights = [
  'Published in Nature and AI/ML patent holder',
  'Principal-level platform and product engineering scope',
  'Foundational AI model development and evaluation',
  'Applied AI systems delivered from concept to production',
]

const metrics = [
  { label: 'Years in software', value: '9+' },
  { label: 'Core domains', value: 'AI + Platform + Product' },
  { label: 'Remote collaboration', value: 'Global and cross-time-zone' },
  { label: 'Leadership scope', value: 'Senior IC to principal trajectory' },
]

const experience = [
  {
    company: 'Tilt Finance',
    location: 'Melbourne, Australia',
    period: '2024 - Present',
    roles: [
      'Staff Software Engineer (2025 - Present)',
      'Senior Software Engineer (2024 - 2025)',
    ],
    summary:
      'Driving high-leverage product and platform work, with a focus on applied AI, resilient architecture, and end-to-end delivery.',
  },
  {
    company: 'Octopus Deploy',
    location: 'Remote / Australia',
    period: '2020 - 2024',
    roles: [
      'Senior Software Engineer (2023 - 2024)',
      'Intermediate Software Engineer (2020 - 2023)',
    ],
    summary:
      'Built production systems at scale and partnered across product, platform, and delivery teams to improve developer and customer outcomes.',
  },
  {
    company: 'Zendesk',
    location: 'Melbourne, Australia',
    period: '2017 - 2020',
    roles: ['Data Science Engineer, AI Team (2017 - 2020)'],
    summary:
      'Worked on AI-focused capabilities and model-driven features in a high-impact product environment.',
  },
]

const strengths = [
  'Turns ambiguous problem spaces into clear technical plans and shipped outcomes',
  'Combines research depth with practical software delivery',
  'Builds systems that are operable, testable, and resilient under real load',
  'Leads through technical clarity, thoughtful tradeoffs, and execution rhythm',
]

const credentials = [
  'PhD background with applied research depth',
  'Published in Nature',
  'AI/ML patent holder',
  'Founder and serial builder experience',
]

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume - Paul Gradie</title>
        <meta
          name="description"
          content="A styled resume page for Paul Gradie: principal-level software engineer with deep AI capability, platform architecture experience, and delivery leadership."
        />
      </Head>

      <Container className="mt-8 sm:mt-12">
        <section className="reveal-up relative overflow-hidden rounded-[2rem] border border-slate-300/70 bg-slate-950 text-slate-100 shadow-2xl shadow-slate-900/35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.3),transparent_38%),radial-gradient(circle_at_88%_5%,rgba(14,165,233,0.32),transparent_42%),linear-gradient(130deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92),rgba(12,74,110,0.88))]" />
          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_0.9fr]">
            <div>
              <p className="section-chip border-cyan-300/45 bg-cyan-400/15 text-cyan-100">
                Principal-Level Resume
              </p>
              <h1 className="font-display mt-5 text-5xl leading-[0.94] sm:text-6xl">
                Paul Gradie
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Software Engineer, founder, and inventor focused on high-impact systems at the
                intersection of AI, product, and platform engineering.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1.5 text-cyan-100">
                  Melbourne-based
                </span>
                <span className="rounded-full border border-blue-300/40 bg-blue-400/10 px-4 py-1.5 text-blue-100">
                  Remote with US teams
                </span>
                <span className="rounded-full border border-slate-300/40 bg-slate-300/10 px-4 py-1.5 text-slate-100">
                  Principal Engineer scope
                </span>
              </div>
            </div>

            <div className="glass-panel-strong rounded-2xl border-white/20 p-6">
              <h2 className="font-display text-2xl text-slate-100">Contact</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-white">LinkedIn:</span>{' '}
                  <a
                    className="underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-200"
                    href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paul-gradie-phd-743b8b58
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-white">GitHub:</span>{' '}
                  <a
                    className="underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-200"
                    href="https://github.com/paulegradie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/paulegradie
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-white">Portfolio:</span>{' '}
                  <a
                    className="underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-200"
                    href="https://paulgradie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paulgradie.com
                  </a>
                </li>
              </ul>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400"
              >
                Open Full CV
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {metrics.map((item, idx) => (
            <article key={item.label} className={`glass-panel reveal-up rounded-2xl p-5 ${idx > 0 ? 'reveal-delay-1' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-300">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel-strong reveal-up reveal-delay-1 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-3xl text-ink">Career Experience</h2>
            <ol className="mt-6 space-y-5">
              {experience.map((item) => (
                <li key={item.company} className="rounded-2xl border border-slate-300/60 bg-white/65 p-5 dark:border-slate-600/65 dark:bg-slate-900/45">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.company}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.location}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                    {item.roles.map((role) => (
                      <li key={role}>- {role}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.summary}</p>
                </li>
              ))}
            </ol>
          </article>

          <div className="space-y-6">
            <article className="glass-panel reveal-up reveal-delay-2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Highlights</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>

            <article className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Core Strengths</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {strengths.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>

            <article className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Credentials</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {credentials.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-slate-700 dark:text-slate-200">
                For detailed history, publications, and project context, open the full CV or visit{' '}
                <Link href="/projects" className="font-semibold text-cyan-800 underline dark:text-cyan-300">
                  Projects
                </Link>{' '}
                and{' '}
                <Link href="/articles" className="font-semibold text-cyan-800 underline dark:text-cyan-300">
                  Articles
                </Link>
                .
              </div>
            </article>
          </div>
        </section>
      </Container>
    </>
  )
}
