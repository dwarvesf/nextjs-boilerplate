import { useId } from 'hooks/useId'
import React from 'react'
import cx from 'classnames'
import styles from './Select.style'

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
    const baseClassName = styles({ invalid })
    return (
      <select
        {...rest}
        ref={ref}
        aria-invalid={invalid}
        className={cx(baseClassName, className)}
        dir="auto"
        id={id}
      >
        {children}
      </select>
    )
  },
)
