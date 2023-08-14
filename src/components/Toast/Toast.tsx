import { Alert, AlertTitle, AlertIcon, AlertProps } from 'components/Alert'
import { AlertBody } from 'components/Alert/AlertBody'
import { AlertContent } from 'components/Alert/AlertContent'
import hotToast, { Toaster as HotToaster, ToastPosition } from 'react-hot-toast'

const DEFAULT_DURATION = 2000 // 2 seconds
/**
 * The average reading speed is 250 words/min
 * The average word length in English language is 4.7 characters.
 * => speed to read a character is about ~ 50 miliseconds
 */
const MILISECONDS_PER_CHARACTER = 50

interface ToastProps {
  className?: string
  onClose?: () => void
  status?: AlertProps['status']
  title: string
  message?: React.ReactNode
  duration?: number
  position?: ToastPosition
}

const calculateDurationFromMessage = (
  title: string,
  message: React.ReactNode,
) => {
  const titleDuration = title.length * MILISECONDS_PER_CHARACTER

  if (typeof message !== 'string')
    return Math.max(titleDuration, DEFAULT_DURATION)

  return Math.max(
    message.length * MILISECONDS_PER_CHARACTER + titleDuration,
    DEFAULT_DURATION,
  )
}

export function toast(props: ToastProps) {
  const {
    onClose,
    title,
    message,
    duration = calculateDurationFromMessage(title, message),
    position = 'top-center',
    status = 'error',
    ...rest
  } = props

  hotToast(
    (t) => (
      <Alert
        className="sm:w-screen sm:max-w-sm max-w-full"
        id={t.id}
        status={status}
        onClose={() => {
          hotToast.dismiss(t.id)
          if (onClose) {
            onClose()
          }
        }}
        {...rest}
      >
        <AlertIcon />
        <AlertBody>
          <AlertTitle>{title}</AlertTitle>
          {message && <AlertContent>{message}</AlertContent>}
        </AlertBody>
      </Alert>
    ),
    { duration, position },
  )
}

toast.success = (props: Omit<ToastProps, 'status'>) => {
  toast({ status: 'success', ...props })
}

toast.info = (props: Omit<ToastProps, 'status'>) => {
  toast({ status: 'info', ...props })
}

toast.warning = (props: Omit<ToastProps, 'status'>) => {
  toast({ status: 'warning', ...props })
}

toast.error = (props: Omit<ToastProps, 'status'>) => {
  toast({ status: 'error', ...props })
}

export const Toaster = () => (
  <HotToaster
    toastOptions={{
      className: '',
      style: {
        border: 'none',
        padding: '0',
        color: 'transparent',
        background: 'transparent',
        width: 'auto',
        height: 'auto',
        boxShadow: 'none',
        borderRadius: 0,
        lineHeight: 'auto',
        maxWidth: 'auto',
      },
    }}
  />
)
