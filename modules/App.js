import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import Nav from './nav';
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
  
  
  transitionTo(url) {
  	hashHistory.push(url)
  },
  
  render() {
      return (
      <div style={siteGlobal}>
      <Nav/>
      
       {this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.transitionTo})}
      </div>
    )
  }
})



var siteGlobal = {
	fontFamily: 'Raleway, sans-serif'
}


