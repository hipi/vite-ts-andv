module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  /* 扩展配置，加一些插件 */
  extends: [
    'plugin:vue/vue3-recommended', // vue3 规则
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则
    'plugin:prettier/recommended', // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
  },
};
