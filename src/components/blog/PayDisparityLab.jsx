import { useEffect, useId, useState } from 'react'

import { useLatestAudUsdRate } from '@/components/blog/useLatestAudUsdRate'

const LOCAL_BAND_SPREAD_K = 15
const AU_SUPER_RATE = 0.12
const US_SOCIAL_SECURITY_WAGE_BASE_K = 184.5
const US_SOCIAL_SECURITY_RATE = 0.062
const US_MEDICARE_RATE = 0.0145
const DEFAULT_AU_SALARY_K = 200
const DEFAULT_US_SALARY_K = 210
const DEFAULT_AUD_PER_USD = 1.42
const DEFAULT_MELBOURNE_ANCHOR_K = 165

export function PayDisparityLab() {
  const [auSalaryK, setAuSalaryK] = useState(DEFAULT_AU_SALARY_K)
  const [usSalaryK, setUsSalaryK] = useState(DEFAULT_US_SALARY_K)
  const [audPerUsd, setAudPerUsd] = useState(DEFAULT_AUD_PER_USD)
  const [melbourneAnchorK, setMelbourneAnchorK] = useState(DEFAULT_MELBOURNE_ANCHOR_K)
  const [usingManualFx, setUsingManualFx] = useState(false)
  const { date: liveFxDate, rate: liveAudPerUsd, status: fxStatus, refresh: refreshLiveFx } = useLatestAudUsdRate()

  useEffect(() => {
    if (typeof liveAudPerUsd !== 'number' || usingManualFx) return

    setAudPerUsd(Number(liveAudPerUsd.toFixed(4)))
  }, [liveAudPerUsd, usingManualFx])

  const localBandLowK = melbourneAnchorK - LOCAL_BAND_SPREAD_K
  const localBandHighK = melbourneAnchorK + LOCAL_BAND_SPREAD_K
  const localPremiumAudK = auSalaryK - melbourneAnchorK
  const auCashUsdK = auSalaryK / audPerUsd
  const usCashParityAudK = usSalaryK * audPerUsd
  const localPremiumPct = ((auSalaryK / melbourneAnchorK) - 1) * 100

  const auEmployerAudK = auSalaryK * (1 + AU_SUPER_RATE)
  const auEmployerUsdK = auEmployerAudK / audPerUsd
  const usEmployerTaxK =
    Math.min(usSalaryK, US_SOCIAL_SECURITY_WAGE_BASE_K) * US_SOCIAL_SECURITY_RATE +
    usSalaryK * US_MEDICARE_RATE
  const usEmployerCostK = usSalaryK + usEmployerTaxK
  const usEmployerAudK = usEmployerCostK * audPerUsd
  const cashGapAudK = usCashParityAudK - auSalaryK
  const cashGapUsdK = usSalaryK - auCashUsdK
  const employerGapAudK = usEmployerAudK - auEmployerAudK
  const employerParityNeededAuBaseK = usEmployerAudK / (1 + AU_SUPER_RATE)
  const localMarketComparison = formatDirectionalCurrencyK(localPremiumAudK, 'A$', 'above', 'below')
  const cashParityComparisonAud = formatDirectionalCurrencyK(cashGapAudK, 'A$', 'short', 'ahead')
  const employerParityComparisonAud = formatDirectionalCurrencyK(employerGapAudK, 'A$', 'short', 'ahead')
  const usCashLeadComparison = formatDirectionalCurrencyK(cashGapUsdK, 'US$', 'lead', 'behind')
  const setSameStickerNumber = () => setUsSalaryK(auSalaryK)
  const handleFxChange = (value) => {
    setUsingManualFx(true)
    setAudPerUsd(value)
  }
  const useLiveFx = () => {
    if (typeof liveAudPerUsd === 'number') {
      setAudPerUsd(Number(liveAudPerUsd.toFixed(4)))
      setUsingManualFx(false)
      return
    }

    void refreshLiveFx()
  }

  const normalizedBars = [
    {
      label: 'Typical Melbourne market pay',
      value: melbourneAnchorK,
      tone: 'amber',
      note: `Local benchmark range runs from ${formatCurrencyK(localBandLowK, 'A$')} to ${formatCurrencyK(localBandHighK, 'A$')}.`,
    },
    {
      label: 'Australian offer',
      value: auSalaryK,
      tone: 'cyan',
      note: `${localMarketComparison} local Melbourne market.`,
    },
    {
      label: 'Australian offer + 12% super',
      value: auEmployerAudK,
      tone: 'teal',
      note: 'Employer-side cost in Australia after compulsory super is added.',
    },
    {
      type: 'gap',
      positiveLabel: 'Australian offer is {amount} below US cash parity',
      negativeLabel: 'Australian offer is {amount} above US cash parity',
      gapValue: cashGapAudK,
      prefix: 'A$',
    },
    {
      label: 'US comparable salary at FX',
      value: usCashParityAudK,
      tone: 'violet',
      note: `${formatDirectionalCurrencyK(cashGapAudK, 'A$', 'higher than', 'lower than')} the Australian offer.`,
    },
    {
      label: 'US total comp at FX',
      value: usEmployerAudK,
      tone: 'indigo',
      note: `${formatDirectionalCurrencyK(employerGapAudK, 'A$', 'higher than', 'lower than')} Australia's employer-side total.`,
    },
  ]

  const keyMetrics = [
    {
      title: 'Vs Melbourne Market',
      value: localMarketComparison,
      description: 'Positive means the Australian offer sits above the typical local Melbourne role.',
    },
    {
      title: 'Vs US Cash Parity',
      value: cashParityComparisonAud,
      description: 'How far the Australian offer sits below or above the US cash salary once FX is applied.',
    },
    {
      title: 'Vs US Total Comp',
      value: employerParityComparisonAud,
      description: 'Same comparison after adding Australian super and US employer payroll taxes.',
    },
    {
      title: 'US Cash Lead',
      value: usCashLeadComparison,
      description: 'How much more or less the US worker receives in cash once the Australian offer is converted to USD.',
    },
  ]

  return (
    <div id="compensation-lab" className="not-prose relative left-1/2 my-10 w-[min(100vw-1.5rem,92rem)] max-w-none -translate-x-1/2 overflow-hidden rounded-[2rem] border border-slate-300/70 bg-white/70 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:w-[min(100vw-3rem,92rem)] xl:w-[min(100vw-5rem,92rem)] dark:border-slate-600/70 dark:bg-slate-900/45">
      <div className="relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/10" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-400/10" />
        <div className="relative">
          <div className="mt-5 ">
            <h2 className="font-display mt-3 text-3xl leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Set the scenario, compare everything in one currency, then read the gap.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              This lab lets you set the Melbourne benchmark, the actual offer, and the exchange rate, then shows what
              that same setup looks like against US cash and employer-cost parity.
            </p>
          </div>

          {/* <ReadingFlow /> */}

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.92fr_1.15fr_0.93fr]">
            <div className="space-y-5">
              <div className="glass-panel rounded-3xl p-5 sm:p-6">
                {/* <div className="text-lg font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">

                </div> */}
                <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 dark:text-slate-100">
                  First, set the scenario
                </h3>
                <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 dark:text-slate-100">
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Start here. Set the local market, the actual offer, and the exchange rate that the rest of the lab
                  will use.
                </p>

                <div className="mt-5 space-y-4">
                  <ControlSection
                    eyebrow="A. Local Market"
                    title="Typical Melbourne market pay"
                    description="Use this as the local benchmark for an equivalent role in Melbourne. It is the market anchor, not the actual offer."
                  >
                    <SliderField
                      label="Typical Melbourne market pay"
                      tooltip="The typical local Melbourne base salary in AUD for an equivalent role and scope."
                      value={melbourneAnchorK}
                      min={140}
                      max={210}
                      step={5}
                      onChange={setMelbourneAnchorK}
                      valueLabel={formatCurrencyK(melbourneAnchorK, 'A$')}
                    />
                    <div className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-slate-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-slate-300">
                      Local Melbourne band used in the chart: <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrencyK(localBandLowK, 'A$')} - {formatCurrencyK(localBandHighK, 'A$')}</span>
                    </div>
                  </ControlSection>

                  <ControlSection
                    eyebrow="B. Offers"
                    title="Australian offer versus US comparable pay"
                    description="Set the actual Australian offer and the comparable US base salary for the same class of work."
                  >
                    <div className="space-y-5">
                      <SliderField
                        label="Australian offer"
                        tooltip="The actual Australian base salary being offered in AUD. Super is added on top later in the comparison."
                        value={auSalaryK}
                        min={140}
                        max={320}
                        step={5}
                        onChange={setAuSalaryK}
                        valueLabel={formatCurrencyK(auSalaryK, 'A$')}
                      />
                      <SliderField
                        label="US comparable salary"
                        tooltip="The comparable US base salary in USD for the same class of work before employer payroll taxes or benefits."
                        value={usSalaryK}
                        min={140}
                        max={320}
                        step={5}
                        onChange={setUsSalaryK}
                        valueLabel={formatCurrencyK(usSalaryK, 'US$')}
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={setSameStickerNumber}
                        className="inline-flex items-center rounded-full border border-cyan-500/35 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-500/15 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-200"
                      >
                        Set same sticker number
                      </button>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        Copies the Australian offer into the US salary field so you can compare, for example, A$200k versus US$200k directly.
                      </p>
                    </div>
                  </ControlSection>

                  <ControlSection
                    eyebrow="C. Foreign Exchange"
                    title="Exchange rate"
                    description="Use live ECB reference FX or move the slider manually. Every US-to-AUD comparison below uses this rate."
                  >
                    <SliderField
                      label="USD/AUD market FX"
                      tooltip="The cash exchange-rate assumption used to convert the US salary into Australian dollars. The lab auto-loads the latest ECB reference rate when available, but you can still override it."
                      value={audPerUsd}
                      min={1.25}
                      max={1.7}
                      step={0.001}
                      onChange={handleFxChange}
                      valueLabel={`USD/AUD ${audPerUsd.toFixed(3)}`}
                    />

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={useLiveFx}
                        className="inline-flex items-center rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white dark:border-slate-600/70 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        {fxStatus === 'loading' || fxStatus === 'refreshing' ? 'Fetching current FX...' : 'Fetch current FX'}
                      </button>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {typeof liveAudPerUsd === 'number' && liveFxDate
                          ? `Latest ECB reference rate via Frankfurter: ${formatFxPair(liveAudPerUsd)} as of ${formatDate(liveFxDate)}${usingManualFx ? ' (currently overridden manually)' : ''}.`
                          : 'Latest FX loads from Frankfurter using ECB reference data.'}
                      </p>
                    </div>

                    <div className="mt-3 rounded-2xl border border-slate-300/70 bg-slate-50/70 px-4 py-3 text-sm text-slate-700 dark:border-slate-600/60 dark:bg-slate-800/35 dark:text-slate-300">
                      Current lab FX: <span className="font-semibold text-slate-900 dark:text-slate-100">{formatFxPair(audPerUsd)}</span>{' '}
                      <span className="text-slate-500 dark:text-slate-400">This is the rate used for all market-FX conversions in the explorer.</span>
                    </div>
                  </ControlSection>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-300/70 bg-white/70 p-5 shadow-[0_14px_40px_-34px_rgba(15,23,42,0.5)] dark:border-slate-600/60 dark:bg-slate-800/45 sm:p-6">
                {/* <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
                  Step 2
                </div> */}
                <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 dark:text-slate-100">
                  Next, compare everything in Australian dollars
                </h3>
                <div className="text-lg font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Read the bars from top to bottom. They restate the market benchmark, the Australian offer, the
                  Australian employer cost, then the US cash and employer-side numbers in the same frame.
                </p>
                <div className="mt-5">
                  <ComparisonBars bars={normalizedBars} currencyPrefix="A$" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Assumes the Australian number is base salary with super on top. If the Australian figure is package
                  inclusive of super instead, the employer-cost gap grows further.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <InsightCard
                eyebrow="Step 3"
                headline={`The Australian offer is ${formatDirectionalCurrencyK(localPremiumAudK, 'A$', 'above', 'below')} local Melbourne market, and is ${formatRelativePosition(cashGapAudK, 'behind', 'ahead of')} US cash parity.`}
                subheadline={`Cash gap to US salary parity: ${formatRelativeGap(cashGapAudK, 'A$', 'the US cash salary')}. Employer-cost gap after super and payroll taxes: ${formatRelativeGap(employerGapAudK, 'A$', 'the US employer-side total')}.`}
                parityNeeded={formatCurrencyK(employerParityNeededAuBaseK, 'A$')}
                summaryCards={[
                  {
                    eyebrow: 'Local benchmark',
                    value: `${formatCurrencyK(melbourneAnchorK, 'A$')}`,
                    note: 'Typical Melbourne market pay.',
                  },
                  {
                    eyebrow: 'Parity with the US',
                    value: `${formatCurrencyK(usCashParityAudK, 'A$')}`,
                    note: 'US comparable salary at current FX.',
                  },
                ]}
                costGroups={[
                  {
                    eyebrow: 'Australian employee at A${auSalaryK}',
                    title: 'Employer cost from the Australian offer',
                    tone: 'teal',
                    items: [
                      { label: 'In AUD', value: formatCurrencyK(auEmployerAudK, 'A$') },
                      { label: 'In USD', value: formatCurrencyK(auEmployerUsdK, 'US$') },
                    ],
                  },
                  {
                    eyebrow: 'US employee at USD${usSalaryK}',
                    title: 'Employer cost from the US salary',
                    tone: 'indigo',
                    items: [
                      { label: 'In USD', value: formatCurrencyK(usEmployerCostK, 'US$') },
                      { label: 'In AUD', value: formatCurrencyK(usEmployerAudK, 'A$') },
                    ],
                  },
                ]}
              />

              <div className="glass-panel rounded-3xl p-5 sm:p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
                  Supporting Detail
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  These smaller tiles support the Step 3 verdict. Read them as local context, cash gap, employer-cost
                  gap, then the US lead in USD.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {keyMetrics.map((metric) => (
                    <MetricCard
                      key={metric.title}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                    />
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-slate-300/70 bg-white/70 p-5 dark:border-slate-600/60 dark:bg-slate-800/45">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
                    Why The Gap Survives
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    The company does not need to choose between paying Melbourne market and paying US market. It can pay an
                    Australian offer that is <span className="font-semibold text-slate-900 dark:text-slate-100">{formatDirectionalPercent(localPremiumPct, 'above', 'below')}</span> local Melbourne market, while the US worker still holds a <span className="font-semibold text-slate-900 dark:text-slate-100">{usCashLeadComparison}</span> in cash and Australia remains <span className="font-semibold text-slate-900 dark:text-slate-100">{formatDirectionalCurrencyK(employerGapAudK, 'A$', 'short of', 'ahead of')}</span> US employer-side total comp. That middle zone is the arbitrage band.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function ControlSection({ eyebrow, title, description, children }) {
  return (
    <div className="rounded-3xl border border-slate-300/70 bg-white/70 p-5 shadow-[0_14px_40px_-34px_rgba(15,23,42,0.5)] dark:border-slate-600/60 dark:bg-slate-800/40">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
        {eyebrow}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  )
}

function SliderField({ label, tooltip, value, min, max, step, onChange, valueLabel }) {
  const id = useId()

  return (
    <div className="block">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <label
              htmlFor={id}
              className="min-w-0 text-[15px] font-semibold leading-snug text-slate-800 dark:text-slate-100"
            >
              {label}
            </label>
            <TooltipBadge text={tooltip} />
          </div>
          <span className="max-w-full shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-4 py-2 text-[15px] font-semibold text-slate-900 shadow-sm dark:bg-slate-100 dark:text-slate-900">
            {valueLabel}
          </span>
        </div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan-600 dark:bg-slate-700 dark:accent-cyan-400"
      />
      <div className="mt-2 flex justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

function TooltipBadge({ text }) {
  return (
    <span className="group relative inline-flex">
      <span
        tabIndex={0}
        aria-label={text}
        className="inline-flex h-5 w-5 flex-none cursor-help items-center justify-center rounded-full border border-cyan-500/35 bg-cyan-500/10 text-[11px] font-bold text-cyan-800 outline-none transition hover:bg-cyan-500/15 focus-visible:ring-2 focus-visible:ring-cyan-400/70 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-200"
      >
        ?
      </span>
      <span className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-20 w-60 -translate-x-1/2 rounded-2xl border border-slate-300/70 bg-white/95 px-3 py-2 text-xs font-medium leading-relaxed text-slate-700 opacity-0 shadow-xl transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 dark:border-slate-600/70 dark:bg-slate-900/95 dark:text-slate-200">
        {text}
      </span>
    </span>
  )
}

function ComparisonBars({ bars, currencyPrefix }) {
  const maxValue = Math.max(...bars.filter((b) => !b.type).map((bar) => bar.value))
  const toneClasses = {
    amber: 'bg-amber-500',
    cyan: 'bg-cyan-500',
    teal: 'bg-teal-500',
    violet: 'bg-violet-500',
    indigo: 'bg-indigo-500',
  }

  return (
    <div className="space-y-4">
      {bars.map((bar, i) => {
        if (bar.type === 'gap') {
          const isPositiveGap = bar.gapValue > 0
          return (
            <div key={`gap-${i}`} className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 border-t-2 border-dashed border-violet-400/50 dark:border-violet-400/35" />
              <div className="max-w-[22rem] rounded-2xl bg-violet-500/12 px-3.5 py-2 text-center text-xs font-bold leading-relaxed text-violet-800 dark:bg-violet-400/12 dark:text-violet-200 sm:text-sm">
                {formatGapLabel(bar, isPositiveGap)}
              </div>
              <div className="h-px flex-1 border-t-2 border-dashed border-violet-400/50 dark:border-violet-400/35" />
            </div>
          )
        }

        return (
          <div key={bar.label}>
            <div className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
              <div className="min-w-0">
                <div>{bar.label}</div>
                {bar.note ? (
                  <div className="mt-1 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    {bar.note}
                  </div>
                ) : null}
              </div>
              <span className="shrink-0">{formatCurrencyK(bar.value, currencyPrefix)}</span>
            </div>
            <div className="mt-2 h-4 rounded-full bg-slate-200/80 dark:bg-slate-700/70">
              <div
                className={`h-4 rounded-full ${toneClasses[bar.tone]}`}
                style={{ width: `${Math.max((bar.value / maxValue) * 100, 4)}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function InsightCard({ eyebrow, headline, subheadline, parityNeeded, summaryCards = [], costGroups = [] }) {
  const toneClasses = {
    teal: {
      panel: 'border-teal-400/30 bg-teal-500/10 dark:border-teal-400/20 dark:bg-teal-400/10',
      eyebrow: 'text-teal-700/85 dark:text-teal-300/85',
      value: 'text-teal-950 dark:text-teal-50',
      divider: 'border-teal-500/15 dark:border-teal-400/15',
    },
    indigo: {
      panel: 'border-indigo-400/30 bg-indigo-500/10 dark:border-indigo-400/20 dark:bg-indigo-400/10',
      eyebrow: 'text-indigo-700/85 dark:text-indigo-300/85',
      value: 'text-indigo-950 dark:text-indigo-50',
      divider: 'border-indigo-500/15 dark:border-indigo-400/15',
    },
  }

  return (
    <div className="glass-panel-strong rounded-3xl p-5 sm:p-6">
      <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/85 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300/85">
        {eyebrow}
      </div>
      <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 dark:text-slate-100">
        The Result:
        <br />
        {headline}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">{subheadline}</p>

      {summaryCards.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {summaryCards.map((card) => (
            <div
              key={card.eyebrow}
              className="rounded-2xl border border-white/45 bg-white/65 p-4 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.55)] dark:border-slate-500/20 dark:bg-slate-900/35"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {card.eyebrow}
              </div>
              <div className="font-display mt-2 text-3xl leading-none text-slate-900 dark:text-slate-100">
                {card.value}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.note}</div>
            </div>
          ))}
        </div>
      )}

      {parityNeeded && (
        <div className="mt-5 rounded-2xl border border-violet-400/30 bg-violet-500/8 px-5 py-4 dark:border-violet-400/20 dark:bg-violet-400/8">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-700/80 dark:text-violet-300/80">
            Australian base salary target
          </div>
          <div className="mt-1.5 font-display text-4xl leading-none text-slate-900 dark:text-slate-100">
            {parityNeeded}
          </div>
          <div className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            This is the Australian base salary needed for total employer cost to match the US figure once 12% super is added on top.
          </div>
        </div>
      )}

      {costGroups.length > 0 && (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {costGroups.map((group) => {
            const tone = toneClasses[group.tone] ?? toneClasses.teal

            return (
              <div
                key={group.title}
                className={`rounded-[1.6rem] border p-5 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.65)] ${tone.panel}`}
              >
                <div className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${tone.eyebrow}`}>
                  {group.eyebrow}
                </div>
                <div className="mt-2 text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100">
                  {group.title}
                </div>
                <div className={`mt-4 space-y-3 border-t pt-4 ${tone.divider}`}>
                  {group.items.map((item) => (
                    <div key={item.label} className="flex items-end justify-between gap-4">
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.label}</div>
                      <div className={`font-display text-2xl leading-none ${tone.value}`}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function MetricCard({ title, value, description }) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
        {title}
      </div>
      <div className="font-display mt-3 text-4xl leading-none text-slate-900 dark:text-slate-100">{value}</div>
      <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</div>
    </div>
  )
}

function LegendCard({ title, value, tone }) {
  const toneClass = {
    amber: 'bg-amber-500/10 text-amber-800 dark:text-amber-300',
    cyan: 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300',
    teal: 'bg-teal-500/10 text-teal-800 dark:text-teal-300',
    violet: 'bg-violet-500/10 text-violet-800 dark:text-violet-300',
    indigo: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300',
    slate: 'bg-slate-500/10 text-slate-700 dark:text-slate-300',
  }[tone]

  return (
    <div className="rounded-2xl border border-slate-300/70 bg-white/60 p-4 dark:border-slate-600/60 dark:bg-slate-800/40">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{title}</div>
      <div className={`mt-2 inline-flex rounded-full px-3 py-1.5 text-base font-semibold ${toneClass}`}>{value}</div>
    </div>
  )
}

function formatCurrencyK(value, prefix) {
  return `${prefix}${Math.round(value)}k`
}

function formatAbsoluteCurrencyK(value, prefix) {
  return `${prefix}${Math.abs(Math.round(value))}k`
}

function formatDirectionalCurrencyK(value, prefix, positiveWord, negativeWord) {
  return `${formatAbsoluteCurrencyK(value, prefix)} ${value >= 0 ? positiveWord : negativeWord}`
}

function formatDirectionalPercent(value, positiveWord, negativeWord) {
  return `${Math.abs(Math.round(value))}% ${value >= 0 ? positiveWord : negativeWord}`
}

function formatRelativeGap(value, prefix, target) {
  const amount = formatAbsoluteCurrencyK(value, prefix)
  return value >= 0 ? `${amount} short of ${target}` : `${amount} ahead of ${target}`
}

function formatRelativePosition(value, positiveWord, negativeWord) {
  return value >= 0 ? positiveWord : negativeWord
}

function formatGapLabel(bar, isPositiveGap) {
  const template = isPositiveGap ? bar.positiveLabel : bar.negativeLabel
  return template.replace('{amount}', formatCurrencyK(Math.abs(bar.gapValue), bar.prefix))
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function formatFxPair(audPerUsd) {
  return `1 US$ = ${audPerUsd.toFixed(3)} A$ | 1 A$ = US$${(1 / audPerUsd).toFixed(3)}`
}
