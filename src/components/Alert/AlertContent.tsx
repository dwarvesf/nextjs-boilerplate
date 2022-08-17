import { Text, TextProps } from 'components/Text'
import React from 'react'
import cx from 'classnames'
import { useAlertContext } from './context'

export const AlertContent = ({ children, ...props }: Omit<TextProps, 'as'>) => {
  const { status } = useAlertContext()

  return (
    <Text
      as="p"
      className={cx('text-sm', {
        'text-red-600': status === 'error',
        'text-green-600': status === 'success',
        'text-yellow-600': status === 'warning',
        'text-blue-600': status === 'info',
      })}
      {...props}
    >
      {children}
    </Text>
  )
}
