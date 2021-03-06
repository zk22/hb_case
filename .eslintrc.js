const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
  },
  extends: [
    'standard',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    project: [path.join(__dirname, './tsconfig.json')],
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-dupe-else-if': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-import-assign': 'error',
    'no-setter-return': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'no-template-curly-in-string': 'error',
    'array-callback-return': ['error', { allowImplicit: true }],
    curly: ['error', 'all'],
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always'],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['constructors', 'arrowFunctions'] },
    ],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    radix: 'error',
    'wrap-iife': ['error', 'inside'],
    'no-delete-var': 'off',
    'no-shadow': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unsafe-call': 'off',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'local', args: 'none', ignoreRestSiblings: true },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'key-spacing': [
      'error',
      { beforeColon: false, afterColon: true, mode: 'strict' },
    ],
    'keyword-spacing': ['error', { before: true, after: true }],
    'max-lines-per-function': [
      'error',
      { max: 140, skipBlankLines: true, skipComments: true },
    ],
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'new-parens': ['error', 'always'],
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'handle-callback-err': 'off',
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'off',
          constructors: 'off',
          parameterProperties: 'off',
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'off',
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'default',
    //     format: ['camelCase'],
    //     leadingUnderscore: 'allow',
    //     trailingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'variableLike',
    //     format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
    //     leadingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'typeLike',
    //     format: ['UPPER_CASE', 'PascalCase'],
    //   },
    //   {
    //     selector: 'enumMember',
    //     format: ['UPPER_CASE', 'PascalCase'],
    //   },
    //   {
    //     selector: 'property',
    //     format: ['camelCase', 'PascalCase', 'snake_case'],
    //     leadingUnderscore: 'allow',
    //   },
    // ],
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      { allowDestructuring: false, allowedNames: ['self', 'that'] },
    ],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } },
      },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/no-array-constructor': 'off',

    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'react/jsx-no-bind': 'off',
  },
};
