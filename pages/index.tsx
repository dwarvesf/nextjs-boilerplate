import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Placeholder } from 'components/Placeholder'
import { Card } from 'components/Card'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'

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
        <Card>
          <Heading className="mb-4 font-medium" as="h5">
            Index
          </Heading>
          <Placeholder className="h-32" />
        </Card>
        <Card>
          <Heading className="mb-4 font-medium" as="h5">
            Investment
          </Heading>
          <Placeholder className="h-32" />
        </Card>
        <Card>
          <Heading className="mb-4 font-medium" as="h5">
            ROI
          </Heading>
          <Placeholder className="h-32" />
        </Card>
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
