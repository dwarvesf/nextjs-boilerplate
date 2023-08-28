import { isSSR } from '@dwarvesf/react-utils'
import Axios, { AxiosRequestConfig } from 'axios'
import { getToken } from 'context/auth'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL })

export const requester = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  // Add token to request header
  const accessToken = isSSR() ? '' : getToken()
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    }
  }
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data,
  )

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query')
  }

  return promise
}

export default requester
