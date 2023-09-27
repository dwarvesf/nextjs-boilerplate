import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { Text } from 'components/Text'
import { Table } from 'components/Table'
import { Badge } from 'components/Badge'
import { useGetUsersList, User } from 'api'

const DataFetchingPage = () => {
  const { data, isLoading } = useGetUsersList()
  const users = data?.data

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
          columns={[
            {
              name: 'name',
              width: '35%',
              render: ({ fullName, avatar, email }) => (
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      alt=""
                      className="h-10 w-10 rounded-full"
                      src={avatar}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {fullName}
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
                <a
                  className="text-pink-600 hover:text-pink-900 text-sm font-medium"
                  href="#edit"
                >
                  Edit
                </a>
              ),
            },
          ]}
          data={users || []}
          isFirstLoading={isLoading}
        />
      </Card>
    </Layout>
  )
}

export default DataFetchingPage
