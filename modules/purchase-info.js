import React from 'react'

export default React.createClass({
   onChange(property, e) {
  	this.props.onInputChange(property, e.target.value)
  },
  handleNext() {
  	this.props.transitionTo('/give/' + this.props.params.neighborhood  + '/confirm')
  },
  handlePrev() {
  	this.props.transitionTo('/give/' + this.props.params.neighborhood + '/the-basics')
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
								Get Started
							</div>
							<div style={circleContainer}>
								<div style={circle}>2</div>
								<span style={activeCircle}>Billing</span>
							</div>
							<div style={circleContainer}>
								<div style={circle}>3</div>
								Confirmation
							</div>
						</div>{/* row */}
						<div className="row">
							<div className="col-xs-6">
								<h2 style={formHeader}>Credit Card Information</h2>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.cardName} onChange={this.onChange.bind(null, 'cardName')}  placeholder="Your Name As It Appears On Card"/>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.cardNumber} onChange={this.onChange.bind(null, 'cardNumber')} placeholder="Card Number"/>
								</div>
								<div className="row">
									<div className="col-xs-6 form-group	">
										<select className="form-control" value={this.props.formData.expirationMonth} onChange={this.onChange.bind(null, 'expirationMonth')}>
											<option value="Month" disabled>Month</option>
											 <option value="Jan">January</option>			
											  <option value="Feb">February</option>
											  <option value="March">March</option>
										</select>
									</div>
									<div className="col-xs-6">
										<select className="form-control" value={this.props.formData.expirationYear} onChange={this.onChange.bind(null, 'expirationYear')}>
											<option value="Year" disabled>Year</option>
										 	<option value="1">2016</option>			
										  	<option value ="2017">2017</option>
										</select>
									</div>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.securityCode} onChange={this.onChange.bind(null, 'securityCode')} placeholder="Security Code"/>
								</div>
							</div>
							<div className="col-xs-6">
								<h2 style={formHeader}>Billing Information</h2>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.addr1} onChange={this.onChange.bind(null, 'addr1')}  placeholder="Address Line 1"/>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.addr2} onChange={this.onChange.bind(null, 'addr2')} placeholder="Address Line 2"/>
								</div>
								<div className="form-group">
									<input className="form-control" value={this.props.formData.city} onChange={this.onChange.bind(null, 'city')} placeholder="City"/>
								</div>
								<div className="row">
									<div className="col-xs-6 form-group	">
											<select className="form-control" value={this.props.formData.state} onChange={this.onChange.bind(null, 'state')}>
												<option value="State" disabled>State</option>
												 <option value="NY">NY</option>			
												  <option value="NV">NV</option>
											</select>
									</div>
									<div className="col-xs-6 form-group">
											<input className="form-control" value={this.props.formData.zip} onChange={this.onChange.bind(null, 'zip')} placeholder="Zip Code"/>
									</div>
								</div>
				
							</div>	
						</div>{/* row */}
						<div className="row">
							<div style={prevButton} className="col-xs-2 col-xs-offset-4">
								<button type="button" style={submitButton} onClick={this.handlePrev}  className=" col-xs-12 btn btn-default">Previous</button>
							</div>
							<div className="col-xs-2">
								<button type="button" style={submitButton} onClick={this.handleNext} className=" col-xs-12 btn btn-default">Next</button>
							</div>
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
	fontWeight: "bold",
	fontSize: "18px"
}

var headerStyle ={
	textAlign: 'center'
};

var lowerBackground = {
	background: "#FFC2A4",
	paddingBottom: '80px',
	paddingTop: '30px'
}
var submitButton = {
	marginTop:'20px'
}
var prevButton = {
	marginRight: "15px",
	marginTop: "0px"
}
