import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { useFetchWithCache } from 'hooks/useFetchWithCache'
import { client, GET_PATHS } from 'libs/apis'
import { Card } from 'components/Card'
import { Select } from 'components/Select'
import { Pet } from 'types/schema'
import { Text } from 'components/Text'
import { useState } from 'react'
import { Skeleton } from 'components/Skeleton'
import { capitalizeFirstLetter } from 'utils/string'

const statuses: Required<Pet>['status'][] = ['available', 'pending', 'sold']

const DataFetchingPage = () => {
  const [status, setStatus] = useState<Pet['status']>('available')
  const { data, isFirstLoading } = useFetchWithCache(
    [GET_PATHS.getByStatus, status],
    (_, status) => client.findPetByStatus(status),
  )

  return (
    <Layout>
      <div className="flex justify-between items-end">
        <div className="space-y-px">
          <Heading as="h3">Data fetching</Heading>
          <Text className="text-gray-500">
            Example of data fetching pattern with swr
          </Text>
        </div>
        <Select
          className="w-40"
          onChange={(e) => setStatus(e.target.value as Pet['status'])}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {capitalizeFirstLetter(status)}
            </option>
          ))}
        </Select>
      </div>
      <Card className="overflow-hidden" spacing={false}>
        <table className="min-w-full divide-y divide-gray-200">
          <colgroup>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isFirstLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          <Skeleton className="w-40 h-4 rounded" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="w-32 h-4 rounded" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="w-24 h-4 rounded" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="w-40 h-4 rounded" />
                    </td>
                  </tr>
                ))
              : data
                  ?.slice(0, 10)
                  .map(({ name, status, category, tags }, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {category?.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalizeFirstLetter">
                          {status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tags?.map(({ name }) => name).join(', ')}
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </Card>
    </Layout>
  )
}

export default DataFetchingPage
