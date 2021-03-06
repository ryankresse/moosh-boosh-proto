
import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory } from 'react-router'
import About from './modules/About'
import ChooseNeighborhood from './modules/choose-neighborhood'
import Give from './modules/give';
import Redeem from './modules/redeem';
import EnterCode from './modules/enter-code';
import RedeemLoading from './modules/redeem-loading';
import RedeemConfirm from './modules/redeem-confirm';
import Basics from './modules/basics';
import PurchaseInfo from './modules/purchase-info';
import GiveConfirm from './modules/give-confirm';
import GiveSuccess from './modules/give-success';

function transitionToRedeemConfirm() {
	hashHistory.push('/redeem/confirm');
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
 	 <IndexRoute component={ChooseNeighborhood}/>
 	 <Route component={Give}>
			<Route path="/give/:neighborhood/the-basics" component={Basics}/>
      		<Route path="/give/:neighborhood/purchase-info" component={PurchaseInfo}/>
      		 <Route path="/give/:neighborhood/confirm" component={GiveConfirm}/>
      </Route>
      <Route path="/give/success" component={GiveSuccess}/>


      <Route path="/redeem" component={Redeem} >
			<IndexRedirect to="/redeem/enter-code"/>
			<Route path="/redeem/enter-code" component={EnterCode}/>
			<Route path="/redeem/loading" component={RedeemLoading}/>
			<Route path="/redeem/confirm"  component={RedeemConfirm}/>
		</Route>				   
      
      <Route path="/about" component={About}/>    
    </Route>
  </Router>
), document.getElementById('app'))
