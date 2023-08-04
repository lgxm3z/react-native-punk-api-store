module.exports = {
  preset: 'react-native',
  transform: {
    '\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-navigation|@react-native)/)',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/fileMock.js',
  },
};
