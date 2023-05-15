import React from 'react'
import cx from 'classnames'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { IconClose } from 'components/icons/components/IconClose'

const Dialog = DialogPrimitive.Root

const DialogClose = DialogPrimitive.Close

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cx(className)} {...props}>
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
)

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cx(
      'fixed inset-0 z-50 backdrop-filter backdrop-blur bg-black/25 transition-all duration-100',
      'data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out',
      className,
    )}
    {...props}
    ref={ref}
  />
))

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cx(
        'animate-in fixed z-50 w-[90vw] gap-4 bg-white p-5 shadow-lg mx-4',
        'data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 data-[state=open]:sm:slide-in-from-bottom-0',
        'sm:max-w-lg rounded-xl sm:zoom-in-90',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cx(
          'absolute top-2 right-2 w-11 h-11 flex items-center justify-center rounded-sm opacity-70 transition-opacity hover:opacity-100',
          'focus:outline-none focus:ring-4 focus:ring-gray-100',
          'disabled:pointer-events-none data-[state=open]:bg-gray-100',
        )}
      >
        <IconClose className="h-6 w-6 text-gray-500" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cx('text-lg font-semibold text-gray-900', className)}
    {...props}
  />
))

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cx('text-sm text-gray-600', className)}
    {...props}
  />
))

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
}
