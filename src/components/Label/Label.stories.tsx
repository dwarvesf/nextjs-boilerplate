import React from 'react'
import { Label } from '.'
import { Input } from '../Input'

export default {
  title: 'components/Label',
}

export const Default = () => (
  <div className="space-y-4 max-w-sm">
    <div className="space-y-1">
      <Label htmlFor="fullname">Fullname</Label>
      <Input id="fullname" placeholder="Enter your name..." fullWidth />
    </div>
    <div className="space-y-1">
      <Label htmlFor="email" isRequired>
        Email
      </Label>
      <Input id="email" placeholder="Enter email..." fullWidth />
    </div>
  </div>
)

Default.story = {
  name: 'default',
}
