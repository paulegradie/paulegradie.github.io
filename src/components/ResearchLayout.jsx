import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

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

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 3.5H3.5v9h9V9.5M9.5 3.5H12.5M12.5 3.5V6.5M12.5 3.5L6.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const statusConfig = {
  published: {
    label: 'Published',
    className:
      'bg-[color:var(--brand-a)]/15 text-[color:var(--brand-a)] border border-[color:var(--brand-a)]/30 dark:bg-cyan-300/10 dark:text-cyan-300 dark:border-cyan-300/25',
  },
  preprint: {
    label: 'Preprint',
    className:
      'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/25',
  },
  'working-paper': {
    label: 'Working Paper',
    className:
      'bg-[color:var(--brand-b)]/15 text-[color:var(--brand-b)] border border-[color:var(--brand-b)]/30 dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-400/25',
  },
  patent: {
    label: 'Patent',
    className:
      'bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-400/10 dark:text-violet-300 dark:border-violet-400/25',
  },
  thesis: {
    label: 'Doctoral Thesis',
    className:
      'bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-700/30 dark:text-slate-300 dark:border-slate-600/40',
  },
}

function LinkChip({ href, label }) {
  if (!href) return null
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-white/60 px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-b)] transition-all hover:border-[color:var(--brand-a)]/50 hover:bg-white/80 hover:text-[color:var(--brand-a)] dark:border-slate-600/60 dark:bg-slate-800/50 dark:text-cyan-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
    >
      {label}
      {isExternal && <ExternalLinkIcon className="h-3 w-3" />}
    </a>
  )
}

function hasLinks(links) {
  if (!links) return false
  return links.preprint || links.paper || links.repo || links.posts?.length > 0
}

export function ResearchLayout({ children, meta }) {
  const router = useRouter()
  const status = statusConfig[meta.status] ?? statusConfig['working-paper']

  return (
    <>
      <Head>
        <title>{`${meta.title} - Paul Gradie`}</title>
        <meta name="description" content={meta.description ?? meta.abstract ?? ''} />
      </Head>
      <Container className="mt-20 lg:mt-32">
        <div className="xl:relative">
          <div className="w-full">
            <button
              type="button"
              onClick={() => router.push('/research')}
              aria-label="Go back to research"
              className="glass-panel group z-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:-translate-x-0.5 hover:shadow-md xl:absolute xl:-left-12 xl:top-0 xl:mb-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-[color:var(--brand-b)] transition group-hover:stroke-[color:var(--brand-a)] dark:stroke-cyan-300 dark:group-hover:stroke-blue-200" />
            </button>

            <article>
              <header className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="eyebrow-label dark:text-slate-400">{meta.venue}</span>
                  <span className="text-[color:var(--ink-muted)]" aria-hidden="true">
                    ·
                  </span>
                  <span className="eyebrow-label dark:text-slate-400">{meta.year}</span>
                  <span className={`ml-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}>
                    {status.label}
                  </span>
                </div>

                <h1 className="font-display mt-5 text-4xl font-bold leading-tight text-ink dark:text-slate-100 sm:text-5xl">
                  {meta.title}
                </h1>

                {meta.authors?.length > 0 && (
                  <p className="mt-3 text-sm text-muted dark:text-slate-400">
                    {meta.authors.join(', ')}
                  </p>
                )}
              </header>

              {hasLinks(meta.links) && (
                <div className="glass-panel mt-7 flex flex-wrap gap-2 rounded-2xl px-5 py-4">
                  {meta.links?.preprint && <LinkChip href={meta.links.preprint} label="Preprint" />}
                  {meta.links?.paper && <LinkChip href={meta.links.paper} label="Final Paper" />}
                  {meta.links?.repo && <LinkChip href={meta.links.repo} label="Code" />}
                  {meta.links?.posts?.map((post, i) => (
                    <LinkChip key={i} href={post.href} label={post.label ?? 'Blog Post'} />
                  ))}
                </div>
              )}

              {meta.abstract && (
                <div className="surface-card-strong mt-7 rounded-2xl p-6">
                  <p className="eyebrow-label mb-3 dark:text-slate-400">Abstract</p>
                  <p className="text-sm leading-relaxed text-ink dark:text-slate-200">{meta.abstract}</p>
                </div>
              )}

              <Prose className="mt-10">{children}</Prose>

              {meta.citation && (
                <div className="surface-card mt-12 rounded-2xl p-6">
                  <p className="eyebrow-label mb-3 dark:text-slate-400">Cite as</p>
                  <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-muted dark:text-slate-400">
                    {meta.citation}
                  </pre>
                </div>
              )}
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
