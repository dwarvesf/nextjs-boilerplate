import { useId } from 'hooks/useId'
import React from 'react'

import { Label } from '../Label'
import styles from './Checkbox.style'

type HtmlAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Props
>

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  /** The state when entering an invalid input */
  invalid?: boolean
}

export interface CheckboxProps extends Props, HtmlAttributes {}

export const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref?: React.Ref<HTMLInputElement>) => {
    const {
      id,
      name,
      value,
      defaultChecked,
      checked,
      disabled,
      invalid,
      readOnly,
      onChange,
      onBlur,
      onFocus,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      children,
      className,
      ...rest
    } = props
    const baseStyles = styles({ invalid, disabled, readOnly })
    const containerClassName = baseStyles.container()
    const inputClassName = baseStyles.input()
    const labelClassName = baseStyles.label()

    const uqId = useId(id, 'checkbox')

    const comp = (
      <div
        {...(!children ? (rest as React.HTMLAttributes<HTMLDivElement>) : {})}
        // className="relative inline-flex items-center"
        className={containerClassName}
      >
        <input
          ref={ref}
          aria-invalid={invalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={checked}
          className={inputClassName}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={uqId}
          name={name}
          readOnly={readOnly}
          type="checkbox"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
    )

    if (!children) {
      return comp
    }

    return (
      <div {...(rest as React.HTMLAttributes<HTMLDivElement>)} className="flex">
        {comp}

        {children && (
          <Label className={labelClassName} htmlFor={uqId}>
            {children}
          </Label>
        )}
      </div>
    )
  },
)

export default Checkbox
