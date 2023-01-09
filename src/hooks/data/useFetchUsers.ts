import useSWR from 'swr'
import { client } from 'libs/api'

const SWR_KEY = 'GET_USERS'

export function useFetchUsers() {
  const { data, ...rest } = useSWR(SWR_KEY, () => client.getUsers())

  return {
    users: data,
    ...rest,
  }
}
