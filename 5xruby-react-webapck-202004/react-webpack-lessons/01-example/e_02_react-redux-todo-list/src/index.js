import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './css/style.scss';
import 'css/app.scss';
/*
let preloadedState = null;
if (process.env.NODE_ENV === 'development') {
  preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
const store = createStore(reducer, preloadedState);
// */

const store = createStore(reducer);


function render() {
  const App = require('./components/App').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
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
