import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
    return (
       <div style={navContainerStyle}> 
			<div className="container">
			<nav className="row"  role="nav">
					<Link className="col-xs-3" to="/give" style={leftNavStyle} >Moosh Boosh</Link>
					<Link className="col-xs-2" to="/redeem" style={rightNavStyle}>Redeem a Moosh Boosh</Link>
					<Link className="col-xs-2" to="/give" style={rightNavStyle} >Give a Moosh Boosh</Link>
					<Link className="col-xs-1" to="/about" style={rightNavStyle} >About</Link>
				</nav>
			</div>
	 </div>
    )
  }
})

var rightNavStyle = {
	float:'right',
	marginLeft: '20px'
}

var leftNavStyle = {
	float:'left'
}

var navContainerStyle = {
	width: '100%',
	background: 'black'
}