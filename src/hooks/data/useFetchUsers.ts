import { useFetchWithCache } from 'hooks/useFetchWithCache'
import { client } from 'libs/api'

const KEY = 'GET_USERS'

export function useFetchUsers() {
  return useFetchWithCache(KEY, () => client.getUsers())
}
