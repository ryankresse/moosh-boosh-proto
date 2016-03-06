import React from 'react'

export default React.createClass({
  handleNext() {
  	this.props.transitionTo('/give/' + this.props.params.neighborhood + '/purchase-info')
  },
  onChange(property, e) {
  	this.props.onInputChange(property, e.target.value)
  },

  render() {
  	
  	return (<div>
	  
	  <div style={lowerBackground}>
		<div className="container">
			<div className="row">
				<div className= "col-xs-8 col-xs-offset-2">
						<div className="row">
							<h2 style={headerStyle}>Give a Moosh Boosh</h2>
						</div>
						<div className="col-xs-6 col-xs-offset-3" style={circleWrapper}>
							<div style={circleContainer}>
								<div style={circle}>1</div>
								<span style={activeCircle}>Get Started</span>
							</div>
							<div style={circleContainer}>
								<div style={circle}>2</div>
								<span>Billing</span>
							</div>
							<div style={circleContainer}>
								<div style={circle}>3</div>
								Confirmation
							</div>
						</div>{/* circleWrap */}
						<div className="row">
							<div className="col-xs-6">
								<h2 style={formHeader}>The Basics</h2>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.customerName} onChange={this.onChange.bind(null, 'customerName')} placeholder="Your Name"/>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.customerEmail} onChange={this.onChange.bind(null, 'customerEmail')} placeholder="Your Email Address"/>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.recipientName} onChange={this.onChange.bind(null, 'recipientName')} placeholder="Recipient's Name"/>
								</div>
							</div>
							<div className="col-xs-6">
								<h2 style={formHeader}>Personalized Note To Guest</h2>
								<textarea className="form-control" value={this.props.formData.giftMessage} onChange={this.onChange.bind(null, 'giftMessage')}  rows="8"></textarea>
							</div>	
						</div>{/* row */}
						<div className="row">
							<button type="button" style={submitButton} onClick={this.handleNext} className="col-xs-2 col-xs-offset-5 btn btn-default">Next</button>
						</div>
					</div> {/* col-xs-8 */}
				</div>{/* row */}
			</div>{/* container */}
	
	
	  </div>{/* lowerBground */}
  </div>)
  }
})

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
	justifyContent: 'space-around'
}

var formHeader = {
	textAlign: "center",
	fontSize: "16px"
}

var circleContainer = {
	textAlign: "center"
}

var activeCircle = {
	fontWeight: "bold"
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



var placeHolder = "(Note to be shown guest when they redeem Moosh Boosh code. 150 character limit.)";

