import React from 'react'

export default React.createClass({
  render() {
      return (
    <div style={backgroundStyle}>
    	<div style={containerStyle}>
			<h1>Your Guest Is Going To Love You!</h1>
				<div className="lead">
					<div>Your guest's code is: XREF-FDWE</div>
					<div>We've sent redemption instructions to your email address.</div>
					<div>Just print them out and leave them for your guest!</div>
				</div> 
		</div>
    
    </div>
    )
  }
})
var backgroundStyle = {
  background: 'url(' + '../images/give_success.jpg' + ') no-repeat center center fixed',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  msBackgroundSize: 'cover',
  BackgroundSize: 'cover',
  height: '100vh',
};

var containerStyle = {
	position:'absolute',
	padding: '10px',
	top: '30%',
	left: '20%',
	width: '400px',
	backgroundColor: "#fff",
	opacity: ".85"
}	
