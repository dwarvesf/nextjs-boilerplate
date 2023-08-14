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
      <VisuallyHidden ref={ref} as="label" htmlFor={htmlFor}>
        {children}
      </VisuallyHidden>
    )
  }

  return (
    <label
      {...rest}
      ref={ref}
      className={cx('block text-sm font-medium text-gray-700', className)}
      htmlFor={htmlFor}
    >
      {children}
      {isRequired && (
        <span aria-hidden="true" className="ml-0.5">
          *
        </span>
      )}
    </label>
  )
})

export default Label
