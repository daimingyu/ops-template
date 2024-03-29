module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: [
    '@typescript-eslint',
    'react'
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],

  rules: {
    'react/prop-types': 'off',
  },
};
