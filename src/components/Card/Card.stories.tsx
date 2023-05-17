import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import React from 'react'
import { Card } from '.'

export default {
  title: 'components/Card',
}

export const Default = () => (
  <div className="space-y-4 max-w-2xl">
    <Card className="space-y-2" shadow>
      <Heading as="h3">Referral activities</Heading>
      <Text className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie.
      </Text>
    </Card>
  </div>
)

Default.story = {
  name: 'default',
}
