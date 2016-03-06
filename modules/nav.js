import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
    return (
       <div style={navContainerStyle}> 
			<div className="container">
			<nav className="row"  role="nav">
					<div className="col-xs-3" style={logoContainer}>
						<div style={logoWrap}>
							<Link className="no-decoration" style={logo}  to="/give" >Moosh Boosh</Link>
							<div style={tagLine}>Go far. Stay local.	</div>
						</div>
					</div>
						<Link className="col-xs-2" to="/redeem" style={rightNavStyle}>Redeem a Moosh Boosh</Link>
					<Link className="col-xs-2" to="/give" style={rightNavStyle} >Give a Moosh Boosh</Link>
					<Link className="col-xs-1" to="/about" style={rightNavStyle}>About</Link>
				</nav>
			</div>
	 </div>
    )
  }
})

var rightNavStyle = {
	float:'right',
	marginLeft: '20px',
	paddingTop: '20px'
}

var logoContainer = {
	float:'left'
}

var navContainerStyle = {
	width: '100%',
	color: '#fff',
	background: 'black',
	textDecoration: 'none'
}

var logo = {
	fontFamily: 'sacramento, serif',
	fontSize: '36px',
	paddingTop: '5px'
}


var logoWrap= {
	textAlign:'center'
}

var tagLine= {
	position: 'relative',
	bottom: '15px'
}


