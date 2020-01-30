// .eslintrc.js
// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    globals: {
      '_': true, // lodash
      'Enumerable': true // linq
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      'standard', // https://github.com/standard/standard/blob/master/docs/RULES-en.md,
      'plugin:vue/essential'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off'
    }
  }