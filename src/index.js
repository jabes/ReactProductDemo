import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import ProductCards from './components/ProductCards'

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductCards}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
