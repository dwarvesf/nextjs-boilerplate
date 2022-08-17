import { storiesOf } from '@storybook/react'
import React from 'react'
import { Label } from '.'
import { Input } from '../Input'

const stories = storiesOf('components/Label', module)

stories.add('basic', () => (
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
))
