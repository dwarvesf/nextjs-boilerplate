import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'w-full border-t',
  variants: {
    color: {
      'gray-300': 'border-gray-300',
      'gray-200': 'border-gray-200',
    },
  },
})

export default styles
