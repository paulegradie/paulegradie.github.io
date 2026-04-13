import { LATEST_BIG_MAC_SNAPSHOT } from '@/components/blog/bigMacData'

export function PppGapNarrative({ auSalary, usSalary }) {
  const snapshot = LATEST_BIG_MAC_SNAPSHOT
  const pppAudPerUsd = snapshot.audPerUsdPpp
  const auInUsdPpp = auSalary / pppAudPerUsd
  const auShareOfUsSalary = (auInUsdPpp / usSalary) * 100
  const parityAuSalary = usSalary * pppAudPerUsd

  return (
    <>
      <p>
        Purchasing-power parity, or PPP, is a cost-of-living lens. Instead of asking what currency markets say A$1 is
        worth, it asks what that money buys locally. The <a
          href="https://www.oecd.org/en/data/insights/data-explainers/2024/06/purchasing-power-parities---frequently-asked-questions-faqs.html"
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline decoration-2 underline-offset-2"
        >
          OECD 
        </a> defines PPP as a conversion rate that equalizes the
        purchasing power of different currencies by accounting for price-level differences between countries. Here I am
        using the Economist&apos;s {snapshot.label} Big Mac data as a simple proxy for that idea, not as a formal PPP
        dataset.{' '}

        .
      </p>

      <p>
        On that lens, {formatCurrency(auSalary, 'A$')} works out to about {formatCurrency(Math.round(auInUsdPpp), 'US$')}
        {' '}in purchasing-power terms. However, while this is gentler than the market exchange-rate view (i.e. its closer to parity by a few thousand), it still leaves the
        Australian figure at only about {Math.round(auShareOfUsSalary)} percent of the {formatCurrency(usSalary, 'US$')} {" "}
        salary.
      </p>

      <p>
        In other words, even after adjusting for local prices, the Australian role still lands materially behind. To
        match {formatCurrency(usSalary, 'US$')} on this rough PPP basis, the Melbourne salary would still need to be
        closer to {formatCurrency(Math.round(parityAuSalary), 'A$')}.
      </p>
    </>
  )
}

function formatCurrency(amount, prefix) {
  return `${prefix}${Math.round(amount / 1000)}k`
}
