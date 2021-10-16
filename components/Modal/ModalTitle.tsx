import cx from 'classnames'
import { Dialog } from '@headlessui/react'

export const ModalTitle: React.FC<{ className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <Dialog.Title
      as="h3"
      className={cx(className, 'text-gray-900 leading-snug font-medium')}
      {...props}
    />
  )
}
