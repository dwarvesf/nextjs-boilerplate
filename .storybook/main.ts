import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const storybookConfig: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  staticDirs: ['../public'],
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-styling-webpack',
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        }),
      ]
    }

    if (config.module?.rules) {
      // This modifies the existing image rule to exclude `.svg` files
      // since we handle those with `@svgr/webpack`.
      const imageRule = config.module.rules.find((rule: any) => {
        if (typeof rule !== 'string' && rule.test instanceof RegExp) {
          return rule.test.test('.svg')
        }
      })
      if (typeof imageRule !== 'string') {
        ;(imageRule as any).exclude = /\.svg$/
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    }

    config.module?.rules?.push({
      test: /\.mjs$/,
      include: [/node_modules/],
      type: 'javascript/auto',
    })

    return config
  },
}
export default storybookConfig
