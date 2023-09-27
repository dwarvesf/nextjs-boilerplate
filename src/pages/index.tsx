import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'
import { formatNumber } from 'utils/formatNumber'
import { Badge } from 'components/Badge'
import { IconArrowSmUp } from 'components/icons/components/IconArrowSmUp'
import { IconArrowSmDown } from 'components/icons/components/IconArrowSmDown'
import { IconPaperClip } from 'components/icons/components/IconPaperClip'

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
      <Heading as="h5" className="mb-1 !font-medium !text-gray-700 !text-base">
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
        <Badge className="pl-1" type={isGrowth ? 'success' : 'error'}>
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
        <Heading as="h3">Good afternoon, {user?.fullName}</Heading>
        <Text className="text-gray-500">
          Here's what's happenning with your ambassador account today.
        </Text>
      </div>

      <div className="grid-cols-3 grid gap-6">
        <StatCard from={70946} title="Total Subscribers" to={71897} />
        <StatCard from={56.14} suffix="%" title="Avg. Open Rate" to={58.16} />
        <StatCard from={28.62} suffix="%" title="Avg. Click Rate" to={24.57} />
      </div>

      <div className="grid-cols-3 grid gap-6">
        <div className="col-span-2 space-y-5">
          <Card className="overflow-hidden" spacing={false}>
            <div className="px-6 py-5">
              <Heading as="h5" className="mb-1 !font-medium !text-gray-700">
                Applicant Information
              </Heading>
              <Text className="text-sm text-gray-400">
                Personal details and application.
              </Text>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Margot Foster
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Backend Developer
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    margotfoster@example.com
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <IconPaperClip className="flex-shrink-0 h-5 w-5 text-gray-400" />
                          <span className="ml-2 flex-1 w-0 truncate">
                            resume_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            className="font-medium text-pink-600 hover:text-pink-500"
                            href="#download"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <IconPaperClip className="flex-shrink-0 h-5 w-5 text-gray-400" />
                          <span className="ml-2 flex-1 w-0 truncate">
                            coverletter_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            className="font-medium text-pink-600 hover:text-pink-500"
                            href="#download"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </Card>
        </div>
        <div className="col-span-1 space-y-5">
          <Card className="overflow-hidden" spacing={false}>
            <div className="px-6 py-5">
              <Heading as="h5" className="mb-1 !font-medium !text-gray-700">
                Recent Sign-ups
              </Heading>
              <Text className="text-sm text-gray-400">
                Recent customers onboarded.
              </Text>
            </div>
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {[
                {
                  name: 'Jane Cooper',
                  avatar:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                  email: 'jane.cooper@example.com',
                },
                {
                  name: 'Cody Fisher',
                  avatar:
                    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                  email: 'cody.fisher@example.com',
                },
                {
                  name: 'Esther Howard',
                  avatar:
                    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                  email: 'esther.howard@example.com',
                },
                {
                  name: 'Jenny Wilson',
                  avatar:
                    'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                  email: 'jenny.wilson@example.com',
                },
                {
                  name: 'Cameron Williamson',
                  avatar:
                    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                  email: 'cameron.williamson@example.com',
                },
              ].map(({ avatar, email, name }) => (
                <div key={name} className="px-6 py-2.5">
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
                        {name}
                      </div>
                      <div className="text-sm text-gray-500">{email}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
