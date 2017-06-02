module.exports = {
  extends: 'airbnb',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'], allowAfterThis: true }],
    'react/no-danger': 'off',
  },
};
