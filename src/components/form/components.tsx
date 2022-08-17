import { HTMLAttributes } from 'react'
import cx from 'classnames'
import { Text } from 'components/Text'

export const FormErrorInfoMessage: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...rest }) => (
  <Text
    className={cx('text-red-600 text-xs leading-normal mt-1', className)}
    {...rest}
  />
)

export const FormInfoMessage: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...rest }) => (
  <Text
    className={cx('text-sm text-gray-500 leading-normal mt-1', className)}
    {...rest}
  />
)
