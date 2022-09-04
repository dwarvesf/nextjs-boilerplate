import { storiesOf } from '@storybook/react'
import { CheckboxGroup } from 'components/CheckboxGroup'
import React from 'react'
import { Checkbox } from './Checkbox'

const stories = storiesOf('components/Checkbox', module)

stories.add('default', () => (
  <div className="space-y-3">
    <Checkbox>Valid</Checkbox>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox invalid>Invalid</Checkbox>
  </div>
))

stories.add('CheckboxGroup', () => (
  <CheckboxGroup defaultValue={['1', '2']} className="space-y-3">
    <Checkbox value="1">Option 1</Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </CheckboxGroup>
))
