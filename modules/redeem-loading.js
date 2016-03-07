import React from 'react'
import { Link, hashHistory } from 'react-router'


export default React.createClass({
  componentDidMount() {
  	window.setTimeout(this.transition, 5500);
  	$( "#loadingBlack" ).slideUp( 5000);
  },
  transition() {	
  	this.props.transitionTo('/redeem/confirm');
  },
  render() {
    return (
      <div style={background} className="container-fluid">
      	
      	<div style={loadingWrapper}>
      		<div style={pageHeaders}>
				<h2>Someone likes you. A lot.</h2>
				<p className="lead">They've given you a delightful treat from one of the best spots in your entire neighborhood! </p>
      		</div>
			<div>
				<div style={progressWrapper}>
					<div style={loadingContent, loadingPink}>
						<span style={gift} className="glyphicon glyphicon-gift"></span>
						<span style={logo}>Moosh Boosh</span>
					</div>
					<div id="loadingBlack" style={loadingContent, loadingBlack}>
						<span style={gift} className="glyphicon glyphicon-gift"></span>
						<span style={logo}>Moosh Boosh</span>
					</div>
				</div>
			</div>
     	</div>
     </div>
    )
  }
})


var background = {		
	background:"#FFC2A4"

}
var loadingWrapper = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '100vh'	
};

var loadingPink = {
	color: '#000',
	position: 'absolute',
	top: '0px',
	zIndex: '1',
	background: "transparent"
	
};

var loadingContent = {

}

var loadingBlack = {
	color: '#fff',
	position: 'absolute',
	top: '0px',
	zIndex: '2',
	background: "transparent"
};

var progressWrapper = {
	position: 'relative',
	width: '500px',
	background:'transparent'
};

var pageHeaders = {
	textAlign: 'center'
};


var gift = {
	fontSize: '80px'
}
var logo = {
	fontFamily: 'sacramento, serif',
	fontSize: '80px'
}	

