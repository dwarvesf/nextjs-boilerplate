import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { emitter } from 'utils/emitter'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL })

// Interceptors
const handleResponseSuccess = (response: AxiosResponse) => response
const handleResponseFail = async (error: any) => {
  // 401 error code -> unauthorized
  if (error.response?.status === 401) {
    emitter.emit('FORCE_LOGOUT')
  }
  return Promise.reject(error)
}

export const requester = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  // Add token to request header
  // const accessToken = isSSR() ? '' : getToken()
  if (ACCESS_TOKEN) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Access-Control-Request-Headers': `POST`,
    }
  }
  // Add interceptors
  AXIOS_INSTANCE.interceptors.response.use(
    handleResponseSuccess,
    handleResponseFail,
  )

  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data,
  )

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by requester')
  }

  return promise
}

export default requester
