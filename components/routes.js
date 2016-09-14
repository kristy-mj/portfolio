import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Web from './Web'
import Design from './Design'
import Contact from './Contact'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/web' component={Web} />
      <Route path='/design' component={Design} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)
