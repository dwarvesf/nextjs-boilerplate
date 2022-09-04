import { storiesOf } from '@storybook/react'
import React from 'react'
import { Badge } from '.'

storiesOf('components/Badge', module).add('default', () => (
  <div className="space-x-4 max-w-2xl">
    <Badge>2.02%</Badge>
    <Badge type="error">4.02%</Badge>
    <Badge type="warning">1.22%</Badge>
  </div>
))
