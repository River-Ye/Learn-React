module.exports = {
  extends: [
    'plugin:testing-library/vue',
    'airbnb',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'testing-library',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0,
    'react/jsx-one-expression-per-line': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/href-no-hash': 0,
    'react/destructuring-assignment': 0,
    'react/button-has-type': 0,
  },
};
