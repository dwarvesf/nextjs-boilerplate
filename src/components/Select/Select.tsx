import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useMemo,
} from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classnames'
import IconSpinner from 'components/icons/svg/spinner.svg'
import IconArrowSmDown from 'components/icons/svg/arrow-sm-down.svg'
import IconCheck from 'components/icons/svg/check.svg'
import {
  type SelectProps,
  type SelectItemProps,
  type SelectItemRef,
  type SelectTriggerRef,
  type SelectTriggerProps,
  type SelectGroupRef,
  SelectGroupProps,
} from './type'
import { select } from './Select.style'

function Select(props: SelectProps) {
  const { onChange, defaultValue, value } = props

  return (
    <SelectPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={(value) => {
        onChange?.(value)
      }}
      {...props}
    />
  )
}
Select.displayName = SelectPrimitive.Root.displayName

const SelectGroup = forwardRef<SelectGroupRef, SelectGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Group
        ref={ref}
        className={cx(select.group, className)}
        {...props}
      />
    )
  },
)
SelectGroup.displayName = SelectPrimitive.Group.displayName

const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(
  (props, ref) => {
    const {
      children,
      disabled,
      asChild,
      className,
      color,
      leftIcon,
      rightIcon,
      hideRightIcon,
      isError,
      loading,
      ...restProps
    } = props

    const rightIconRender = useMemo(() => {
      if (loading) {
        return <IconSpinner />
      }
      return rightIcon || <IconArrowSmDown />
    }, [loading, rightIcon])

    return (
      <SelectPrimitive.Trigger
        ref={ref}
        asChild={asChild}
        className={select.triggerCva({
          isError,
          className,
        })}
        data-disable={disabled}
        disabled={disabled}
        {...restProps}
      >
        {asChild ? (
          children
        ) : (
          <>
            {leftIcon ? (
              <SelectPrimitive.Icon className={select.iconWrapperCva()} asChild>
                {leftIcon}
              </SelectPrimitive.Icon>
            ) : null}
            <div className="trigger-text flex-1 text-left">{children}</div>
            {hideRightIcon ? null : (
              <SelectPrimitive.Icon
                className={select.iconWrapperCva({ isRightIcon: true })}
                asChild
              >
                {rightIconRender}
              </SelectPrimitive.Icon>
            )}
          </>
        )}
      </SelectPrimitive.Trigger>
    )
  },
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cx(select.content, className)}
      position={position}
      sideOffset={8}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cx(
          position === 'popper' && select.viewportPoperMode,
          select.viewport,
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cx(select.label, className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = forwardRef<SelectItemRef, SelectItemProps>((props, ref) => {
  const { children, className, disabled, ...restProps } = props

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={select.itemCva({
        className,
        disabled,
      })}
      {...restProps}
      disabled={disabled}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        className={select.iconWrapperCva({ disabled, isRightIcon: true })}
      >
        <IconCheck className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cx(select.separator, className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
