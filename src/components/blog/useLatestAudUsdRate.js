import { useCallback, useEffect, useState } from 'react'

const FX_ENDPOINT = 'https://api.frankfurter.dev/v2/rates?base=USD&quotes=AUD&providers=ECB'
const TARGET_QUOTE = 'AUD'

function parseRate(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }

  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value)
    return Number.isFinite(parsed) ? parsed : null
  }

  return null
}

function extractFxFromRecord(record) {
  if (!record || typeof record !== 'object') {
    return { date: null, rate: null }
  }

  const directRate = parseRate(record.rates?.[TARGET_QUOTE] ?? record.rate ?? null)
  if (directRate !== null) {
    return { date: record.date ?? null, rate: directRate }
  }

  return { date: record.date ?? null, rate: null }
}

function extractFxSnapshot(payload) {
  if (Array.isArray(payload)) {
    for (const record of payload) {
      const { date, rate } = extractFxFromRecord(record)
      if (rate !== null) {
        return { date, rate }
      }
    }
    return { date: null, rate: null }
  }

  if (payload && Array.isArray(payload.data)) {
    return extractFxSnapshot(payload.data)
  }

  return extractFxFromRecord(payload)
}

export function useLatestAudUsdRate() {
  const [state, setState] = useState({
    date: null,
    error: null,
    rate: null,
    status: 'idle',
  })

  const refresh = useCallback(async () => {
    setState((current) => ({
      ...current,
      error: null,
      status: current.rate ? 'refreshing' : 'loading',
    }))

    try {
      const response = await fetch(FX_ENDPOINT)

      if (!response.ok) {
        throw new Error(`FX request failed with status ${response.status}`)
      }

      const data = await response.json()
      const { date, rate } = extractFxSnapshot(data)

      setState({
        date,
        error: null,
        rate,
        status: 'success',
      })
    } catch (error) {
      setState((current) => ({
        ...current,
        error: error instanceof Error ? error.message : 'Unable to load FX data',
        status: 'error',
      }))
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return {
    ...state,
    refresh,
  }
}
