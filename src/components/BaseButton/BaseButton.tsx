import React from 'react'
import cx from 'classnames'
import { forwardRefWithAs } from 'utils/forwardRefWithAs'
import { ButtonSize } from './types'
import styles from './BaseButton.style'

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
    const baseClassName = styles({ disabled: props.disabled })

    const className = cx(classNameProps, baseClassName)

    return React.createElement(as, { className, ...rest, rel, ref })
  },
)
