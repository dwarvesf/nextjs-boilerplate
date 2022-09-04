import { storiesOf } from '@storybook/react'
import { IconCheckCircleSolid } from 'components/icons/components/IconCheckCircleSolid'
import { IconCloseCircleSolid } from 'components/icons/components/IconCloseCircleSolid'
import { IconExlamationCirleSolid } from 'components/icons/components/IconExlamationCirleSolid'
import { IconInformationCircleSolid } from 'components/icons/components/IconInformationCircleSolid'
import React from 'react'
import { Button } from '.'

storiesOf('components/Button', module).add('default', () => (
  <div className="space-y-4">
    <div className="space-x-4 flex items-center">
      <Button size="sm">Click me</Button>
      <Button>Click me</Button>
      <Button size="lg">Click me</Button>
      <Button loading>Click me</Button>
      <Button disabled>Click me</Button>
    </div>

    <div className="space-x-4 flex items-center">
      <Button appearance="primary" size="sm">
        Click me
      </Button>
      <Button appearance="primary">Click me</Button>
      <Button appearance="primary" size="lg">
        Click me
      </Button>
      <Button appearance="primary" loading>
        Click me
      </Button>
      <Button appearance="primary" disabled>
        Click me
      </Button>
    </div>

    <div className="space-x-4 flex items-center">
      <Button appearance="secondary" size="sm">
        Click me
      </Button>
      <Button appearance="secondary">Click me</Button>
      <Button appearance="secondary" size="lg">
        Click me
      </Button>
      <Button appearance="secondary" loading>
        Click me
      </Button>
      <Button appearance="secondary" disabled>
        Click me
      </Button>
    </div>

    <div className="space-x-4 flex items-center">
      <Button appearance="link" size="sm">
        Click me
      </Button>
      <Button appearance="link">Click me</Button>
      <Button appearance="link" size="lg">
        Click me
      </Button>
      <Button appearance="link" loading>
        Click me
      </Button>
      <Button appearance="link" disabled>
        Click me
      </Button>
    </div>

    <div className="space-x-4 flex items-center">
      <Button size="sm" Icon={IconCheckCircleSolid}>
        Click me
      </Button>
      <Button appearance="primary" Icon={IconExlamationCirleSolid}>
        Click me
      </Button>
      <Button
        appearance="secondary"
        Icon={IconInformationCircleSolid}
        size="lg"
      >
        Click me
      </Button>
      <Button appearance="primary" Icon={IconCloseCircleSolid} disabled>
        Click me
      </Button>
    </div>
  </div>
))
