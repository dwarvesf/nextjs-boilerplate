import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import styles from './Badge.style'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  type?: 'success' | 'error' | 'warning'
}

export const Badge = (props: BadgeProps) => {
  const { children, type = 'success', className, ...rest } = props
  const baseClassName = styles({ type })
  return (
    <div className={cx(baseClassName, className)} {...rest}>
      {children}
    </div>
  )
}
