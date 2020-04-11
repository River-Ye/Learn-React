import React from 'react';
import Loadable from 'react-loadable';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Overlay from '../Overlay';

function Loading() {
  return <div>Loading...</div>;
}
// TODO
// const Videos = Loadable({
//   loader() {
//     return import(/* webpackChunkName: "Videos" */'../Videos');
//   },
//   loading: Loading,
// });


export default function App() {
  return (
    <Router>
      <div className="app" id="top">
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
