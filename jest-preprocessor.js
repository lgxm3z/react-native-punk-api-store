const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['react-native'],
  plugins: ['@babel/plugin-transform-typescript'],
});
