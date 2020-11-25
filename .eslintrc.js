module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'prettier/@typescript-eslint', // agrega las reglas de prettier a eslint
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {},
}
