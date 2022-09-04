import { storiesOf } from '@storybook/react'
import React from 'react'
import { Select } from '.'

storiesOf('components/Select', module).add('default', () => (
  <div className="max-w-[200px] space-y-4">
    <Select defaultValue="John Doe">
      <option value="John Doe">John Doe</option>
      <option value="Devon Webb">Devon Webb</option>
      <option value="Kim Scott">Kim Scott</option>
    </Select>
    <Select defaultValue="John Doe" invalid>
      <option value="John Doe">John Doe</option>
      <option value="Devon Webb">Devon Webb</option>
      <option value="Kim Scott">Kim Scott</option>
    </Select>
  </div>
))
