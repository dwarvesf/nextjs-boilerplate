import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import { IconClose } from 'components/icons/components/IconClose'
import { AlertStatus, AlertProvider } from './context'
import styles from './Alert.styles'

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
  const baseStyles = styles({ status })
  const containerClassName = baseStyles.container()
  const closeClassName = baseStyles.close()

  return (
    <AlertProvider status={status}>
      <div className={cx(containerClassName, className)} {...rest}>
        {children}
        {onClose && (
          <button className={closeClassName} onClick={onClose}>
            <IconClose />
          </button>
        )}
      </div>
    </AlertProvider>
  )
}
