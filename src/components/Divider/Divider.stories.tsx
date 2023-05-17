import React from 'react'
import { Divider } from '.'

export default {
  title: 'components/Divider',
}

export const Default = () => (
  <div className="space-y-4 max-w-2xl">
    <Divider />
    <Divider>Or continue by</Divider>
  </div>
)

Default.story = {
  name: 'default',
}
