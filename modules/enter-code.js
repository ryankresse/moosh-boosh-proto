import React from 'react'

export default React.createClass({
 getInitialState() {
 	return {code:""}
 },
 onChange(e) {
 	this.setState({
 		code: e.target.value
 	})
 },
 handleSubmit() {
 	  	this.props.transitionTo('/redeem/loading')
 },
   render() {
    return (
    <div style={backgroundStyle}>
    	<div style={containerStyle}>
    		<h1 style={headerStyle}>Welcome to New York!</h1>
			<input className="form-control" style={inputStyle} value={this.state.code} onChange={this.onChange} placeholder="Enter your Moosh Boosh Redemption Code"/>
    		<button type="button" style={buttonStyle} onClick={this.handleSubmit} className="btn btn-default">Submit</button>

    	</div>
    </div>
    )
  }
})

var backgroundStyle = {
  background: 'url(' + 'images/choose_neighborhood.jpg' + ') no-repeat center center fixed',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  msBackgroundSize: 'cover',
  BackgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
}	

var buttonStyle = {
	width: "310px",
	marginTop: "10px"
}

var headerStyle = {
	color: '#fff'
}	

var inputStyle = {
	width: '310px'
}	