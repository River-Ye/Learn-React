module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'global-require': 0,
    'react/prefer-stateless-function': 0,
    'no-console': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/button-has-type': 0,
  },
};
