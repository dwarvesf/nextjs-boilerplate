import { storiesOf } from '@storybook/react'
import React from 'react'
import { Divider } from '.'

storiesOf('components/Divider', module).add('default', () => (
  <div className="space-y-4 max-w-2xl">
    <Divider />
    <Divider>Or continue by</Divider>
  </div>
))
