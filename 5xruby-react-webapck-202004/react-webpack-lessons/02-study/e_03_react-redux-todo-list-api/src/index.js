import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { fetchTodoList } from './actions';
import './css/style.scss';
import 'css/app.scss';

// TODO
/*
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchTodoList());
// */

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
