import { tv, VariantProps } from 'tailwind-variants'

const group = 'space-y-1'

const content = [
  'relative z-50 w-fit',

  'data-[state=open]:animate-in',
  'data-[state=open]:fade-in-0',
  'data-[state=open]:zoom-in-90',
  'data-[state=open]:duration-300',

  'data-[state=open]:data-[side=bottom]:slide-in-from-top-10',
  'data-[state=open]:data-[side=left]:slide-in-from-right-10',
  'data-[state=open]:data-[side=right]:slide-in-from-left-10',
  'data-[state=open]:data-[side=top]:slide-in-from-bottom-10',

  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=closed]:zoom-out-90',
  'data-[state=closed]:duration-300',

  'data-[state=closed]:data-[side=bottom]:slide-out-to-top-10',
  'data-[state=closed]:data-[side=left]:slide-out-to-right-10',
  'data-[state=closed]:data-[side=right]:slide-out-to-left-10',
  'data-[state=closed]:data-[side=top]:slide-out-to-bottom-10',
].join(' ')

const viewportPoperMode =
  'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] '

const viewport =
  'space-y-1 bg-white p-3 rounded-lg shadow-sm border border-gray-300'

const label =
  'text-[10px] uppercase font-bold text-gray-600 tracking-tight leading-4'

const bodyWrapper = tv({
  base: ['flex-1 flex flex-col items-start'],
  variants: {
    disabled: {
      true: 'text-gray-400',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

const subTitleWrapper = tv({
  base: ['text-xs'],
  variants: {
    disabled: {
      true: 'text-gray-400',
      false: 'text-gray-600',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

const separator = 'block !my-3 w-full h-px bg-gray-400'

const triggerCva = tv({
  base: [
    'bg-white',
    'text-sm leading-4 px-4 h-10 rounded-lg',
    'border border-gray-300',
    'flex gap-2 items-center',
    'transition duration-100',

    'text-sm',
    'truncate',

    'focus-visible:outline-none',
    'focus-visible:shadow-sm',
    'hover:outline-none focus:outline-none',
    'data-[disable=true]:pointer-events-none',
    'data-[error=true]:border-red-600',
    'data-[disable=true]:text-gray-400',

    'text-gray-700',
    'border-gray-300',
    'hover:bg-gray-50',
    'active:bg-gray-100',
  ],
  variants: {
    isError: {
      true: 'border-red-600',
    },
  },
  defaultVariants: {
    isError: false,
  },
})

const iconWrapperCva = tv({
  variants: {
    isRightIcon: {
      true: 'text-base max-w-4 max-h-4',
      false: 'text-2xl max-w-6 max-h-6',
    },
    disabled: {
      true: 'opacity-50',
      false: 'opacity-100',
    },
  },
  defaultVariants: {
    isRightIcon: false,
    disabled: false,
  },
})

const itemCva = tv({
  base: [
    'flex gap-2 items-center',
    'transition duration-100',
    'text-sm',
    'truncate',
    'font-medium',
    'hover:bg-gray-50 focus:bg-gray-50',
    'hover:outline-none focus:outline-none',
    'p-2',
    'rounded-lg',
    'focus:shadow-none',
    'focus-visible:outline-none',
    'justify-between',
  ],
  variants: {
    disabled: {
      true: ['text-gray-400', 'cursor-not-allowed'],
      false: ['text-gray-700', 'cursor-pointer'],
    },
    isError: {
      true: 'text-red-600',
    },
  },
  defaultVariants: {
    disabled: false,
    isError: false,
  },
})

export const select = {
  group,
  content,
  label,
  separator,
  subTitleWrapper,
  viewport,
  viewportPoperMode,
  itemCva,
  triggerCva,
  iconWrapperCva,
  bodyWrapper,
}

export type selectItemProps = VariantProps<typeof itemCva>
export type SelectTriggerStyleProps = VariantProps<typeof triggerCva>
