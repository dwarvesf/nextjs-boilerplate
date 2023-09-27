import React from 'react'
import cx from 'classnames'
import styles from './Input.style'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
  filled?: boolean
  readOnly?: boolean
  value?: string
  invalid?: boolean
  type?: 'text' | 'date' | 'time' | 'email' | 'number' | 'tel' | 'password'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      fullWidth = false,
      disabled = false,
      invalid = false,
      className,
      ...rest
    } = props
    const baseStyles = styles({ fullWidth, invalid })
    const containerClassName = baseStyles.container()
    const inputClassName = baseStyles.input()

    return (
      <div className={containerClassName}>
        <input
          className={cx(inputClassName, className)}
          {...rest}
          ref={ref}
          disabled={disabled}
        />
      </div>
    )
  },
)

export default Input
