import { RouterContext } from 'next/dist/shared/lib/router-context' // next 11.2
import { themes } from '@storybook/theming'
import './index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
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
