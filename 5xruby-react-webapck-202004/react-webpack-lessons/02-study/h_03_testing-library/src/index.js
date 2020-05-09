import React from 'react';
import ReactDOM from 'react-dom';
import 'css/app.scss';

function render() {
  const App = require('./components/App').default;
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
}

render();


// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render();
    });
  }
}
