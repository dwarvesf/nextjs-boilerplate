import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { useFetchWithCache } from 'hooks/useFetchWithCache'
import { client, GET_PATHS } from 'libs/apis'
import { Card } from 'components/Card'
import { Text } from 'components/Text'
import { Table } from 'components/Table'
import { User } from 'types/schema'
import { Badge } from 'components/Badge'

const DataFetchingPage = () => {
  const { data, isFirstLoading } = useFetchWithCache(GET_PATHS.getUsers, () =>
    client.getUsers(),
  )

  return (
    <Layout>
      <div className="space-y-px">
        <Heading as="h3">Data fetching</Heading>
        <Text className="text-gray-500">
          Example of data fetching pattern with swr
        </Text>
      </div>
      <Card className="overflow-hidden" spacing={false}>
        <Table<User>
          data={data || []}
          isFirstLoading={isFirstLoading}
          columns={[
            {
              name: 'name',
              width: '35%',
              render: ({ name, avatar, email }) => (
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={avatar}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500">{email}</div>
                  </div>
                </div>
              ),
            },
            {
              name: 'Title',
              width: '30%',
              render: ({ department, title }) => (
                <>
                  <div className="text-sm text-gray-900">{title}</div>
                  <div className="text-sm text-gray-500">{department}</div>
                </>
              ),
            },
            {
              name: 'Status',
              width: '12%',
              render: ({ status }) => <Badge>{status}</Badge>,
            },
            {
              name: 'Role',
              width: '13%',
              render: ({ role }) => (
                <span className="whitespace-nowrap text-sm text-gray-500">
                  {role}
                </span>
              ),
            },
            {
              name: '',
              width: '10%',
              className: 'text-right',
              render: () => (
                <a className="text-pink-600 hover:text-pink-900 text-sm font-medium">
                  Edit
                </a>
              ),
            },
          ]}
        />
      </Card>
    </Layout>
  )
}

export default DataFetchingPage
