const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactNativeTimeAgo',
      externals: {
        'react': 'React',
        'react-native': 'ReactNative',
        'react-router': 'ReactRouter'
      }
    }
  },
  webpack: {
    aliases: {
      'react-native': 'react-native-web'
    }
  }
}
