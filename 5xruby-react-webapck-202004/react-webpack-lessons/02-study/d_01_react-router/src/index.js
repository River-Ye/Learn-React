import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
// TODO
// import App from '@/components/AppCodeSplitting';

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);


// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      ReactDOM.render(<NextApp />, rootEl);
    });
  }
}
