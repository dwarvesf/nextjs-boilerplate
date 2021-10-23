import { Pet } from 'types/schema'
import fetcher from './fetcher'

// eslint-disable-next-line prefer-destructuring
const BASE_URL = process.env.BASE_URL

// keys for swr
export const GET_PATHS = {
  getByStatus: '/findByStatus',
}

class Client {
  headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  findPetByStatus(status: Pet['status'] = 'available') {
    return fetcher<Pet[]>(`${BASE_URL}/v2/pet/findByStatus?status=${status}`, {
      headers: this.headers,
    })
  }
}

const client = new Client()

export { client }
