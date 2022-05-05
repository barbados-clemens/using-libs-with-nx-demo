module.exports = {
  displayName: 'r-lib-one',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/r-lib-one',
  // globalSetup: '<rootDir>/setup.ts',
  // globalTeardown: '<rootDir>/teardown.ts',
};
