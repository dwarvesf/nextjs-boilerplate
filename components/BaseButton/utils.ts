import { ButtonAppearance } from './types'

export interface GetAppearanceButtonStylesTypes {
  appearance?: ButtonAppearance
  disabled?: boolean
}

export function getappearanceButtonStyles({
  appearance = 'primary',
  disabled = false,
}: GetAppearanceButtonStylesTypes) {
  const classNames = ['rounded-md shadow-sm font-medium border']
  const focusRing = 'focus:ring-2 focus:ring-offset-2 focus:outline-none'

  if (appearance === 'default') {
    if (!disabled) {
      classNames.push(
        'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
      )
      classNames.push(focusRing)
    } else if (disabled) {
      classNames.push('bg-gray-100 text-gray-400')
    }
  } else if (appearance === 'primary') {
    if (!disabled) {
      classNames.push(
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
      )
      classNames.push(focusRing)
    } else if (disabled) {
      classNames.push('bg-gray-100 text-gray-400')
    }
  } else if (appearance === 'secondary') {
    if (!disabled) {
      classNames.push(
        'border-transparent text-white bg-gray-500 hover:bg-gray-600 focus:ring-gray-400',
      )
      classNames.push(focusRing)
    } else if (disabled) {
      classNames.push('bg-gray-100 text-gray-400')
    }
  }

  return classNames
}
