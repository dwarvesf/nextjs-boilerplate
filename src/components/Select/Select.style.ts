import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'form-select w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
  variants: {
    invalid: {
      true: 'border-red-500 outline-none shadow-none focus:ring-0 focus:border-red-500',
      false: 'focus:ring-pink-500 focus:border-pink-500 border-gray-300',
    },
  },
})

export default styles
