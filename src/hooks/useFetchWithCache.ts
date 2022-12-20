import useSWR, { Fetcher, Key, SWRConfiguration } from 'swr'
import { useState, useEffect } from 'react'

export function useFetchWithCache<Data = any, Error = any>(
  key: Key,
  fn: Fetcher<Data> | null = null,
  config?: SWRConfiguration<Data, Error>,
) {
  const { data, error, isLoading, ...rest } = useSWR<Data, Error>(
    key,
    fn,
    config,
  )
  const [internalData, setInternalData] = useState<Data>()
  const isFirstLoading = !internalData && !error

  useEffect(() => {
    if (data) {
      setInternalData(data)
    }
  }, [data])

  return { data: internalData, isFirstLoading, isLoading, error, ...rest }
}
