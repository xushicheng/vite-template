module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {sourceType: 'module'},
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'simple-import-sort',],
  env: {es6: true},
  globals: {JSX: true, React: true},
  settings: {
    react: {version: 'detect'},
    'import/resolver': {
      typescript: {alwaysTryTypes: true, project: '.'},
      node: {
        paths: ['.'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'linebreak-style': ['off', 'windows'],
    camelcase: 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    'react/display-name': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'function-paren-newline': 0,
    'arrow-parens': 0,
    'newline-per-chained-call': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    // 禁止使用默认导入
    'import/no-default-export': 2,
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],
    // 禁止或强制在括号内使用空格
    'array-bracket-spacing': ['error', 'always'],
    // 强制模板字符串中空格的使用
    'template-curly-spacing': ['error', 'always'],
    // 强制 react 多 prop 新起一行放置
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', {maximum: 1}],
    // 强制 prop 缩进
    'react/jsx-indent-props': [2, 2],
    // 强制尖括号关闭符位置
    'react/jsx-closing-bracket-location': [
      2,
      {
        nonEmpty: false,
        selfClosing: 'line-aligned',
      },
    ],
    // 强制 prop 排序
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true, // 回调函数后置
        shorthandFirst: true, // 缩写前置
        ignoreCase: false, // 不允许忽略大小写
        reservedFirst: true, // 内置属性(key, ref)前置
      },
    ],
  },
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ['src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
