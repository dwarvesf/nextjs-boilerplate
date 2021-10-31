import { User } from 'types/schema'
import fetcher from './fetcher'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.BASE_URL

// keys for swr
export const GET_PATHS = {
  getUsers: '/users',
}

class Client {
  headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  getUsers() {
    return fetcher<User[]>(`${BASE_URL}/users`, {
      headers: this.headers,
    })
  }
}

const client = new Client()

export { client }
