import React from 'react'
import { Badge } from '.'

export default {
  title: 'components/Badge',
}

export const Default = () => (
  <div className="space-x-4 max-w-2xl">
    <Badge>2.02%</Badge>
    <Badge type="error">4.02%</Badge>
    <Badge type="warning">1.22%</Badge>
  </div>
)

Default.story = {
  name: 'default',
}
