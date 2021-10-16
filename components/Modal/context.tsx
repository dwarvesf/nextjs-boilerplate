import { createContext } from '@dwarvesf/react-utils'

export type ModalAnimation = 'scale' | 'slide-up'

export const [ModalContextProvider, useModalContext] = createContext<{
  isOpen: boolean
  onClose: () => void
  fullScreen: boolean
  animation: ModalAnimation
}>()
