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
          Using the latest ECB reference rate available through Frankfurter, {formatFxPair(audPerUsd)}. That means the
          Australian number converts to about {formatCompactCurrency(auInUsd, 'US$')}, while the US number converts to
          about {formatCompactCurrency(usInAud, 'A$')}.
        </div>
        <div className="mt-3 text-sm" style={{ color: 'var(--ink-muted)' }}>
          {status === 'success' && date ? `Latest business-day FX: ${formatDate(date)}` : 'Loading latest FX...'}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <SnapshotCard label="Australia" value={formatCompactCurrency(auSalary, 'A$')} detail="Sticker number in AUD" />
        <SnapshotCard label="United States" value={formatCompactCurrency(usSalary, 'US$')} detail="Sticker number in USD" />
        <SnapshotCard
          label={`${formatCompactCurrency(auSalary, 'A$')} at FX`}
          value={formatCompactCurrency(auInUsd, 'US$')}
          detail="What the Australian number is worth in USD"
        />
        <SnapshotCard
          label={`${formatCompactCurrency(usSalary, 'US$')} at FX`}
          value={formatCompactCurrency(usInAud, 'A$')}
          detail="What the US number is worth in AUD"
        />
      </div>
    </div>
  )
}

function SnapshotCard({ label, value, detail }) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        border: '1px solid color-mix(in oklab, var(--line-strong) 85%, white 15%)',
        background: 'color-mix(in oklab, var(--surface-strong) 84%, white 16%)',
      }}
    >
      <div
        className="text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: 'color-mix(in oklab, var(--brand-c) 38%, var(--ink-muted))' }}
      >
        {label}
      </div>
      <div className="mt-2 font-display text-3xl" style={{ color: 'var(--ink)' }}>
        {value}
      </div>
      <div className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
        {detail}
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

function formatFxPair(audPerUsd) {
  return `1 US$ = ${audPerUsd.toFixed(4)} A$ and 1 A$ = US$${(1 / audPerUsd).toFixed(4)}`
}
