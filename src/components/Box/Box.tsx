import { forwardRefWithAs } from 'utils/forwardRefWithAs'

export interface BoxProps {
  children?: React.ReactNode
}

export const Box = forwardRefWithAs<'div', BoxProps>((props, ref) => {
  const { as: Tag = 'div', children, ...rest } = props

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  )
})

export default Box
