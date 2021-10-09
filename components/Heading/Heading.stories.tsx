import { storiesOf } from '@storybook/react'
import { Heading } from '.'

storiesOf('components/Heading', module).add('basic', () => {
  return (
    <div className="space-y-4">
      <Heading as="h1">This is the heading 1</Heading>
      <Heading as="h2">This is the heading 2</Heading>
      <Heading as="h3">This is the heading 3</Heading>
      <Heading as="h4">This is the heading 4</Heading>
      <Heading as="h5">This is the heading 5</Heading>
      <Heading as="h6">This is the heading 6</Heading>
    </div>
  )
})
