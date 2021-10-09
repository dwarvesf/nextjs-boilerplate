import React from 'react'

export interface BoxProps {
  children?: React.ReactNode
}

export type As<Props = any> = React.ElementType<Props>

export type PropsWithAs<Props = {}, Type extends As = As> = Props &
  Omit<React.ComponentProps<Type>, 'as' | keyof Props> & {
    as?: Type
  }

export function forwardRefWithAs<Props, DefaultType extends As>(
  component: React.ForwardRefRenderFunction<any, any>,
) {
  return React.forwardRef(component) as unknown as ComponentWithAs<
    Props,
    DefaultType
  >
}

export interface ComponentWithAs<Props, DefaultType extends As> {
  <Type extends As>(props: PropsWithAs<Props, Type> & { as: Type }): JSX.Element
  (props: PropsWithAs<Props, DefaultType>): JSX.Element
}

type DefaultElement = 'div'

const BoxComponent = (
  props: PropsWithAs<BoxProps, DefaultElement>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { as: Type = 'div', children, ...rest } = props

  return (
    <Type ref={ref} {...rest}>
      {children}
    </Type>
  )
}

export const Box = forwardRefWithAs<BoxProps, DefaultElement>(BoxComponent)

export default Box
