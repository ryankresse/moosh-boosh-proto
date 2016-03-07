// modules/About.js
import React from 'react'

export default React.createClass({

	goToGive() {
		this.props.transitionTo('/');
	},
  	render() {
    return(<div>
    			<section className="container" style={topContainer}>
					<div className="col-xs-8 col-xs-offset-2">
						<h1 style={pageTitle}>Moosh Boosh</h1>
						<h2 style={blueSubHead}>A small, delightful treat made by an amazing local business.</h2>
						<h2 style={subHead}>Given by Airbnb hosts to welcome their guests to the neighborhood.</h2>  
					</div>
  				</section>{/*container*/}
    			
    			
    			<section style={middleContainer}>
					<div className="container">
						<h1 style={headerStyle}>Hosts</h1>	
						<div style={middleContainerContent} className="col-xs-5">
							<p>
								Delight your guests and boost your reviews with a Moosh Boosh, an inexpensive, unique gift from one of the best local spots in your neighborhood.
							</p>
							<div className="row">
								<div className="col-xs-5">
									<button type="button" onClick={this.goToGive} className=" btn btn-primary">Give a Moosh Boosh</button>
								</div>
								<div className="col-xs-5">
									<button type="button" className=" btn btn-primary">What's a Moosh Boosh? <span className="glyphicon glyphicon-question-sign"></span></button>
								</div>
							</div>
						</div>
						
					</div>{/*container*/}
  				</section>
  				
  				
  				<section style={bottomContainer}>
					<div className="container">
						<h1 style={headerStyle}>Brands</h1>	
					<div style={bottomPanelsContainer} className="row">
							<div className="col-xs-4 col-xs-offset-2">
								<div className="panel panel-default ">
									<div style={panelHeader} className="panel-heading">
										<h2 style={panelTitle}>Delight Visitors</h2>
									</div>
									<div className="panel-body">
										Be the first business to welcome guests to your neighborhood in New York City. Delighted visitors will redeem their treat at your store and only want more!									
									</div>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="panel panel-default ">
									<div style={panelHeader} className="panel-heading">
										<h2 style={panelTitle}>Drive Business</h2>
									</div>
									<div className="panel-body">
										Did you know that Airbnb guests on average spend $740 in the neighborhood in which they stay? Overall, the economic impact of Airbnb on the NYC economy is $632 million annually.
									</div>
								</div>
							</div>
						</div> {/*bottom panel container*/}
						<h2 style={headerStyle}>Contact us to Become a Brand Parnter</h2>
						<div className="row">
							<div className="col-xs-4 col-xs-offset-2">
								<h2 style={formHeader}>Business Information</h2>
									<input className=" form-group form-control" placeholder="Business Name"/>
									<input className=" form-group form-control" placeholder="Business Website"/>
									<input className=" form-group form-control" placeholder="Your Name"/>
									<input className=" form-group form-control" placeholder="Your Email"/>
							</div>
							<div className="col-xs-4">
								<h2 style={formHeader}>Anything else you'd like us to know</h2>
								<textarea className="form-control" rows="8" placeholder="150 character limit"></textarea>
							</div>
						</div>
						<div className= "col-xs-2 col-xs-offset-5">
							<button type="button" className=" col-xs-12 btn btn-default">Submit</button>

						</div>
						
					</div>{/*container*/}
  				</section>
    	
    	  </div>)
  }
})

var middleContainer = {
	  background: 'url(' + '/images/desk.jpg' + ') no-repeat center',
	  paddingBottom: "200px",
}

var middleContainerContent = {
	  marginTop: '80px'
}

var topContainer = {
	textAlign: 'center',
	paddingTop: '30px',
	paddingBottom: '30px'
}


var panelHeader  = {
	background: "#000",
	color: "#fff"
}

var headerStyle  = {
	textAlign: 'center'
}

var pageHead  = {
	textAlign: "center"
}

var panelTitle  = {
	fontSize: "20px",
	marginTop: "8px",
	marginBottom: "8px"
}

var bottomContainer = {
	  background: "#FFC2A4",
	  paddingTop: '30px',
	  paddingBottom: '30px'
}

var bottomPanelsContainer = {
	marginTop: "40px"
}

var formHeader = {
	textAlign: "center",
	fontSize: "16px"
}

var pageTitle = {
	textAlign: "center",
	fontSize: "50px"
}

var subHead = {
	textAlign: "center",
	fontSize: '26px'
}

var blueSubHead = {
	color: "#3D9BE9",
	textAlign: "center",
	fontSize: '26px'
}

