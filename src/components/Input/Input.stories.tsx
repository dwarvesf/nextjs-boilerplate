import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './Input'

storiesOf('components/Input', module).add('default', () => {
  return (
    <div className="space-y-4 max-w-sm">
      <Input fullWidth placeholder="Username" />
      <Input fullWidth placeholder="Username" invalid />
      <Input fullWidth placeholder="Password" />
    </div>
  )
})
