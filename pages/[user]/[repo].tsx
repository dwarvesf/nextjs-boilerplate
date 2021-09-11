import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import APIs, { ReposResponse } from 'libs/apis'
import { useFetchWithCache } from '@dwarvesf/react-hooks'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { user, repo } = query
  const data = await APIs.Repository.getBySlug({
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

  const { data, isValidating } = useFetchWithCache<ReposResponse>(
    [APIs.Repository.getBySlugURL, user, repo],
    (_, user, repo) => APIs.Repository.getBySlug({ user, repo }),
    {
      fallbackData: initialData,
    },
  )

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        {user}/{repo}
      </h1>
      {data && !isValidating ? (
        <ul className="list-disc list-inside">
          <li>forks: {data.forks_count}</li>
          <li>stars: {data.stargazers_count}</li>
          <li>watchers: {data.watchers}</li>
        </ul>
      ) : (
        'loading...'
      )}
    </div>
  )
}

export default RepoPage
