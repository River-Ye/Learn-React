import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Videos from '../Videos';
import Footer from '../Footer';
import Login from '@/components/Login';

import ProtectedRoute from '@/containers/ProtectedRoute';

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
          <Footer />
        </div>
      </div>
    </Router>
  );
}
