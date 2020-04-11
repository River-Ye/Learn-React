import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './css/app.scss';
import { stores } from '@/Context';


const render = () => {
  const NextApp = require('./components/App').default;
  ReactDOM.render(
    <Provider {...stores}>
      <NextApp />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render();
    });
  }
}
