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
  
  transitionTo(url) {
  	hashHistory.push(url)
  },
  
  render() {
    return (
      <div class="container-fluid">
        <nav style={navStyles} role="nav">
            <Link to="/give" className="col-xs-3 pull-left">Moosh Boosh</Link>
            <Link to="/redeem" style={rightNavStyle}>Redeem a Moosh Boosh</Link>
			<Link to="/give" style={rightNavStyle}>Give a Moosh Boosh</Link>
         	<Link to="/about" style={rightNavStyle}>About</Link>

        </nav>
       {this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.transitionTo
          })}

      </div>
    )
  }
})

var navStyles = {
	position: 'absolute',
	top: '20px',
	width: "100%"
}


var rightNavStyle = {
	float:'right',
	marginRight: '20px'
}
