import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import styles from './Divider.style'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: string
  color?: 'gray-300' | 'gray-200'
}

export const Divider = ({
  children,
  color = 'gray-300',
  className,
  ...rest
}: DividerProps) => {
  const baseClassName = styles({ color })
  return (
    <div
      className={cx('h-4 flex items-center justify-center relative', className)}
      {...rest}
    >
      <div className="absolute inset-0 flex items-center">
        <div className={baseClassName} />
      </div>
      {children && (
        <div className="text-sm bg-white px-3 relative text-gray-500">
          {children}
        </div>
      )}
    </div>
  )
}
