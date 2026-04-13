import { useLatestAudUsdRate } from '@/components/blog/useLatestAudUsdRate'

const FALLBACK_AUD_PER_USD = 1.42
const AU_SUPER_RATE = 0.12
const US_SOCIAL_SECURITY_WAGE_BASE = 184500
const US_SOCIAL_SECURITY_RATE = 0.062
const US_MEDICARE_RATE = 0.0145

export function LiveEmployerCostNarrative({ auSalary = 200000, usSalary = 210000 }) {
  const { date, rate, status } = useLatestAudUsdRate()
  const audPerUsd = rate ?? FALLBACK_AUD_PER_USD
  const isUsingLiveRate = status === 'success' && typeof rate === 'number'

  const auEmployerAud = auSalary * (1 + AU_SUPER_RATE)
  const auEmployerUsd = auEmployerAud / audPerUsd
  const usEmployerTax =
    Math.min(usSalary, US_SOCIAL_SECURITY_WAGE_BASE) * US_SOCIAL_SECURITY_RATE +
    usSalary * US_MEDICARE_RATE
  const usEmployerCost = usSalary + usEmployerTax
  const usEmployerLeadPct = ((usEmployerCost - auEmployerUsd) / auEmployerUsd) * 100

  return (
    <>
      <p>
        This is where cross-country salary conversations often get muddy, so it is worth being precise.
      </p>

      <p>
        Australia has compulsory superannuation. At the 12 percent Superannuation Guarantee rate used in this article,
        {` ${formatCurrency(auSalary, 'A$')}`} as base salary becomes {formatCurrency(Math.round(auEmployerAud), 'A$')}
        {' '}in employer cost. {isUsingLiveRate
          ? `Using the latest business-day exchange rate as of ${formatDate(date)}, that converts to about ${formatCurrency(Math.round(auEmployerUsd), 'US$')}.`
          : `Using the fallback exchange rate, that converts to about ${formatCurrency(Math.round(auEmployerUsd), 'US$')}.`}
      </p>

      <p>
        On the US side, {formatCurrency(usSalary, 'US$')} also costs more than base salary once employer payroll taxes
        are included. Using Social Security and Medicare employer taxes only, that adds about{' '}
        {formatExactCurrency(usEmployerTax, 'US$')}, bringing total employer cost to about{' '}
        {formatExactCurrency(usEmployerCost, 'US$')} before health insurance or any retirement match.
      </p>

      <p>
        So even on an employer-cost basis, the US-based teammate still costs about {Math.round(usEmployerLeadPct)}
        {' '}percent more. And if the {formatCurrency(auSalary, 'A$')} figure is actually package-inclusive of super, not
        base plus super, then the Australian cash salary is lower again and the disparity gets worse.
      </p>
    </>
  )
}

function formatCurrency(amount, prefix) {
  return `${prefix}${Math.round(amount / 1000)}k`
}

function formatExactCurrency(amount, prefix) {
  return `${prefix}${Math.round(amount).toLocaleString('en-AU')}`
}

function formatDate(value) {
  if (!value) return 'the latest available business day'

  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
