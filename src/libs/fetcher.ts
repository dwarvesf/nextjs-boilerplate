import fetch from 'isomorphic-unfetch'

export type FetcherError = Error & { response: Response }

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init)
  if (res.ok) {
    return res.json()
  }
  const error = new Error(res.statusText) as FetcherError
  error.response = res

  return Promise.reject(error)
}
