import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { IconClose } from 'components/icons/components/IconClose'
import { AlertStatus, AlertProvider } from './context'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  status?: AlertStatus
  className?: string
  onClose?: () => void
}

export const Alert: React.FC<AlertProps> = ({
  status = 'error',
  className,
  children,
  onClose,
  ...rest
}) => {
  return (
    <AlertProvider status={status}>
      <div
        className={cx(
          'text-left px-4 py-4 flex relative pr-10 bg-gray-650 rounded-md',
          {
            'bg-red-50': status === 'error',
            'bg-green-50': status === 'success',
            'bg-yellow-50': status === 'warning',
            'bg-blue-50': status === 'info',
          },
          className,
        )}
        {...rest}
      >
        {children}
        {onClose && (
          <button
            className={cx(
              'absolute right-0 top-1 w-12 h-12 flex items-center justify-center transition-all duration-200',
              {
                'text-red-600': status === 'error',
                'text-green-600': status === 'success',
                'text-yellow-600': status === 'warning',
                'text-blue-600': status === 'info',
              },
            )}
            onClick={onClose}
          >
            <IconClose />
          </button>
        )}
      </div>
    </AlertProvider>
  )
}
