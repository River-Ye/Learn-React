module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/button-has-type': 0,
  },
};
