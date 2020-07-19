module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'react-hooks/rules-of-hooks': ['error'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/button-has-type': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/require-default-props': ['off'],
    'no-underscore-dangle': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/**/*.test.tsx',
          'src/**/*.stories.tsx',
          'mock/**/*',
        ],
        peerDependencies: false,
      },
    ],
  },
};
