import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  type?: 'success' | 'error' | 'warning'
}

export const Badge = (props: BadgeProps) => {
  const { children, type = 'success', className, ...rest } = props
  return (
    <div
      className={cx(
        'inline-flex text-sm font-medium rounded-full px-2',
        {
          'bg-green-100 text-green-700': type === 'success',
          'bg-red-100 text-red-700': type === 'error',
          'bg-yellow-100 text-yellow-700': type === 'warning',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
