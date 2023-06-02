import { createElement, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'small' | 'b' | 'strong' | 'i' | 'em'
  truncate?: boolean
}

export const Text: React.FC<TextProps> = (props) => {
  const { className = 'text-gray-900', truncate, as = 'p', ...rest } = props

  return createElement(as, { className: cx(className, { truncate }), ...rest })
}
