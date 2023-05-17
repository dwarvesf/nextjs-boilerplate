import { Card } from 'components/Card'
import { Skeleton } from '.'

export default {
  title: 'components/Skeleton',
}

export const Default = () => {
  return (
    <div className="space-y-10">
      <div className="space-x-4 flex items-center">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-5 w-20 rounded" />
      </div>
      <Card className="space-y-3 max-w-md">
        <Skeleton className="h-5 w-1/3 rounded" />
        <Skeleton className="h-5 w-full rounded" />
        <Skeleton className="h-5 w-1/2 rounded" />
      </Card>
    </div>
  )
}

Default.story = {
  name: 'default',
}
