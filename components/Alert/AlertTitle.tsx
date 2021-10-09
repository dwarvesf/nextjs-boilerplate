import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { useAlertContext } from './context'

export const AlertTitle = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { status } = useAlertContext()

  return (
    <h6
      className={cx('font-medium text-sm', {
        'text-red-700': status === 'error',
        'text-green-700': status === 'success',
        'text-yellow-700': status === 'warning',
        'text-blue-700': status === 'info',
      })}
      {...props}
    >
      {children}
    </h6>
  )
}
