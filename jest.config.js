const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^context/(.*)$': '<rootDir>/src/context/$1',
    '^libs/(.*)$': '<rootDir>/src/libs/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/src/types/',
    '<rootDir>/node_modules/',
    '<rootDir>/scripts/',
    '<rootDir>/cypress/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  preset: 'ts-jest',
  collectCoverageFrom: [
    '**/*.(ts|tsx)',
    '!**/*.d.ts',
    '!**/*.stories.js',
    '!**/*.stories.tsx',
    '!**/__stubs__/**',
  ],
  coverageProvider: 'v8',
}

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
      // Workaround to put our SVG mock first
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

module.exports = jestConfig
