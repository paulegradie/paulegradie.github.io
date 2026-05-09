import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllPublications } from '@/lib/getAllPublications'

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

const sectionOrder = ['published', 'patent', 'preprint', 'working-paper', 'thesis']
const sectionLabels = {
  published: 'Publications',
  preprint: 'Preprints',
  'working-paper': 'Working Papers',
  patent: 'Patents',
  thesis: 'Theses',
}
const sectionDescriptions = {
  published: 'Peer-reviewed publications in academic journals.',
  preprint: 'Papers available for public review and comment, submitted or under review.',
  'working-paper': 'Active research that is not yet formally submitted — results and framing may evolve.',
  patent: 'Granted patents from applied AI and machine learning research.',
  thesis: 'Doctoral and postgraduate research dissertations.',
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

function LinkChip({ href, label }) {
  if (!href) return null
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-white/50 px-2.5 py-1 text-xs font-medium text-[color:var(--brand-b)] transition hover:border-[color:var(--brand-a)]/50 hover:text-[color:var(--brand-a)] dark:border-slate-600/50 dark:bg-slate-800/40 dark:text-cyan-300 dark:hover:text-cyan-200"
      onClick={(e) => e.stopPropagation()}
    >
      {label}
      {isExternal && <ExternalLinkIcon className="h-3 w-3" />}
    </a>
  )
}

function PublicationCard({ pub }) {
  const router = useRouter()
  const status = statusConfig[pub.status] ?? statusConfig['working-paper']
  const hasExternalLinks =
    pub.links?.preprint || pub.links?.paper || pub.links?.repo || pub.links?.posts?.length > 0

  return (
    <article
      className="glass-panel group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      onClick={() => router.push(`/research/${pub.slug}`)}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow-label dark:text-slate-400">{pub.venue}</span>
          <span className="text-[color:var(--ink-muted)]" aria-hidden="true">
            ·
          </span>
          <span className="eyebrow-label dark:text-slate-400">{pub.year}</span>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}>
          {status.label}
        </span>
      </div>

      <h3 className="font-display mt-3 text-xl leading-snug">
        <Link
          href={`/research/${pub.slug}`}
          className="text-ink transition-colors hover:text-[color:var(--brand-b)] group-hover:text-[color:var(--brand-b)] dark:text-slate-100 dark:hover:text-blue-300 dark:group-hover:text-blue-300"
          onClick={(e) => e.stopPropagation()}
        >
          {pub.title}
        </Link>
      </h3>

      {pub.authors?.length > 0 && (
        <p className="mt-1.5 text-xs text-muted dark:text-slate-400">{pub.authors.join(', ')}</p>
      )}

      {pub.abstract && (
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted dark:text-slate-300">
          {pub.abstract}
        </p>
      )}

      {hasExternalLinks && (
        <div className="mt-5 flex flex-wrap gap-2">
          {pub.links?.preprint && <LinkChip href={pub.links.preprint} label="Preprint" />}
          {pub.links?.paper && <LinkChip href={pub.links.paper} label="Paper" />}
          {pub.links?.repo && <LinkChip href={pub.links.repo} label="Code" />}
          {pub.links?.posts?.map((post, i) => (
            <LinkChip key={i} href={post.href} label={post.label ?? 'Blog'} />
          ))}
        </div>
      )}
    </article>
  )
}

export default function ResearchIndex({ publications }) {
  const grouped = sectionOrder.reduce((acc, status) => {
    acc[status] = (publications ?? [])
      .filter((p) => p.status === status)
      .sort((a, b) => b.year - a.year)
    return acc
  }, {})

  return (
    <>
      <Head>
        <title>Research - Paul Gradie</title>
        <meta
          name="description"
          content="Research publications, preprints, and working papers by Paul Gradie."
        />
      </Head>
      <SimpleLayout
        title="Research & Publications"
        intro="Academic and applied research across machine learning, continual learning, and computational biology. Includes published work, active preprints, and working papers."
      >
        <div className="space-y-16">
          {sectionOrder.map((status) => {
            const pubs = grouped[status]
            if (!pubs || pubs.length === 0) return null
            return (
              <section key={status} className="space-y-5">
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="font-display shrink-0 text-2xl text-ink">{sectionLabels[status]}</h2>
                    <div className="h-px flex-grow border-t border-slate-300 dark:border-slate-600/70" />
                  </div>
                  <p className="mt-2 text-sm text-muted">{sectionDescriptions[status]}</p>
                </div>
                <div className="space-y-4">
                  {pubs.map((pub) => (
                    <PublicationCard key={pub.slug} pub={pub} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const publications = (await getAllPublications()).map(({ component, ...meta }) => meta)
  return { props: { publications } }
}
