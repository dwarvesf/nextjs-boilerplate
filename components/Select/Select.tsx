import { useId } from 'hooks/useId'
import React from 'react'
import cx from 'classnames'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const defaultId = `select-${useId()}`
    const {
      id = defaultId,
      children,
      className,
      invalid = false,
      ...rest
    } = props

    return (
      <select
        {...rest}
        ref={ref}
        id={id}
        dir="auto"
        aria-invalid={invalid}
        className={cx(
          'form-select w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
          {
            'focus:ring-pink-500 focus:border-pink-500 border-gray-300':
              !invalid,
            'border-red-500 outline-none shadow-none focus:ring-0 focus:border-red-500':
              invalid,
          },
          className,
        )}
      >
        {children}
      </select>
    )
  },
)
