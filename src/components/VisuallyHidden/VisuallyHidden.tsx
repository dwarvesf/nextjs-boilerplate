import { Box, BoxProps } from 'components/Box'
import React from 'react'
import { CompWithAsProp } from 'utils/forwardRefWithAs'

export const VisuallyHidden: CompWithAsProp<BoxProps, 'span'> = ({
  as = 'span',
  ...props
}) => <Box as={as as any} {...props} className="sr-only" />
