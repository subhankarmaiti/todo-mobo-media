module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {
        root: './',
        alias: {
          navigators: './src/navigators',
          screens: './src/screens',
          store: './src/redux',
          api: './src/API',
        },
        extensions: [
          '.json',
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
        ],
      },
    },
  },
};
