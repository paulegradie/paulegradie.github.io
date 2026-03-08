import { useState, useEffect } from 'react'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

const RECRUITER_TOKEN = 'MELBOURNE2025'

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <circle cx="12" cy="16" r="1" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function UnlockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <circle cx="12" cy="16" r="1" />
      <path d="M7 11V7a5 5 0 0 1 8 0" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )
}

function TokenInput({ onTokenSubmit, isLoading }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!token.trim()) {
      setError('Please enter the token.')
      return
    }

    setError('')
    onTokenSubmit(token.trim().toUpperCase())
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="glass-panel-strong rounded-3xl p-8">
        <div className="mb-6 text-center">
          <LockIcon className="mx-auto mb-4 h-12 w-12 text-[color:var(--brand-b)] dark:text-cyan-300" />
          <h2 className="text-2xl font-bold text-ink dark:text-slate-100">Access Required</h2>
          <p className="mt-2 text-muted dark:text-slate-300">
            Find the token on my LinkedIn profile to open this page.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="token" className="mb-2 block text-sm font-semibold text-ink dark:text-slate-200">
              Enter Token
            </label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="surface-card w-full rounded-xl px-4 py-3 text-ink placeholder:text-[color:var(--ink-muted)] outline-none transition focus:border-[color:var(--brand-a)] focus:ring-2 focus:ring-[color:var(--brand-a)]/20 dark:border-slate-600/70 dark:bg-slate-800/70 dark:text-slate-100"
              placeholder="Enter token from LinkedIn"
              disabled={isLoading}
            />
          </div>

          {error && <p className="text-sm text-red-600 dark:text-red-300">{error}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl px-4 py-3 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isLoading ? 'Verifying...' : 'Access Page'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted dark:text-slate-400">
            Visit my{' '}
            <a
              href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-link font-semibold underline"
            >
              LinkedIn profile
            </a>{' '}
            to find the token.
          </p>
        </div>
      </div>
    </div>
  )
}

function RecruiterContent() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 text-center">
        <div className="accent-pill mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full p-0">
          <UnlockIcon className="h-8 w-8 text-[color:var(--brand-b)] dark:text-cyan-300" />
        </div>
        <h2 className="text-3xl font-bold text-ink dark:text-slate-100">Welcome, Recruiter</h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-muted dark:text-slate-300">
          I am open to Principal Engineer or Tech Lead roles with US-based companies that value
          product velocity, deep AI capability, and practical leadership.
        </p>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-2xl p-6">
          <div className="mb-4 flex items-center">
            <CheckIcon className="mr-3 h-6 w-6 text-[color:var(--brand-b)] dark:text-cyan-300" />
            <h3 className="text-xl font-semibold text-ink dark:text-slate-100">Work Arrangement</h3>
          </div>
          <p className="text-lg font-semibold text-ink dark:text-slate-100">Remote only, US teams preferred</p>
          <p className="mt-2 text-muted dark:text-slate-300">
            Based in Melbourne, Australia with strong history collaborating across US time zones.
            Open to occasional travel for key planning and alignment.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <div className="mb-4 flex items-center">
            <CheckIcon className="mr-3 h-6 w-6 text-[color:var(--brand-b)] dark:text-cyan-300" />
            <h3 className="text-xl font-semibold text-ink dark:text-slate-100">Compensation</h3>
          </div>
          <p className="text-lg font-semibold text-ink dark:text-slate-100">$265,000 USD base salary target</p>
          <p className="mt-2 text-muted dark:text-slate-300">
            Looking for principal-level scope, with equity participation and comprehensive benefits
            on top of base salary.
          </p>
        </div>
      </div>

      <div className="glass-panel-strong rounded-3xl p-7 sm:p-8">
        <h3 className="font-display text-3xl font-bold text-ink dark:text-slate-100">
          Principal-Level Engineering Leader
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-lg font-semibold text-ink dark:text-slate-100">Technical excellence</h4>
            <ul className="space-y-2 text-muted dark:text-slate-300">
              <li>- Published in Nature: Comms Bio</li>
              <li>- AI/ML patent holder</li>
              <li>- Foundational AI model development experience</li>
              <li>- Model evaluation and productionization expertise</li>
              <li>- PhD plus production engineering depth</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold text-ink dark:text-slate-100">Leadership and innovation</h4>
            <ul className="space-y-2 text-muted dark:text-slate-300">
              <li>- Serial entrepreneur and builder</li>
              <li>- Applied AI systems delivery across product and platform</li>
              <li>- Cross-functional technical leader</li>
              <li>- Proven global remote collaboration</li>
            </ul>
          </div>
        </div>

        <div className="surface-card mt-6 rounded-2xl border-[color:var(--brand-c)]/60 p-4 text-sm text-muted dark:text-slate-200">
          <strong>Unique value:</strong> The intersection of scientific rigor, AI fluency, and
          enterprise software leadership lets me solve high-stakes technical problems quickly and
          with low drama.
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-muted dark:text-slate-300">
          If this profile aligns with your role, let us connect.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
            target="_blank"
            className="rounded-xl px-6 py-3"
          >
            Connect on LinkedIn
          </Button>
          <Button
            href="https://paulgradie.com"
            target="_blank"
            variant="secondary"
            className="rounded-xl px-6 py-3"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Recruiters() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('recruiter-authenticated')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleTokenSubmit = async (token) => {
    setIsLoading(true)
    setError('')

    await new Promise((resolve) => setTimeout(resolve, 900))

    if (token === RECRUITER_TOKEN) {
      setIsAuthenticated(true)
      localStorage.setItem('recruiter-authenticated', 'true')
    } else {
      setError('Invalid token. Please check my LinkedIn profile for the latest token.')
    }

    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>For Recruiters - Paul Gradie</title>
        <meta
          name="description"
          content="Exclusive information for recruiters about Paul Gradie's career expectations and requirements."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <SimpleLayout
        title="For Recruiters"
        intro={
          isAuthenticated
            ? 'Seeking Principal Engineer and Tech Lead opportunities with US-based teams. Here are my expectations for the next chapter of my career.'
            : 'Exclusive information for serious recruiters. Find the access token on my LinkedIn profile.'
        }
      >
        {isAuthenticated ? (
          <RecruiterContent />
        ) : (
          <TokenInput onTokenSubmit={handleTokenSubmit} isLoading={isLoading} />
        )}

        {error && (
          <div className="mx-auto mt-6 max-w-md">
            <div className="rounded-xl border border-red-400/45 bg-red-50/85 p-4 dark:bg-red-900/30">
              <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
            </div>
          </div>
        )}
      </SimpleLayout>
    </>
  )
}



