import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { VisuallyHidden } from '../VisuallyHidden'

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
  visuallyHidden?: boolean
  isRequired?: boolean
}

export const Label: React.FC<LabelProps> = React.forwardRef<
  HTMLLabelElement,
  LabelProps
>((props, ref) => {
  const {
    children,
    htmlFor,
    visuallyHidden = false,
    isRequired = false,
    className,
    ...rest
  } = props
  if (visuallyHidden) {
    return (
      <VisuallyHidden as="label" htmlFor={htmlFor} ref={ref}>
        {children}
      </VisuallyHidden>
    )
  }

  return (
    <label
      {...rest}
      ref={ref}
      htmlFor={htmlFor}
      className={cx('block text-sm font-medium text-gray-700', className)}
    >
      {children}
      {isRequired && (
        <span className="ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
})

export default Label
