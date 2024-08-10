import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import type * as SelectPrimitive from '@radix-ui/react-select'
import { SelectTriggerStyleProps } from './Select.style'

type ReplaceOnValueChangeByOnChange<T extends { onValueChange?: any }> = Omit<
  T,
  'onValueChange'
> & {
  onChange?: T['onValueChange']
}

export type SelectProps = ReplaceOnValueChangeByOnChange<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
>

export type SelectItemRef = ElementRef<typeof SelectPrimitive.Item>

export type SelectItemProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>

export type SelectTriggerRef = ElementRef<typeof SelectPrimitive.Trigger>

export type SelectTriggerProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> &
  SelectTriggerStyleProps & {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    hideRightIcon?: boolean
    isError?: boolean
    loading?: boolean
  }

export type SelectGroupRef = ElementRef<typeof SelectPrimitive.Group>

export type SelectGroupProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Group
>
