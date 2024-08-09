import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import './styles.css'
import { Parameters } from '@storybook/react'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
