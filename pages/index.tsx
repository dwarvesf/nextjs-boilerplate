import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Placeholder } from 'components/Placeholder'
import { Card } from 'components/Card'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'
import { formatNumber } from 'utils/number'
import { Badge } from 'components/Badge'
import { IconArrowSmUp } from 'components/icons/components/IconArrowSmUp'
import { IconArrowSmDown } from 'components/icons/components/IconArrowSmDown'

interface StatCardProps {
  title: string
  from: number
  to: number
  suffix?: string
}

const StatCard = (props: StatCardProps) => {
  const { title, suffix, from, to } = props
  const isGrowth = to > from

  return (
    <Card>
      <Heading className="mb-1 !font-medium !text-gray-700 !text-base" as="h5">
        {title}
      </Heading>
      <div className="flex justify-between items-end">
        <div className="flex space-x-2 items-end">
          <Text as="span" className="text-2xl font-medium text-pink-500">
            {formatNumber(to)}
            {suffix}
          </Text>
          <Text as="span" className="text-sm mb-1 text-gray-500">
            from {formatNumber(from)}
            {suffix}
          </Text>
        </div>
        <Badge type={isGrowth ? 'success' : 'error'} className="pl-1">
          {isGrowth ? (
            <IconArrowSmUp className="text-green-500 w-5 h-5" />
          ) : (
            <IconArrowSmDown className="text-red-500 w-5 h-5" />
          )}
          20.2%
        </Badge>
      </div>
    </Card>
  )
}

const DashboardPage = () => {
  const { user } = useAuthContext()

  return (
    <Layout>
      <div className="space-y-px">
        <Heading as="h3">Good afternoon, {user.firstName}</Heading>
        <Text className="text-gray-500">
          Here's what's happenning with your ambassador account today.
        </Text>
      </div>

      <div className="grid-cols-3 grid gap-6">
        <StatCard title="Total Subscribers" from={70946} to={71897} />
        <StatCard title="Avg. Open Rate" from={56.14} to={58.16} suffix="%" />
        <StatCard title="Avg. Click Rate" from={28.62} to={24.57} suffix="%" />
      </div>

      <div className="grid-cols-3 grid gap-6">
        <div className="col-span-2 space-y-5">
          <Card spacing={false}>
            <div className="px-6 h-16 border-b border-gray-200 flex items-center justify-between">
              <Heading className="font-medium" as="h5">
                Order history
              </Heading>
              <Button>View all</Button>
            </div>
            <div className="p-6">
              <Placeholder className="h-40" />
            </div>
          </Card>
        </div>
        <div className="col-span-1 space-y-5">
          <Card spacing={false}>
            <div className="px-6 h-16 border-b border-gray-200 flex items-center justify-between">
              <Heading className="font-medium" as="h5">
                Portoflio
              </Heading>
              <Button>Create</Button>
            </div>
            <div className="p-6">
              <Placeholder className="h-40" />
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
