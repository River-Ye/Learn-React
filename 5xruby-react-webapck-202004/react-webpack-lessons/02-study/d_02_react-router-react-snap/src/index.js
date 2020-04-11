import React from 'react';
import { hydrate, render } from "react-dom";
// TODO
import App from '@/components/App';

const rootEl = document.getElementById('root');
if (rootEl.hasChildNodes()) {
  hydrate(<App />, rootEl);
} else {
  render(<App />, rootEl);
}


// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      render(<NextApp />, rootEl);
    });
  }
}
