import { As, Box, BoxProps, ComponentWithAs } from 'components/Box'
import React from 'react'

export const VisuallyHidden: ComponentWithAs<BoxProps, 'span'> = ({
  as = 'span',
  ...props
}) => <Box as={as as As} {...props} className="sr-only" />
