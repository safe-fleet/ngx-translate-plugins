const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
module.exports = {
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: './projects/testing/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        diagnostics: {
          ignoreCodes: [151001]
        }
      }
    ]
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'contract.spec.ts$', 'comp.spec.ts$'],
  silent: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  roots: ['<rootDir>/projects/testing/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/interfaces/**',
    '!**/*.spec.ts',
    '!**/*.module.ts',
    '!**/polyfills.ts',
    '!**/main.ts',
    '!**/index.ts',
    '!**/src/environments/**',
    '!**/*.d.ts',
    '!**/public-api.ts'
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/projects/testing/'
  }),
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'clover', 'html', 'text']
};
