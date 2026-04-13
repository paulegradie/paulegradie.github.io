import { BIG_MAC_SERIES } from '@/components/blog/bigMacData'

export function PppEvidenceCharts() {
  return (
    <div className="not-prose my-8 grid gap-6 lg:grid-cols-2">
      <TrendChartCard
        eyebrow="Big Mac Index Over Time"
        title="Market exchange rates versus burger-implied value"
        description="Australia's market exchange rate and the burger-implied purchasing-power rate do not move together. That is why cost-of-living adjustments can soften the story without eliminating the disparity."
        note="Both lines show how many Australian dollars you need to buy one US dollar. Higher means a weaker AUD. The blue line is the actual market exchange rate. The amber line is the rate implied by burger prices: if a Big Mac costs A$8.50 in Australia and US$6.12 in the US, the implied rate is about 1.39. The market line sits above the burger-implied line in most years, which means the AUD trades weaker on currency markets than local prices alone would suggest."
      >
        <TrendChart
          series={BIG_MAC_SERIES}
          valueKeys={[
            { key: 'audPerUsdMarket', label: 'Market exchange rate', color: '#0891b2' },
            { key: 'audPerUsdPpp', label: 'Burger-implied value', color: '#f59e0b' },
          ]}
          minY={1.15}
          maxY={1.65}
          tickFormatter={(value) => `${value.toFixed(2)} A$`}
        />
      </TrendChartCard>

      <TrendChartCard
        eyebrow="Price Difference Over Time"
        title="Australia versus US burger price in US dollars"
        description="Converted at market rates, Australia's burger price sometimes nearly catches the US and sometimes falls well below it. The spread is a simple proxy for cross-country purchasing-power drift."
        note="Both lines show the price of a Big Mac in US dollars. The purple line is what Americans actually pay. The blue line is what Australians pay after converting from AUD at the prevailing market exchange rate. If local prices were fully offsetting the wage gap, the lines would sit much closer together. They do not. The discount is real, but it is small compared with the salary difference this article is examining."
      >
        <TrendChart
          series={BIG_MAC_SERIES}
          valueKeys={[
            { key: 'usBigMacUsd', label: 'US sticker price', color: '#8b5cf6' },
            { key: 'ausBigMacUsd', label: 'Australia at market rate', color: '#2563eb' },
          ]}
          minY={3.5}
          maxY={6.5}
          tickFormatter={(value) => `US$${value.toFixed(1)}`}
        />
      </TrendChartCard>
    </div>
  )
}

function TrendChartCard({ eyebrow, title, description, note, children }) {
  return (
    <div className="rounded-3xl border border-slate-300/70 bg-white/70 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] dark:border-slate-600/60 dark:bg-slate-900/45 sm:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800/80 dark:text-cyan-300/80">
        {eyebrow}
      </div>
      <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <div className="mt-5">{children}</div>
      {note && (
        <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-50/60 px-4 py-3 dark:border-slate-700/50 dark:bg-slate-800/30">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">What this shows</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{note}</p>
        </div>
      )}
    </div>
  )
}

function TrendChart({ series, valueKeys, minY, maxY, tickFormatter }) {
  const width = 640
  const height = 320
  const paddingLeft = 58
  const paddingRight = 22
  const paddingTop = 20
  const paddingBottom = 50
  const plotWidth = width - paddingLeft - paddingRight
  const plotHeight = height - paddingTop - paddingBottom
  const yTicks = 5

  const scaleX = (index) => paddingLeft + (index / (series.length - 1)) * plotWidth
  const scaleY = (value) => paddingTop + ((maxY - value) / (maxY - minY)) * plotHeight
  const tickValues = []

  for (let index = 0; index <= yTicks; index += 1) {
    tickValues.push(minY + ((maxY - minY) / yTicks) * index)
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-3">
        {valueKeys.map((entry) => (
          <div key={entry.key} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span>{entry.label}</span>
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full">
        {tickValues.map((tick) => (
          <g key={tick}>
            <line
              x1={paddingLeft}
              x2={width - paddingRight}
              y1={scaleY(tick)}
              y2={scaleY(tick)}
              stroke="rgba(148,163,184,0.28)"
              strokeDasharray="4 8"
            />
            <text x={paddingLeft - 12} y={scaleY(tick) + 5} textAnchor="end" fontSize="14" fill="rgba(100,116,139,0.95)">
              {tickFormatter(tick)}
            </text>
          </g>
        ))}

        {series.map((point, index) => {
          const showLabel = point.label.endsWith('Jan') && Number(point.label.slice(0, 4)) % 2 === 0
          if (!showLabel && index !== series.length - 1) return null

          return (
            <text
              key={point.date}
              x={scaleX(index)}
              y={height - 12}
              textAnchor="middle"
              fontSize="14"
              fill="rgba(100,116,139,0.95)"
            >
              {index === series.length - 1 ? '2026' : point.label.slice(0, 4)}
            </text>
          )
        })}

        {valueKeys.map((entry) => (
          <g key={entry.key}>
            <path
              d={buildLinePath(series, entry.key, scaleX, scaleY)}
              fill="none"
              stroke={entry.color}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {series.map((point, index) => (
              <circle
                key={`${entry.key}-${point.date}`}
                cx={scaleX(index)}
                cy={scaleY(point[entry.key])}
                r={4}
                fill={entry.color}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

function buildLinePath(series, key, scaleX, scaleY) {
  return series
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${scaleX(index)} ${scaleY(point[key])}`)
    .join(' ')
}
