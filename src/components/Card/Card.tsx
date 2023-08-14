import React from 'react'
import cx from 'classnames'
import { Box } from 'components/Box'
import { WithChildren } from 'types/common'
import { forwardRefWithAs } from 'utils/forwardRefWithAs'
import styles from './Card.style'

interface CardProps
  extends WithChildren<{
    shadow?: boolean
    spacing?: boolean
    className?: string
    onClick?: () => void
  }> {}

export const Card = forwardRefWithAs<'div', CardProps>((props, ref) => {
  const {
    children,
    shadow = true,
    className,
    spacing = true,
    as = 'div',
    ...rest
  } = props
  const baseClassName = styles({ shadow, spacing })
  return (
    <Box ref={ref} as={as} className={cx(baseClassName, className)} {...rest}>
      {children}
    </Box>
  )
})
