import { Button } from 'components/Button'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.'

export default {
  title: 'components/Dialog',
}

export const Default = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="mb-4">
            <DialogTitle>Payment successful</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button appearance="primary" type="submit" fullWidth>
              Sign in
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

Default.story = {
  name: 'default',
}
