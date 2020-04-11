/* eslint global-require:0, no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'css/style.scss';
import 'css/app.scss';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      ReactDOM.render(<NextApp />, rootEl);
    });
  }
}
