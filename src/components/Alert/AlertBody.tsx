import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

export const AlertBody = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cx('space-y-1 pt-0.5', className)} {...props}>
      {children}
    </div>
  )
}
