
import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import About from './modules/About'
import ChooseNeighborhood from './modules/choose-neighborhood'
import Give from './modules/give';
import Redeem from './modules/redeem';
import EnterCode from './modules/enter-code';
import RedeemLoading from './modules/redeem-loading';
import RedeemConfirm from './modules/redeem-confirm';

function transitionToRedeemConfirm() {
	hashHistory.push('/redeem/confirm');
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ChooseNeighborhood}/>
      <Route path="/give" component={Give}/>
       
       <Route path="/redeem" component={Redeem} />
       		       
      <Route path="/about" component={About}/>
	      
    </Route>
  </Router>
), document.getElementById('app'))
