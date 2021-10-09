import React from 'react'
import cx from 'classnames'
import { forwardRefWithAs, PropsWithAs } from '../Box'
import { ButtonSize } from './types'

export interface BaseButtonProps {
  size?: ButtonSize
}

type DefaultElement = any

const BaseButtonComponent = (
  props: PropsWithAs<BaseButtonProps, DefaultElement>,
  ref?: React.Ref<HTMLElement>,
) => {
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
}

export const BaseButton = forwardRefWithAs<BaseButtonProps, DefaultElement>(
  BaseButtonComponent,
)
