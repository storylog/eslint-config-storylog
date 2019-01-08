module.exports = {
  extends: 'airbnb',
  rules: {
    'consistent-return': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': ['error', {
      allow: ['_id'],
      allowAfterThis: true,
    }],
    'react/forbid-prop-types': 'off',
    'react/no-danger': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
