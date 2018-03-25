// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 0,
      'ignores': []
    }],
    'semi': ['error', 'always'],
  },
}
