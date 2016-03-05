import React from 'react'

export default React.createClass({
  
  render() {
  	
  	return (<div>
	  
	  <div style={lowerBackground}>
		<div className="container">
			<div className="row">
				<div className= "col-xs-8 col-xs-offset-2">
						<div className="row">
							<h2 style={headerStyle}>Give a Moosh Boosh</h2>
						</div>
						<div className="row">
							<div style={circleContainer} className="col-xs-offset-5 col-xs-2">
								<div style={circle}>1</div>
								Get Started
							</div>
						</div>{/* row */}
						<div className="row">
							<div className="col-xs-6">
								<h2 style={formHeader}>The Basics</h2>
								<div className="form-group">
									<input className="form-control" placeholder="Your Name"/>
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Your Email Address"/>
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Recipient's Name"/>
								</div>
							</div>
							<div className="col-xs-6">
								<h2 style={formHeader}>Personalized Note To Guest</h2>
								<textarea className="form-control"  rows="8">{placeHolder}</textarea>
							</div>	
						</div>{/* row */}
						<div className="row">
							<button type="button" style={submitButton} className="col-xs-2 col-xs-offset-5 btn btn-default">Submit</button>
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


var placeHolder = "(Note to be shown guest when they redeem Moosh Boosh code. 150 character limit.)";

