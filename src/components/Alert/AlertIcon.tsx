import React from 'react'
import IconExlamationCirleSolid from 'components/icons/svg/exlamation-cirle-solid.svg'
import IconCloseCircleSolid from 'components/icons/svg/close-circle-solid.svg'
import IconCheckCircleSolid from 'components/icons/svg/check-circle-solid.svg'
import IconInformationCircleSolid from 'components/icons/svg/information-circle-solid.svg'
import { useAlertContext, AlertStatus } from './context'
import styles from './Alert.styles'

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
  const Icon = getIcon(status)

  return (
    <div className={styles({ status }).icon()}>
      <Icon />
    </div>
  )
}
