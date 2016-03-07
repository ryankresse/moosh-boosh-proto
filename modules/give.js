//give
	//basics
	//purchase
	//info
  var defaultMessage = '(Note to be shown guest when they redeem Moosh Boosh code. 150 character limit.)';

import React from 'react'
import { hashHistory } from 'react-router';
export default React.createClass({
  showPopOver() {
		document.getElementById('popOver').style.display = "block";	
	},
	hidePopOver() {
		document.getElementById('popOver').style.display = "none";	
	},
  
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
  			expirationYear: "Year",
  			addr1: "",
  			addr2: "",
  			state: "State",
  			city: "",
  			zip: "",
  			accountUN: "",
  			accountPW: ""
  		};
  	this.setState(formData)
  
  },
  
  onInputChange(prop, value) {
  	var newState = Object.assign({}, this.state, {[prop]: value})
  	this.setState(newState);
  },
  render() {
  	return (<div>
		<div className="container" style={backgroundStyle}>
				<header className="row">
					<h1 style={giveHeader} className="col-xs-12">Give your guest a Moosh Boosh from one of the amazing local businesses
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
				<div className="row">
					<div style={whatsAContainer} className="col-xs-2 col-xs-offset-5">
							<div id="popOver" style={popOver}>{popOverText}</div>
							<button type="button" onMouseLeave={this.hidePopOver} onMouseEnter={this.showPopOver} className=" btn btn-primary">What's a Moosh Boosh? <span className="glyphicon glyphicon-question-sign"></span></button>
					</div>
				</div>
		
		</div>{/*container*/}
		{this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.props.transitionTo, onInputChange: this.onInputChange, formData: this.state})}

  </div>)
  }	
})

var backgroundStyle = {
  paddingTop: '30px',
  paddingBottom: '30px'
};


var giveHeader = {
  textAlign: 'center',
  marginBottom: '30px'
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

var submitButton = {
	marginTop:'20px'
}

var popOver = {
	display: 'none',
	position:'absolute',
	top: '-60px',
	left: '230px',
	width: '200px',
    zIndex: '1060',
    padding: '5px',
    backgroundColor: '#fff',
    WebkitBackgroundClip: 'padding-box',
    backgroundClip: 'paddingBox',
    border: '1px solid #ccc',
    border: '1px solid rgba(0,0,0,.2)',
    borderRadius: '6px',
    WebkitBoxShadow: '0 5px 10px rgba(0,0,0,.2)',
    boxShadow: '0 5px 10px rgba(0,0,0,.2)',
    lineBreak: 'auto'
}

var whatsAContainer = {
	position: 'relative',
	marginTop: '30px'
}

 var popOverText = "A Moosh Boosh is a small, delightful gift that can be redeemed at a cool local business.  It could two free cappucinos from the best cafe in your neighborhood.  Or a delicious cookie from a local bakery.  The best part about a Moosh Boosh is that it's a surprise.  Neither the giver, nor the receiver, chooses the gift.  The only guarantee is that it will be from a great local business in your neighborhood.";
