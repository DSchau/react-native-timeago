module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js'
  },
  moduleNameMapper: {
    'react-native': '<rootDir>/node_modules/react-native-web'
  }
}
