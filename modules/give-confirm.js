import React from 'react'

export default React.createClass({
  handleSubmit() {
  	this.props.transitionTo('/give/success')
  },
   handlePrev() {
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
									<span>Get Started</span>
								</div>
								<div style={circleContainer}>
									<div style={circle}>2</div>
									<span>Billing</span>
								</div>
								<div style={circleContainer}>
									<div style={circle}>3</div>
									<span style={activeCircle}>Confirmation</span>
								</div>
						</div>{/* circleWrap */}
							<div className="row">
								<div className="col-xs-6">
									<h2 style={formHeader}>Confirm Your Email Address</h2>
									<div className="form-group">
										<input className="form-control" value={this.props.formData.customerEmailConfirm} onChange={this.onChange.bind(null, 'customerEmailConfirm')} placeholder="Email Address"/>
									</div>	
								</div>
								<div className="col-xs-6">
									<h2 style={formHeader}>Create an account for future purchases</h2>
									<div className="form-group">
										<input className="form-control" value={this.props.formData.accountUN} onChange={this.onChange.bind(null, 'accountUN')} placeholder="User Name"/>
									</div>
									<div className="form-group">
										<input className="form-control" value={this.props.formData.accountPW} onChange={this.onChange.bind(null, 'accountPW')} placeholder="Password"/>
									</div>
								</div>	
							</div>{/* row */}
							<div className="row">
							<div style={prevButton} className="col-xs-2 col-xs-offset-4">
								<button type="button" style={submitButton} onClick={this.handlePrev}  className=" col-xs-12 btn btn-default">Previous</button>
							</div>
							<div className="col-xs-2">
								<button type="button" style={submitButton} onClick={this.handleSubmit} className=" col-xs-12 btn btn-default">Submit</button>
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
var prevButton = {
	marginRight: "15px",
	marginTop: "0px"
}

