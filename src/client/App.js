import React, { Component } from 'react';
import './app.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import history from './history';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css';
const MainContainer = loadable(() =>
  import('./containers/MainContainer/MainContainer'),
)
const Product = loadable(() =>
  import('./containers/ProductContainer/product'),
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
