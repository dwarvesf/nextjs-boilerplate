import React from 'react'
import cx from 'classnames'
import { Box } from 'components/Box'
import { WithChildren } from 'types/common'
import { forwardRefWithAs } from 'utils/render'

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

  return (
    <Box
      className={cx(
        'bg-white sm:rounded-lg',
        { shadow, 'px-4 py-5 sm:px-6': spacing },
        className,
      )}
      ref={ref}
      as={as}
      {...rest}
    >
      {children}
    </Box>
  )
})
