import { storiesOf } from '@storybook/react'
import { Text } from '.'

storiesOf('components/Text', module).add('basic', () => {
  return (
    <div className="space-y-4">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. molestie.
      </Text>
      <Text as="span" size="sm" color="gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. molestie.
      </Text>
      <Text size="xs" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore .
      </Text>

      <Text>
        <Text as="span" color="danger">
          danger text
        </Text>{' '}
        <Text as="span" color="success">
          success text
        </Text>
      </Text>
    </div>
  )
})
