//give
	//basics
	//purchase
	//info
  var defaultMessage = '(Note to be shown guest when they redeem Moosh Boosh code. 150 character limit.)';

import React from 'react'
import { hashHistory } from 'react-router';
export default React.createClass({
  
  
  componentWillMount() {
  	var formData = {
  			customerName: "",
  			recipientName: "",
  			customerEmail: "",
  			giftMessage: defaultMessage,
  			securityCode: "",
  			cardName: "",
  			cardNumber: "",
  			expirationMonth: "Month",
  			expirationYear: "Year"
  		};
  	this.setState(formData)
  
  },
  
  onInputChange(prop, value) {
  	var newState = Object.assign({}, this.state, {[prop]: value})
  	this.setState(newState);
  },
  render() {
  	return (
  	<div>
  	<div className="container" style={backgroundStyle}>
	
			<header className="row">
				<h1 className="col-xs-12">Give your guest a Moosh Boosh from one of the amazing local businesses
				in the {this.props.params.neighborhood}</h1>
			</header>
			<div className="row">
				<div className="col-xs-4">
					<image style={imageStyle} src={"images/daveys.jpg"} />
				</div>
		
				<div className="col-xs-4">
					<image style={imageStyle} src={"images/ost.jpg"} />
				</div>
		
				<div className="col-xs-4">
					<image style={imageStyle} src={"images/milk_bar.jpg"} />
				</div>
			</div>
		
  	</div>{/*container*/}
  	
       {this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.props.transitionTo, onInputChange: this.onInputChange, formData: this.state
          })}

  </div>)
  }
})

var backgroundStyle = {
  marginTop: '100px'
};

var imageStyle = {
	maxWidth: "100%",
	width: "100%",
	height: "auto"
}

var circle = {
width:'30px',
height:'30px',
borderRadius:'50%',
fontSize:'15px',
lineHeight:'30px',
textAlign:'center',
background:'#fff',
border: '1px solid #000',
margin: '0 auto'
}

var circleWrapper = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around'
}

var formHeader = {
	textAlign: "center",
	fontSize: "16px"
}

var circleContainer = {
	textAlign: "center"
}

var headerStyle ={
	textAlign: 'center'
};

var lowerBackground = {
	background: "yellow",
	paddingBottom: '80px'
}

var submitButton = {
	marginTop:'20px'
}