import { storiesOf } from '@storybook/react'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import React from 'react'
import { Card } from '.'

storiesOf('components/Card', module).add('basic', () => (
  <div className="space-y-4">
    <Card className="space-y-4" shadow>
      <Heading>Referral activities</Heading>
      <Text>
        Invite at least 3 friends to play and receive 1% referral bonus for your
        friends’ GEM purchases
      </Text>
    </Card>
    <Card
      className="space-y-4 text-center py-20 px-10 max-w-2xl"
      color="gray-900"
      shadow
      spacing={false}
    >
      <Heading>You haven’t imported any leaders</Heading>
      <Text>
        To play game, you have to import your leader into a server. To transfer
        leader, click on an unimported leader below and select the server you
        want to play
      </Text>
    </Card>
  </div>
))
