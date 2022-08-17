import React from 'react'
import cx from 'classnames'
import { forwardRefWithAs } from 'utils/render'
import { ButtonSize } from './types'

export interface BaseButtonProps {
  size?: ButtonSize
  className?: string
  target?: string
  disabled?: boolean
}

export const BaseButton = forwardRefWithAs<'button', BaseButtonProps>(
  (props, ref) => {
    const { as = 'button', className: classNameProps, ...rest } = props

    let rel: undefined | string

    if (as === 'a' && props.target === '_blank') {
      rel = 'noopener noreferrer'
    }

    const className = cx(
      classNameProps,
      'inline-flex justify-center items-center text-center whitespace-nowrap leading-none',
      'focus:outline-none transition duration-200',
      props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    )

    return React.createElement(as, { className, ...rest, rel, ref })
  },
)
