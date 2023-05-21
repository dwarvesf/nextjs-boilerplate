import { tv } from 'tailwind-variants'

const styles = tv({
  base: [
    'inline-flex justify-center items-center text-center whitespace-nowrap leading-none',
    'focus:outline-none transition duration-200',
  ],
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export default styles
