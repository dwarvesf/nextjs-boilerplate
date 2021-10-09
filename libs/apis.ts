import fetcher from './fetcher'

export interface GetReposParams {
  user: string
  repo: string
}

export interface ReposResponse {
  forks_count: number
  stargazers_count: number
  watchers: number
}

export const BASE_URL = 'https://api.github.com/repos'

// keys for swr
export const GET_PATHS = {
  getRepoBySlug: '/:user/:repo',
}

class Client {
  headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  getRepoBySlug(params: GetReposParams) {
    return fetcher<ReposResponse>(`${BASE_URL}/${params.user}/${params.repo}`, {
      headers: this.headers,
    })
  }
}

const client = new Client()

export { client }
