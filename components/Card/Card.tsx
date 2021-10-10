import React from 'react'
import cx from 'classnames'
import { Box, forwardRefWithAs, PropsWithAs } from 'components/Box'
import { WithChildren } from 'types/common'

type CardProps = WithChildren<{
  shadow?: boolean
  spacing?: boolean
  className?: string
  onClick?: () => void
}>

type DefaultElement = 'div'

const CardComponent = (
  props: PropsWithAs<CardProps, DefaultElement>,
  ref: React.Ref<HTMLDivElement>,
) => {
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
}

export const Card = forwardRefWithAs<CardProps, DefaultElement>(CardComponent)
