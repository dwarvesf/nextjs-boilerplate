import { User } from 'types/schema'
import fetcher from './fetcher'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

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
