import { useLatestAudUsdRate } from '@/components/blog/useLatestAudUsdRate'

const FALLBACK_AUD_PER_USD = 1.42

export function FxParitySnapshot({ auSalary = 200000, usSalary = 200000 }) {
  const { date, rate, status } = useLatestAudUsdRate()
  const audPerUsd = rate ?? FALLBACK_AUD_PER_USD
  const auInUsd = auSalary / audPerUsd
  const usInAud = usSalary * audPerUsd

  return (
    <div
      className="glass-panel-strong not-prose relative my-8 overflow-hidden rounded-3xl p-6 sm:p-7"
      style={{ color: 'var(--ink)' }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/10" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

      <div className="flex flex-wrap gap-2">
        <span className="section-chip">Same sticker number</span>
        <span className="section-chip">Different currencies</span>
        <span className="section-chip">Latest FX snapshot</span>
      </div>

      <div className="mt-5 max-w-2xl">
        <div
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: 'color-mix(in oklab, var(--brand-a) 78%, var(--ink))' }}
        >
          Live FX Snapshot
        </div>
        <h2 className="font-display mt-3 text-2xl leading-tight sm:text-3xl" style={{ color: 'var(--ink)' }}>
          {formatCurrency(auSalary, 'A$')} in Australia and {formatCurrency(usSalary, 'US$')} in the United States look
          symmetrical on paper. They are not.
        </h2>
        <div className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
          This comparison uses the latest published <SourceLink href="https://www.ecb.europa.eu/stats/euro-exchange-rates/html/index.en.html">ECB reference rate</SourceLink>,
          delivered via the <SourceLink href="https://frankfurter.dev/">Frankfurter API</SourceLink>. That means the Australian number converts to about{' '}
          {formatCompactCurrency(auInUsd, 'US$')}, while the US number converts to about {formatCompactCurrency(usInAud, 'A$')}.
        </div>
        <div
          className="mt-4 rounded-2xl p-4 sm:p-5"
          style={{
            border: '1px solid color-mix(in oklab, var(--line-strong) 82%, white 18%)',
            background: 'color-mix(in oklab, var(--surface-strong) 82%, white 18%)',
          }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'color-mix(in oklab, var(--brand-a) 78%, var(--ink))' }}
          >
            Current USD/AUD Rate
          </div>
          <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1.5">
            <div className="font-display text-3xl leading-none" style={{ color: 'var(--ink)' }}>
              {formatUsdToAud(audPerUsd)}
            </div>
            <div className="text-sm" style={{ color: 'var(--ink-muted)' }}>
              {formatAudToUsd(audPerUsd)}
            </div>
          </div>
          <div className="mt-2 text-sm" style={{ color: 'var(--ink-muted)' }}>
            {status === 'success' && date
              ? `Latest business-day update: ${formatDate(date)}`
              : 'Loading latest business-day FX data...'}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: 'var(--ink-muted)' }}>
          On paper - looks the same
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <SnapshotCard label="Australia" value={formatCompactCurrency(auSalary, 'A$')} detail="Sticker number in AUD" muted />
          <SnapshotCard label="United States" value={formatCompactCurrency(usSalary, 'US$')} detail="Sticker number in USD" muted />
        </div>

        <div className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: 'color-mix(in oklab, var(--brand-a) 78%, var(--ink))' }}>
          After FX conversion - very different
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <SnapshotCard
            label={`${formatCompactCurrency(auSalary, 'A$')} converted`}
            value={formatCompactCurrency(auInUsd, 'US$')}
            detail="What the Australian salary is actually worth in USD"
          />
          <SnapshotCard
            label={`${formatCompactCurrency(usSalary, 'US$')} converted`}
            value={formatCompactCurrency(usInAud, 'A$')}
            detail="What the US salary is worth in AUD"
          />
        </div>
      </div>

      {usSalary > auInUsd && (
        <GapSummary usSalary={usSalary} auInUsd={auInUsd} usInAud={usInAud} />
      )}
    </div>
  )
}

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold underline decoration-2 underline-offset-2 transition-opacity hover:opacity-75"
      style={{ color: 'color-mix(in oklab, var(--brand-a) 75%, var(--ink))' }}
    >
      {children}
    </a>
  )
}

function SnapshotCard({ label, value, detail, muted = false }) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        border: '1px solid color-mix(in oklab, var(--line-strong) 85%, white 15%)',
        background: muted
          ? 'color-mix(in oklab, var(--surface-strong) 60%, transparent 40%)'
          : 'color-mix(in oklab, var(--surface-strong) 84%, white 16%)',
        opacity: muted ? 0.75 : 1,
      }}
    >
      <div
        className="text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: 'color-mix(in oklab, var(--brand-c) 38%, var(--ink-muted))' }}
      >
        {label}
      </div>
      <div
        className={`mt-2 font-display leading-none ${muted ? 'text-2xl' : 'text-3xl'}`}
        style={{ color: 'var(--ink)' }}
      >
        {value}
      </div>
      <div className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
        {detail}
      </div>
    </div>
  )
}

function GapSummary({ usSalary, auInUsd, usInAud }) {
  const cashGapUsd = usSalary - auInUsd
  const cashGapPct = Math.round((cashGapUsd / auInUsd) * 100)

  return (
    <div className="mt-4 rounded-2xl p-5" style={{ background: 'color-mix(in oklab, var(--brand-a) 8%, transparent)', border: '1px solid color-mix(in oklab, var(--brand-a) 25%, transparent)' }}>
      <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'color-mix(in oklab, var(--brand-a) 78%, var(--ink))' }}>
        The gap
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        <div>
          <div className="font-display text-3xl leading-none" style={{ color: 'var(--ink)' }}>
            {formatCompactCurrency(cashGapUsd, 'US$')}
          </div>
          <div className="mt-1.5 text-sm" style={{ color: 'var(--ink-muted)' }}>cash gap in USD</div>
        </div>
        <div>
          <div className="font-display text-3xl leading-none" style={{ color: 'var(--ink)' }}>
            {cashGapPct}%
          </div>
          <div className="mt-1.5 text-sm" style={{ color: 'var(--ink-muted)' }}>more for the US worker</div>
        </div>
        <div>
          <div className="font-display text-3xl leading-none" style={{ color: 'var(--ink)' }}>
            {formatCompactCurrency(usInAud, 'A$')}
          </div>
          <div className="mt-1.5 text-sm" style={{ color: 'var(--ink-muted)' }}>Australian salary needed for parity</div>
        </div>
      </div>
    </div>
  )
}

function formatCompactCurrency(amount, prefix) {
  return `${prefix}${Math.round(amount / 1000)}k`
}

function formatCurrency(amount, prefix) {
  return `${prefix}${(amount / 1000).toFixed(0)}k`
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function formatUsdToAud(audPerUsd) {
  return `1 US$ = ${audPerUsd.toFixed(4)} A$`
}

function formatAudToUsd(audPerUsd) {
  return `1 A$ = US$${(1 / audPerUsd).toFixed(4)}`
}
