/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  moduleNameMapper: {
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  resolver: 'jest-ts-webcompat-resolver',
};