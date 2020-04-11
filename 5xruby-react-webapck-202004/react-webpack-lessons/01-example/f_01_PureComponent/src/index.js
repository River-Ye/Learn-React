import React from 'react';
import ReactDOM from 'react-dom';

import { visualizeRender } from 'react-global-render-visualizer';

React.Component = visualizeRender()(React.Component);
React.PureComponent = visualizeRender()(React.PureComponent);

const App = require('@/components/App').default;
require('css/app.scss');

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
