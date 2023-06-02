import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    container: 'text-left px-4 py-4 flex relative pr-10 bg-gray-650 rounded-md',
    body: 'space-y-1 pt-0.5',
    content: 'text-sm',
    icon: 'text-xl flex-none inline-flex mr-4 mt-0.5 flex-none leading-none',
    title: 'font-medium text-sm',
    close:
      'absolute right-0 top-1 w-12 h-12 flex items-center justify-center transition-all duration-200',
  },
  variants: {
    status: {
      error: {
        container: 'bg-red-50',
        content: 'text-red-600',
        icon: 'text-red-600',
        title: 'text-red-600',
        close: 'bg-red-50',
      },
      success: {
        container: 'bg-green-50',
        content: 'text-green-600',
        icon: 'text-green-600',
        title: 'text-green-600',
        close: 'bg-green-50',
      },
      warning: {
        container: 'bg-yellow-50',
        content: 'text-yellow-600',
        icon: 'text-yellow-600',
        title: 'text-yellow-600',
        close: 'bg-yellow-50',
      },
      info: {
        container: 'bg-blue-50',
        content: 'text-blue-600',
        icon: 'text-blue-600',
        title: 'text-blue-600',
        close: 'bg-blue-50',
      },
    },
  },
})

export default styles
