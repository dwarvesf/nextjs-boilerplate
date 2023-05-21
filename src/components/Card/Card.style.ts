import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'bg-white sm:rounded-lg',
  variants: {
    shadow: {
      true: 'shadow',
    },
    spacing: {
      true: 'px-4 py-5 sm:px-6',
    },
  },
})

export default styles
