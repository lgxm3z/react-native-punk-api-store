module.exports = {
  root: true,
  extends: '@react-native',

  env: {
    jest: true,
  },

  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
