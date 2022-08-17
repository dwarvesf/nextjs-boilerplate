import React, { HTMLAttributes } from 'react'
import cx from 'classnames'

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
  return (
    <div
      className={cx('h-4 flex items-center justify-center relative', className)}
      {...rest}
    >
      <div className="absolute inset-0 flex items-center">
        <div
          className={cx('w-full border-t', {
            'border-gray-300': color === 'gray-300',
            'border-gray-200': color === 'gray-200',
          })}
        />
      </div>
      {children && (
        <div className="text-sm bg-white px-3 relative text-gray-500">
          {children}
        </div>
      )}
    </div>
  )
}
