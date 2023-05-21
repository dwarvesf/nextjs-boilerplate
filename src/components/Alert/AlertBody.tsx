import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import styles from './Alert.styles'

export const AlertBody = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cx(styles().body(), className)} {...props}>
      {children}
    </div>
  )
}
