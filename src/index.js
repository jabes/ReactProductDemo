import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Product from './components/Product'

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="product" component={Product}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
