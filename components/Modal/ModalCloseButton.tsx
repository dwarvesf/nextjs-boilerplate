import cx from 'classnames'
import { IconClose } from 'components/icons/components/IconClose'
import { useModalContext } from './context'

export const ModalCloseButton: React.FC<{
  className?: string
  disabled?: boolean
}> = ({ className, disabled, ...props }) => {
  const { onClose } = useModalContext()

  return (
    <button
      className={cx(
        'absolute right-6 top-6 hover:text-gray-800 focus:text-gray-800 text-gray-400 transition-all duration-200 text-xl',
        'outline-none focus:ring-2 focus:ring-pink-500 rounded-md',
        { 'cursor-not-allowed opacity-25': disabled },
        className,
      )}
      {...props}
      disabled={disabled}
      onClick={onClose}
      aria-label="Close"
    >
      <IconClose aria-hidden />
    </button>
  )
}
