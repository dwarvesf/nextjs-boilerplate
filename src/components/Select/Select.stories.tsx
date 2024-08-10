import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '.'

export default {
  title: 'components/Select',
}

export const Default = () => (
  <div className="max-w-[200px] space-y-4">
    <Select>
      <SelectTrigger className="min-w-[200px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 1</SelectItem>
        <SelectItem value="3">Option 1</SelectItem>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger className="min-w-[200px]" isError>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1" disabled>
          Option 1
        </SelectItem>
        <SelectItem value="2">Option 1</SelectItem>
        <SelectItem value="3">Option 1</SelectItem>
      </SelectContent>
    </Select>

    <Select>
      <SelectTrigger className="min-w-[200px]" disabled>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1" disabled>
          Option 1
        </SelectItem>
        <SelectItem value="2">Option 1</SelectItem>
        <SelectItem value="3">Option 1</SelectItem>
      </SelectContent>
    </Select>
  </div>
)

Default.story = {
  name: 'default',
}
