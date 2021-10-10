import { useId } from 'hooks/useId'
import React from 'react'
import cx from 'classnames'

import { Label } from '../Label'

type HtmlAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Props
>

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  /** The state when entering an invalid input */
  invalid?: boolean
}

function getCheckboxStyles({ invalid, readOnly, disabled }: CheckboxProps) {
  const styles: string[] = ['h-4 w-4 rounded border']

  if (disabled || readOnly) {
    styles.push('cursor-not-allowed')
  }

  if (disabled) {
    styles.push(
      'text-gray-400 bg-gray-100 border-gray-400 focus:border-gray-500 checked:border-gray-400 checked:border-gray-400',
    )
  } else if (invalid) {
    styles.push(
      '!border-red-500 focus:!border-red-500 bg-red-100 checked:!bg-red-400 !text-white focus:ring-red-500',
    )
  } else {
    styles.push(
      'text-pink-600 form-checkbox focus:ring-pink-500 border-gray-300',
    )
  }

  return styles.join(' ')
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

    const uqId = useId(id, 'checkbox')

    const comp = (
      <div
        {...(!children ? (rest as React.HTMLAttributes<HTMLDivElement>) : {})}
        className="relative inline-flex items-center"
      >
        <input
          ref={ref}
          type="checkbox"
          id={uqId}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-invalid={invalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={getCheckboxStyles(props)}
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
          <Label
            htmlFor={uqId}
            className={cx('ml-2', {
              '!text-red-600': invalid,
              'text-gray-500': disabled,
            })}
          >
            {children}
          </Label>
        )}
      </div>
    )
  },
)

export default Checkbox
