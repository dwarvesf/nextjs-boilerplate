import React from 'react'
import Input from './Input'

export default {
  title: 'components/Input',
}

export const Default = () => {
  return (
    <div className="space-y-4 max-w-sm">
      <Input placeholder="Username" fullWidth />
      <Input placeholder="Username" fullWidth invalid />
      <Input placeholder="Password" fullWidth />
    </div>
  )
}

Default.story = {
  name: 'default',
}
