import { Text, TextProps } from 'components/Text'
import React from 'react'
import { useAlertContext } from './context'
import styles from './Alert.styles'

export const AlertContent = ({ children, ...props }: Omit<TextProps, 'as'>) => {
  const { status } = useAlertContext()
  return (
    <Text as="p" className={styles({ status }).content()} {...props}>
      {children}
    </Text>
  )
}
