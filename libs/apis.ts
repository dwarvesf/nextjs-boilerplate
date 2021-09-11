/* eslint-disable camelcase */
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

export const Repository = {
  getURL: '/api/data',
  get() {
    return fetcher<string[]>(this.getURL)
  },
  getBySlugURL: 'https://api.github.com/repos',
  getBySlug(params: GetReposParams) {
    return fetcher<ReposResponse>(
      `${this.getBySlugURL}/${params.user}/${params.repo}`,
    )
  },
}

const APIs = {
  Repository,
}

export default APIs
