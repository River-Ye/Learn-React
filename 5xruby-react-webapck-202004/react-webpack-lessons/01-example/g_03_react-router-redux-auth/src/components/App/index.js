import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Videos from '../Videos';
import Login from '../Login';

import ProtectedRoute from '../../containers/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/video" component={Videos} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
