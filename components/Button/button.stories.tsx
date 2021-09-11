import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from '.'

storiesOf('components/Button', module).add('basic', () => (
  <div className="space-y-4">
    <div className="space-x-4 flex items-center">
      <Button>Click me</Button>
      <Button size="sm">Click me</Button>
    </div>
  </div>
))
