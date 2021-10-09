import { createElement, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'small' | 'b' | 'strong' | 'i' | 'em'
  size?: 'base' | 'sm' | 'xs' | 'xxs'
  color?: 'white' | 'gray-200' | 'gray-300' | 'success' | 'danger'
  truncate?: boolean
}

function getFontSize(as: TextProps['as'], size: TextProps['size']) {
  if (as === 'small' || size === 'xxs') {
    return 'text-xxs'
  }

  if (size === 'sm') {
    return 'text-sm'
  }

  if (size === 'xs') {
    return 'text-xs'
  }

  return ''
}

function getColor(color: TextProps['color']) {
  if (color === 'white') {
    return 'text-gray-100'
  }

  if (color === 'gray-300') {
    return 'text-gray-300'
  }

  if (color === 'gray-200') {
    return 'text-gray-200'
  }

  if (color === 'success') {
    return 'text-green-400'
  }

  if (color === 'danger') {
    return 'text-red-600'
  }

  return ''
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    truncate,
    size = 'base',
    as = 'p',
    color = as === 'p' ? 'gray-200' : undefined,
    ...rest
  } = props
  const classNames = [getFontSize(as, size), getColor(color)]
  if (truncate) {
    classNames.push('truncate')
  }

  return createElement(as, { className: cx(className, classNames), ...rest })
}
