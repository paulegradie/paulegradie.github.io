import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const RESUME_URL =
  'https://docs.google.com/document/d/1IP06d5ijENUG5MEslJsDj1-fTkG3pMK7SgOPqfDPUzU/edit?usp=sharing'

const highlights = [
  'Published in Nature with an issued AI/ML patent',
  'Principal-level scope across platform, product, and delivery',
  'Hands-on experience with foundational model development and evaluation',
  'Applied AI systems shipped from concept through production operations',
]

const metrics = [
  { label: 'Years in software', value: '9+' },
  { label: 'Core domains', value: 'AI, Platform, and Product Engineering' },
  { label: 'Remote collaboration', value: 'US-facing and cross-time-zone proven' },
  { label: 'Leadership scope', value: 'Senior IC operating at principal breadth' },
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
      'Leading high-leverage product and platform work with an emphasis on applied AI, resilient architecture, and disciplined end-to-end execution.',
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
      'Built and evolved production systems at scale while partnering across product, platform, and delivery to improve both developer effectiveness and customer outcomes.',
  },
  {
    company: 'Zendesk',
    location: 'Melbourne, Australia',
    period: '2017 - 2020',
    roles: ['Data Science Engineer, AI Team (2017 - 2020)'],
    summary:
      'Delivered AI-focused capabilities and model-driven features inside a high-scale product environment, bridging data science and software engineering concerns.',
  },
]

const strengths = [
  'Turns ambiguous problem spaces into clear technical plans, decision paths, and shipped outcomes',
  'Combines research depth with practical software delivery and operational realism',
  'Builds systems that are testable, observable, and resilient under real production conditions',
  'Leads through technical clarity, tradeoff discipline, and steady execution rhythm',
]

const credentials = [
  'PhD in developmental genetics with applied research depth',
  'Published in Nature: Comms Bio',
  'AI/ML patent holder',
  'Founder and repeat product builder',
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
        <section className="glass-panel-strong reveal-up relative overflow-hidden rounded-[2rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(183,202,215,0.28),transparent_36%),radial-gradient(circle_at_90%_4%,rgba(95,158,166,0.16),transparent_38%),linear-gradient(140deg,rgba(255,252,248,0.84),rgba(255,249,242,0.78),rgba(226,235,242,0.82))] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(92,143,255,0.18),transparent_32%),radial-gradient(circle_at_88%_8%,rgba(107,231,255,0.14),transparent_34%),linear-gradient(140deg,rgba(8,18,34,0.94),rgba(12,25,46,0.92),rgba(16,37,68,0.9))]"
          />
          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_0.9fr]">
            <div>
              <p className="section-chip">Principal-Level Resume</p>
              <h1 className="font-display mt-5 text-5xl leading-[0.94] text-ink sm:text-6xl">
                Paul Gradie
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Staff-level engineer operating at principal breadth, with a track record spanning
                AI systems, platform architecture, and product delivery in high-trust teams.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="accent-pill">
                  Melbourne-based
                </span>
                <span className="accent-pill">
                  Remote with US teams
                </span>
                <span className="accent-pill">
                  Principal Engineer scope
                </span>
              </div>
            </div>

            <div className="surface-card-strong rounded-2xl p-6">
              <h2 className="font-display text-2xl text-ink">Contact</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  <span className="font-semibold text-ink">LinkedIn:</span>{' '}
                  <a
                    className="theme-link underline decoration-[color:var(--brand-c)] underline-offset-2"
                    href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paul-gradie-phd-743b8b58
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-ink">GitHub:</span>{' '}
                  <a
                    className="theme-link underline decoration-[color:var(--brand-c)] underline-offset-2"
                    href="https://github.com/paulegradie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/paulegradie
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-ink">Portfolio:</span>{' '}
                  <a
                    className="theme-link underline decoration-[color:var(--brand-c)] underline-offset-2"
                    href="https://paulgradie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paulgradie.com
                  </a>
                </li>
              </ul>
              <Button
                href={RESUME_URL}
                target="_blank"
                className="mt-5 flex w-full rounded-xl px-4 py-2.5"
              >
                Open Full CV
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {metrics.map((item, idx) => (
            <article key={item.label} className={`glass-panel reveal-up rounded-2xl p-5 ${idx > 0 ? 'reveal-delay-1' : ''}`}>
              <p className="eyebrow-label dark:text-slate-300">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-ink dark:text-slate-100">{item.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel-strong reveal-up reveal-delay-1 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-3xl text-ink">Career Experience</h2>
            <ol className="mt-6 space-y-5">
              {experience.map((item) => (
                <li key={item.company} className="surface-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-ink dark:text-slate-100">{item.company}</h3>
                    <p className="eyebrow-label dark:text-slate-300">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-sm text-muted dark:text-slate-300">{item.location}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted dark:text-slate-200">
                    {item.roles.map((role) => (
                      <li key={role} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-a)]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-muted dark:text-slate-300">{item.summary}</p>
                </li>
              ))}
            </ol>
          </article>

          <div className="space-y-6">
            <article className="glass-panel reveal-up reveal-delay-2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted dark:text-slate-200">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--brand-a)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Core Strengths</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted dark:text-slate-200">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--brand-b)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-panel reveal-up reveal-delay-3 rounded-3xl p-6 sm:p-7">
              <h2 className="font-display text-2xl text-ink">Credentials</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted dark:text-slate-200">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--brand-a)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="surface-card mt-5 rounded-2xl border-[color:var(--brand-c)]/60 p-4 text-sm text-muted dark:text-slate-200">
                For detailed history, publications, and project context, open the full CV or visit{' '}
                <Link href="/projects" className="theme-link font-semibold underline">
                  Projects
                </Link>{' '}
                and{' '}
                <Link href="/articles" className="theme-link font-semibold underline">
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
