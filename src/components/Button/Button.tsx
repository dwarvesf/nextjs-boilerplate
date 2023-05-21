import React from 'react'
import cx from 'classnames'
import { BaseButton, BaseButtonProps } from 'components/BaseButton'
import { IconSpinner } from 'components/icons/components/IconSpinner'
import { forwardRefWithAs } from 'utils/forwardRefWithAs'
import { WithChildren } from 'types/common'
import { ButtonAppearance } from '../BaseButton/types'
import styles from './Button.style'

export interface ButtonProps extends WithChildren<BaseButtonProps> {
  appearance?: ButtonAppearance
  fullWidth?: boolean
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const Button = forwardRefWithAs<'button', ButtonProps>(
  (
    {
      size = 'md',
      appearance = 'default',
      Icon,
      iconPosition = 'left',
      children: originChildren,
      loading = false,
      className,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    let children = originChildren

    const baseClassName = styles({
      fullWidth,
      loading,
      disabled: props.disabled,
      appearance,
      size,
    })

    if (loading) {
      children = (
        <>
          <span className="absolute inset-0 flex items-center justify-center">
            <IconSpinner />
          </span>
          <span className="text-transparent">{children}</span>
        </>
      )
    } else if (Icon) {
      children = (
        <>
          {iconPosition === 'left' && <Icon className="mr-1.5" />}
          <span>{children}</span>
          {iconPosition === 'right' && <Icon className="ml-1.5" />}
        </>
      )
    }

    return (
      <BaseButton ref={ref} {...props} className={cx(className, baseClassName)}>
        {children}
      </BaseButton>
    )
  },
)
