// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // allow use global variable without undefined <=> 允许使用未明确声明的全局变量
    'no-undef': 'off',

    // allow use the same name as a variable in its containing scope <=> 允许使用和父作用域同名的变量
    'no-shadow': 'off',

    // allow omitting parens when there is only one argument <=> 当只有一个参数时允许省略圆括号
    'arrow-parens': ['error', 'as-needed'],

    // enforce braces around the function body <=> 强制在箭头函数体周围使用大括号
    // 'arrow-body-style': ['error', 'always'],

    // disallow trailing commas <=> 不添加尾逗号
    // 'comma-dangle': ['error', 'never'],

    // allow reassignment of function parameters <=> 允许对函数参数重新赋值
    'no-param-reassign': ['error', { props: false }],

    // allow use console object <=> 允许使用console对象
    'no-console': ['error', { allow: ['log', 'info', 'warn', 'error'] }],

    // disallow function expression has name <=> 函数表达式不能有函数名
    'func-names': ['error', 'never'],

    // allow use short circuit evaluations in your expressions <=> 允许在表达式中使用逻辑短路求值
    'no-unused-expressions': ['error', { allowShortCircuit: true }],

    // allow use operator ++ and -- <=> 可以使用++和--操作符
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow spaces before function parentheses <=> 不允许在函数的括号前留空白
    'space-before-function-paren': ['error', 'never'],

    // allow for..in and for..of syntax base on airbnb-base <=> 允许使用for..in和for..of语法，因为是基于airbnb规则的，默认是不能使用for..in和for..of语法的
    // 'no-restricted-syntax': [
    //   'error',
    //   { selector: 'LabeledStatement', message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.' },
    //   { selector: 'WithStatement', message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.' },
    // ],

    // allow debugger during development <=> 允许在开发环境使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // close rule import/no-unresolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',

    // close rule import/no-extraneous-dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',

    // close rule import/extensions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': 'off',
  },
};
