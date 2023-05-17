import { Button } from 'components/Button'
import React from 'react'
import { toast, Toaster } from '.'

export default {
  title: 'components/Toast',
}

export const Default = () => {
  return (
    <div className="space-y-4 flex flex-col max-w-[200px]">
      <Button
        onClick={() => {
          toast.error({
            title: 'There was an error with your submission',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
          })
        }}
      >
        Show Error Toast
      </Button>
      <Button
        onClick={() => {
          toast.info({ title: 'A new software update is available' })
        }}
      >
        Show Info Toast
      </Button>
      <Button
        onClick={() => {
          toast.warning({ title: 'You have no creadit left' })
        }}
      >
        Show Warn Toast
      </Button>
      <Button
        onClick={() => {
          toast.success({
            title: 'Order completed',
            message: 'Lorem ipsum dolor sit amet, consectetur.',
          })
        }}
      >
        Show Success Toast
      </Button>
      <Toaster />
    </div>
  )
}

Default.story = {
  name: 'default',
}
