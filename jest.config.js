const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^constants/(.*)$': '<rootDir>/constants/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^context/(.*)$': '<rootDir>/context/$1',
    '^libs/(.*)$': '<rootDir>/libs/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/types/',
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
