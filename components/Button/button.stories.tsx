import { storiesOf } from '@storybook/react'
import { IconPencilSolid } from 'components/icons/components/IconPencilSolid'
import React from 'react'
import { Button } from '.'

storiesOf('components/Button', module).add('basic', () => (
  <div className="space-y-4">
    <div className="space-x-4 flex items-center">
      <Button size="sm">Click me</Button>
      <Button>Click me</Button>
      <Button size="lg">Click me</Button>
      <Button isLoading>Click me</Button>
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
      <Button appearance="primary" isLoading>
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
      <Button appearance="secondary" isLoading>
        Click me
      </Button>
      <Button appearance="secondary" disabled>
        Click me
      </Button>
    </div>

    <div className="space-x-4 flex items-center">
      <Button appearance="primary" size="sm" Icon={IconPencilSolid}>
        Click me
      </Button>
      <Button appearance="primary" Icon={IconPencilSolid}>
        Click me
      </Button>
      <Button appearance="primary" Icon={IconPencilSolid} size="lg">
        Click me
      </Button>
      <Button appearance="primary" Icon={IconPencilSolid} isLoading>
        Click me
      </Button>
      <Button appearance="primary" Icon={IconPencilSolid} disabled>
        Click me
      </Button>
    </div>
  </div>
))
