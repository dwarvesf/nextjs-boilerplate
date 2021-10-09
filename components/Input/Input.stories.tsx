import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './Input'

storiesOf('components/Input', module).add('basic', () => {
  return (
    <div className="space-y-3">
      <Input placeholder="Username" />
      <Input fullWidth placeholder="Username" invalid />
      <Input fullWidth placeholder="Password" />
      <Input fullWidth placeholder="Password" type="password" />
    </div>
  )
})
