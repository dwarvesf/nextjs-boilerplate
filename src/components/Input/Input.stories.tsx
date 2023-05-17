import React from 'react'
import Input from './Input'

export default {
  title: 'components/Input',
}

export const Default = () => {
  return (
    <div className="space-y-4 max-w-sm">
      <Input fullWidth placeholder="Username" />
      <Input fullWidth placeholder="Username" invalid />
      <Input fullWidth placeholder="Password" />
    </div>
  )
}

Default.story = {
  name: 'default',
}
