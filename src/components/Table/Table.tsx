import { Skeleton } from 'components/Skeleton'
import cx from 'classnames'

interface ColumnProps<T = any> {
  name?: React.ReactNode
  render: (item: T) => React.ReactNode
  width?: string
  className?: string
}

interface TableProps<T = any> {
  columns: ColumnProps<T>[]
  data: T[]
  isFirstLoading?: boolean
  className?: string
}

export function Table<T>(props: TableProps<T>) {
  const { columns, data, isFirstLoading = false, className } = props

  return (
    <table className={cx('min-w-full divide-y divide-gray-200', className)}>
      <colgroup>
        {columns.map(({ width }, index) => (
          <col key={index} width={width} />
        ))}
      </colgroup>
      <thead className="bg-gray-50">
        <tr>
          {columns.map(({ name }, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              scope="col"
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {isFirstLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                {columns.map((_, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    <Skeleton className="w-40 max-w-full h-4 rounded-sm" />
                  </th>
                ))}
              </tr>
            ))
          : data.map((item, index) => (
              <tr key={index}>
                {columns.map(({ render, className }, index) => (
                  <td
                    key={index}
                    className={cx('px-6 py-4 whitespace-nowrap', className)}
                  >
                    {render(item)}
                  </td>
                ))}
              </tr>
            ))}
      </tbody>
    </table>
  )
}
