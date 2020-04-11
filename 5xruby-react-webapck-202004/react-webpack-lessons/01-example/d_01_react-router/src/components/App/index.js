import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Videos from '../Videos';
import Overlay from '../Overlay';

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/video" component={Videos} />
          <Route path="/video/:id" component={Overlay} />
        </div>
      </div>
    </Router>
  );
}
