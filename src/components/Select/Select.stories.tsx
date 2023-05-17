import React from 'react'
import { Select } from '.'

export default {
  title: 'components/Select',
}

export const Default = () => (
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
)

Default.story = {
  name: 'default',
}
