import React from 'react'
import cx from 'classnames'
import { IconExlamationCirleSolid } from 'components/icons/components/IconExlamationCirleSolid'
import { IconCloseCircleSolid } from 'components/icons/components/IconCloseCircleSolid'
import { IconCheckCircleSolid } from 'components/icons/components/IconCheckCircleSolid'
import { IconInformationCircleSolid } from 'components/icons/components/IconInformationCircleSolid'
import { useAlertContext, AlertStatus } from './context'

function getIcon(status: AlertStatus) {
  if (status === 'error') {
    return IconCloseCircleSolid
  }

  if (status === 'success') {
    return IconCheckCircleSolid
  }

  if (status === 'warning') {
    return IconExlamationCirleSolid
  }

  return IconInformationCircleSolid
}

export const AlertIcon = () => {
  const { status } = useAlertContext()

  const iconClassName = cx(
    'text-xl flex-none inline-flex mr-4 mt-0.5 flex-none leading-none',
    {
      'text-red-400': status === 'error',
      'text-green-400': status === 'success',
      'text-yellow-400': status === 'warning',
      'text-blue-400': status === 'info',
    },
  )

  const Icon = getIcon(status)

  return (
    <div className={iconClassName}>
      <Icon />
    </div>
  )
}
