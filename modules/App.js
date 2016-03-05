import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
/*import About from './modules/About'
import ChooseNeighborhood from './modules/choose-neighborhood'
import Give from './modules/give';
import Redeem from './modules/redeem';
import EnterCode from './modules/enter-code';
import RedeemLoading from './modules/redeem-loading';
import RedeemConfirm from './modules/redeem-confirm';
*/
function transitionToRedeemConfirm() {
	hashHistory.push('/redeem/confirm');
}


export default React.createClass({
  
  transitionToRedeemConfirm() {
  	hashHistory.push('/redeem/confirm')
  },
  
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/give">Give a Moosh Boosh</Link></li>
          <li><Link to="/redeem">Redeem a Moosh Boosh</Link></li>
        </ul>
    	 {/* add this */}
        {this.props.children}

      </div>
    )
  }
})

