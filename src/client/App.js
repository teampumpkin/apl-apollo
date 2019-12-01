import React, { Component } from 'react';
import './app.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import history from './history';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MainContainer from './containers/index';
const MainContainer = loadable(() =>
  import('./containers/index'),
)
const Product = loadable(() =>
  import('./containers/product'),
)
export default class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Route path="/" exact={true} component={MainContainer} />
          <Route path="/:category/:product" component={Product} />
      </Router>
    );
  }
}
