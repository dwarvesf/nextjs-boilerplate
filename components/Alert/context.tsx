import { createContext } from '@dwarvesf/react-utils'

export type AlertStatus = 'error' | 'success' | 'info' | 'warning'

const [Provider, useAlertContext] = createContext<{
  status: AlertStatus
}>()

export const AlertProvider: React.FC<{ status: AlertStatus }> = ({
  children,
  ...props
}) => {
  return <Provider value={props}>{children}</Provider>
}

export { useAlertContext }
