import React, { Component } from 'react';
import './app.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import history from './history';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css';
const MainContainer = loadable(() =>
  import(/* webpackPrefetch: true *//* webpackChunkName: "MainContainer" */'./containers/MainContainer/MainContainer'),
)
const ProductContainer = loadable(() =>
  import(/* webpackPrefetch: true *//* webpackChunkName: "ProductContainer" */'./containers/ProductContainer/ProductContainer'),
)
export default class App extends Component {
  render() {
    return (
      <Router history={history}  basename="/world/">
          <Route path="/" exact={true} component={MainContainer} />
          <Route path="/:category" component={ProductContainer} />
      </Router>
    );
  }
}
