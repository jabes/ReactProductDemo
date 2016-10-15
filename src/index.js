import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import Products from './components/Products'

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Products}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
