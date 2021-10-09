import { createElement, HTMLAttributes } from 'react'
import cx from 'classnames'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function getFontSize(as: HeadingProps['as']) {
  if (as === 'h1') {
    return 'text-30 sm:text-40'
  }

  if (as === 'h2') {
    return 'text-30 sm:text-32'
  }

  if (as === 'h3') {
    return 'text-2xl'
  }

  if (as === 'h4') {
    return 'text-lg'
  }

  if (as === 'h5') {
    return 'text-base'
  }

  if (as === 'h6') {
    return 'text-sm'
  }

  return 'text-base'
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { className, as = 'h2', ...rest } = props
  const classNames = [
    'text-gray-100 font-bold leading-tight',
    { 'uppercase text-gray-300': as === 'h6' },
    getFontSize(as),
  ]

  return createElement(as, { className: cx(className, classNames), ...rest })
}
