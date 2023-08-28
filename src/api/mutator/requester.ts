import Axios, { AxiosRequestConfig } from 'axios'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.BASE_URL

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL })

export const requester = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
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
