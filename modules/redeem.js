import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import EnterCode from './enter-code';
import RedeemLoading from './redeem-loading';
import RedeemConfirm from './redeem-confirm';
export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
      	  <Route path="/redeem/loading" component={RedeemLoading}/>
		  <Route path="/redeem/confirm"  component={RedeemConfirm}/>
      </Router>
    )
  }
})