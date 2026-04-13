import { useLatestAudUsdRate } from '@/components/blog/useLatestAudUsdRate'

const FALLBACK_AUD_PER_USD = 1.42

export function LiveCashGapNarrative({ auSalary, usSalary }) {
  const { date, rate, status } = useLatestAudUsdRate()
  const audPerUsd = rate ?? FALLBACK_AUD_PER_USD
  const usdPerAud = 1 / audPerUsd
  const auInUsd = auSalary * usdPerAud
  const usLeadPct = ((usSalary - auInUsd) / auInUsd) * 100
  const parityAuSalary = usSalary * audPerUsd
  const isUsingLiveRate = status === 'success' && typeof rate === 'number'

  return (
    <>
      <p>
        {isUsingLiveRate
          ? `Using the latest business-day exchange rate of ${formatUsdPerAud(usdPerAud)} per A$1 (${formatAudPerUsd(audPerUsd)} per US$1) as of ${formatDate(date)}, `
          : `Using a fallback exchange rate of ${formatUsdPerAud(usdPerAud)} per A$1 (${formatAudPerUsd(audPerUsd)} per US$1), `}
        {formatCurrency(auSalary, 'A$')} converts to about {formatCurrency(Math.round(auInUsd), 'US$')}.
      </p>

      <p>
        Against {formatCurrency(usSalary, 'US$')}, that means the US-based teammate is making about{' '}
        {Math.round(usLeadPct)} percent more in cash salary.
      </p>

      <p>
        To close that gap on cash alone, the Melbourne salary would need to be closer to{' '}
        {formatCurrency(Math.round(parityAuSalary), 'A$')}, not {formatCurrency(auSalary, 'A$')}.
      </p>
    </>
  )
}

function formatCurrency(amount, prefix) {
  return `${prefix}${Math.round(amount / 1000)}k`
}

function formatUsdPerAud(usdPerAud) {
  return `US$${usdPerAud.toFixed(4)}`
}

function formatAudPerUsd(audPerUsd) {
  return `A$${audPerUsd.toFixed(4)}`
}

function formatDate(value) {
  if (!value) return 'the latest available business day'

  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
