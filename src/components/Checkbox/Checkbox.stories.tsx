import { CheckboxGroup } from 'components/CheckboxGroup'
import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'components/Checkbox',
}

export const Default = () => (
  <div className="space-y-3">
    <Checkbox>Valid</Checkbox>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox invalid>Invalid</Checkbox>
  </div>
)

Default.story = {
  name: 'default',
}

export const CheckboxGroupStory = () => (
  <CheckboxGroup className="space-y-3" defaultValue={['1', '2']}>
    <Checkbox value="1">Option 1</Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </CheckboxGroup>
)

CheckboxGroupStory.story = {
  name: 'CheckboxGroup',
}
