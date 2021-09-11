const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^constants/(.*)$': '<rootDir>/constants/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^context/(.*)$': '<rootDir>/context/$1',
    '^libs/(.*)$': '<rootDir>/libs/$1',
    '\\.(css|less|scss)$': '<rootDir>/config/jest/cssTransform.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/types/',
    '<rootDir>/node_modules/',
    '<rootDir>/scripts/',
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
};
