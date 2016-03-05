import React from 'react'

export default React.createClass({
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
						<div className={circleWrapper}>
							<div style={circleContainer}>
								<div style={circle}>1</div>
								Get Started
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
									<div className="col-xs-6 form-group">
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
								<h2 style={formHeader}>Personalized Note To Guest</h2>
								<textarea className="form-control"  rows="8"></textarea>
							</div>	
						</div>{/* row */}
						<div className="row">
							<button type="button" style={submitButton} onClick={this.handleSubmit} className="col-xs-2 col-xs-offset-5 btn btn-default">Submit</button>
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
	justifyContent: 'center'
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

