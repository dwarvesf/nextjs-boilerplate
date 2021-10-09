import React from 'react'
import cx from 'classnames'
import { Box, forwardRefWithAs, PropsWithAs } from 'components/Box'

type CardProps = {
  shadow?: boolean
  spacing?: boolean
  color?: 'gray-650' | 'gray-900'
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

function getBackgroundColor(color: CardProps['color']) {
  if (color === 'gray-650') {
    return 'bg-gray-650'
  }

  if (color === 'gray-900') {
    return 'bg-gray-900'
  }
}

type DefaultElement = 'div'

const CardComponent = (
  props: PropsWithAs<CardProps, DefaultElement>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    children,
    shadow = false,
    className,
    color = 'gray-650',
    spacing = true,
    as = 'div',
    ...rest
  } = props

  return (
    <Box
      className={cx(
        'rounded-[10px]',
        { 'shadow-card': shadow, 'py-8 sm:px-8 px-6': spacing },
        getBackgroundColor(color),
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
