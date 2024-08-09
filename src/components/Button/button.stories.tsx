import IconCheckCircleSolid from 'components/icons/svg/check-circle-solid.svg'
import IconCloseCircleSolid from 'components/icons/svg/close-circle-solid.svg'
import IconExlamationCirleSolid from 'components/icons/svg/exlamation-cirle-solid.svg'
import IconInformationCircleSolid from 'components/icons/svg/information-circle-solid.svg'
import React from 'react'
import { Button } from '.'

export default {
  title: 'components/Button',
}

export const Default = () => (
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
      <Button Icon={IconCheckCircleSolid} size="sm">
        Click me
      </Button>
      <Button Icon={IconExlamationCirleSolid} appearance="primary">
        Click me
      </Button>
      <Button
        Icon={IconInformationCircleSolid}
        appearance="secondary"
        size="lg"
      >
        Click me
      </Button>
      <Button Icon={IconCloseCircleSolid} appearance="primary" disabled>
        Click me
      </Button>
    </div>
  </div>
)

Default.story = {
  name: 'default',
}
