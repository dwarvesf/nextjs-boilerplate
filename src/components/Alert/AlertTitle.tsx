import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { useAlertContext } from './context'
import styles from './Alert.styles'

export const AlertTitle = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { status } = useAlertContext()
  return (
    <h6 className={cx(styles({ status }).title(), className)} {...props}>
      {children}
    </h6>
  )
}
