import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    container: 'relative inline-flex items-center',
    label: 'ml-2',
    input:
      'h-4 w-4 rounded border text-pink-600 form-checkbox focus:ring-pink-500 border-gray-300',
  },
  variants: {
    invalid: {
      true: {
        label: '!text-red-600',
        input:
          '!border-red-500 focus:!border-red-500 bg-red-100 checked:!bg-red-400 !text-white focus:ring-red-500',
      },
    },
    disabled: {
      true: {
        label: 'text-gray-500',
        input:
          'cursor-not-allowed text-gray-400 bg-gray-100 border-gray-400 focus:border-gray-500 checked:border-gray-400 checked:border-gray-400',
      },
    },
    readOnly: {
      true: {
        input: 'cursor-not-allowed',
      },
    },
  },
})

export default styles
