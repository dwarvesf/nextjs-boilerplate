import { tv } from 'tailwind-variants'

const focusRing = 'focus:ring-2 focus:ring-offset-2 focus:outline-none'

const styles = tv({
  base: 'relative font-medium',
  variants: {
    fullWidth: {
      true: 'w-full flex',
    },
    loading: {
      true: 'cursor-default',
    },
    size: {
      lg: 'text-base',
      md: 'text-sm',
      sm: 'text-xs',
    },
    appearance: {
      primary: '',
      secondary: '',
      link: '',
      default: '',
    },
    disabled: {
      true: '',
    },
  },
  compoundVariants: [
    {
      appearance: 'primary',
      disabled: false,
      className: [
        'border-transparent text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
        focusRing,
      ],
    },
    {
      appearance: 'primary',
      disabled: true,
      className: 'bg-gray-100 text-gray-400',
    },
    {
      appearance: 'secondary',
      disabled: false,
      className: [
        'border-transparent text-white bg-gray-500 hover:bg-gray-600 focus:ring-gray-400',
        focusRing,
      ],
    },
    {
      appearance: 'secondary',
      disabled: true,
      className: 'bg-gray-100 text-gray-400',
    },
    {
      appearance: 'link',
      disabled: false,
      className: [
        'text-pink-600 hover:text-pink-700 focus:ring-pink-500 rounded-sm',
        focusRing,
      ],
    },
    {
      appearance: 'link',
      disabled: true,
      className: 'text-gray-400',
    },
    {
      appearance: 'default',
      disabled: false,
      className: [
        'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-pink-500',
        focusRing,
      ],
    },
    {
      appearance: 'default',
      disabled: true,
      className: 'bg-gray-100 text-gray-400',
    },
    {
      appearance: ['primary', 'secondary', 'default'],
      size: 'lg',
      className: 'py-4 px-6 px-8',
    },
    {
      appearance: ['primary', 'secondary', 'default'],
      size: 'md',
      className: 'px-5 py-3',
    },
    {
      appearance: ['primary', 'secondary', 'default'],
      size: 'sm',
      className: 'py-2 px-4 px-5',
    },
    {
      appearance: ['primary', 'secondary', 'default'],
      className: 'rounded-md shadow-sm border',
    },
  ],
  defaultVariants: {
    fullWidth: false,
    loading: false,
    disabled: false,
    size: 'md',
    appearance: 'default',
  },
})

export default styles
