import { createElement, HTMLAttributes } from 'react'
import cx from 'classnames'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function getFontSize(as: HeadingProps['as']) {
  if (as === 'h1') {
    return 'text-5xl'
  }

  if (as === 'h2') {
    return 'text-4xl'
  }

  if (as === 'h3') {
    return 'text-3xl'
  }

  if (as === 'h4') {
    return 'text-xl'
  }

  if (as === 'h5') {
    return 'text-lg'
  }

  if (as === 'h6') {
    return 'text-base'
  }

  return 'text-base'
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { className, as = 'h2', ...rest } = props
  const classNames = ['text-gray-900 leading-snug', getFontSize(as)]

  return createElement(as, {
    className: cx(className, { 'font-bold': as === 'h1' || 'h2' }, classNames),
    ...rest,
  })
}
