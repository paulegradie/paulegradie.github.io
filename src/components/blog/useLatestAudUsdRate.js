import { useCallback, useEffect, useState } from 'react'

const FX_ENDPOINT = 'https://api.frankfurter.dev/v2/rates?base=USD&quotes=AUD&providers=ECB'

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

      setState({
        date: data.date ?? null,
        error: null,
        rate: typeof data.rate === 'number' ? data.rate : null,
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
