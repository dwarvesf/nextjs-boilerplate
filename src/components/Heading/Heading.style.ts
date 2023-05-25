import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'text-base text-gray-900 leading-snug',
  variants: {
    size: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
  },
  defaultVariants: {
    size: 'h2',
  },
  compoundVariants: [
    {
      size: ['h1', 'h2'],
      className: 'font-bold',
    },
  ],
})

export default styles
