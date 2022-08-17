import cx from 'classnames'
import { Fragment, HTMLAttributes } from 'react'
import { Transition } from '@headlessui/react'
import { useModalContext } from './context'

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?:
    | 'max-w-xl'
    | 'max-w-lg'
    | 'max-w-sm'
    | 'max-w-md'
    | 'max-w-xs'
    | 'max-w-2xl'
    | 'max-w-3xl'
    | 'max-w-4xl'
    | 'max-w-5xl'
    | 'max-w-6xl'
    | 'max-w-full'
}
export const ModalContent: React.FC<Props> = ({
  className,
  children,
  size = 'max-w-xl',
  ...props
}) => {
  const { fullScreen, animation } = useModalContext()

  const animationProps =
    animation === 'scale'
      ? {
          enter: 'ease-out duration-300',
          enterFrom: 'opacity-0 scale-50',
          enterTo: 'opacity-100 scale-100',
          leave: 'ease-in duration-100',
          leaveFrom: 'opacity-100 scale-200',
          leaveTo: 'opacity-0 scale-75',
        }
      : {
          enter: 'ease-out duration-300',
          enterFrom: 'opacity-0 translate-y-full',
          enterTo: 'opacity-100 translate-y-0',
          leave: 'ease-in duration-200',
          leaveFrom: 'opacity-100 translate-y-0',
          leaveTo: 'opacity-0 translate-y-full',
        }
  return (
    <Transition.Child as={Fragment} {...animationProps}>
      <div
        {...props}
        className={cx(
          'bg-white shadow rounded-lg w-full relative z-10',
          { 'h-full': fullScreen, 'p-5': !fullScreen },
          fullScreen ? 'max-w-full' : size,
          className,
        )}
      >
        {children}
      </div>
    </Transition.Child>
  )
}
