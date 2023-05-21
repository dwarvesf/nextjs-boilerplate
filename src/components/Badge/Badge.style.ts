import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'inline-flex text-sm font-medium rounded-full px-2',
  variants: {
    type: {
      success: 'bg-green-100 text-green-700',
      error: 'bg-red-100 text-red-700',
      warning: 'bg-yellow-100 text-yellow-700',
    },
  },
})

export default styles
