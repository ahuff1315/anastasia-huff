module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
  ],
  plugins: ['prettier', 'vue', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['.vue'],
      },
    ],
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-self-closing': 'off',
    'no-underscore-dangle': 'off',
  },
};
