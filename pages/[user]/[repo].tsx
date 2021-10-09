import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import { ReposResponse, client, GET_PATHS } from 'libs/apis'
import { useFetchWithCache } from 'hooks/useFetchWithCache'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { user, repo } = query
  const data = await client.getRepoBySlug({
    user: (user || '').toString(),
    repo: (repo || '').toString(),
  })

  return { props: { data } }
}

const RepoPage: NextPage<{ data: ReposResponse }> = (props) => {
  const { data: initialData } = props
  const {
    query: { user, repo },
  } = useRouter()

  const { data, isFirstLoading } = useFetchWithCache<ReposResponse>(
    [GET_PATHS.getRepoBySlug, user, repo],
    (_, user, repo) => client.getRepoBySlug({ user, repo }),
    {
      fallbackData: initialData,
    },
  )

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        {user}/{repo}
      </h1>
      {isFirstLoading ? (
        'loading...'
      ) : (
        <ul className="list-disc list-inside">
          <li>forks: {data?.forks_count}</li>
          <li>stars: {data?.stargazers_count}</li>
          <li>watchers: {data?.watchers}</li>
        </ul>
      )}
    </div>
  )
}

export default RepoPage
