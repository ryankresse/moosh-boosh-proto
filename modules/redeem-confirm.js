import React from 'react'
import { Link } from 'react-router'


export default React.createClass({

render() {
    return (<div>
     			<div className="container" style={backgroundStyle}>
					<div style={topContainer}>
						<header className="row">
							<h1 style={pageHead} className="col-xs-12">You've been given a free "Crack" Cookie at Milk Bar.</h1>
						</header>
						<div className="row">
							<div className="col-xs-6 col-xs-offset-1">
								<div className="panel panel-default">
									<div style={panelHeader} className="panel-heading">
										<h2 style={panelTitle}>How to Redeem your Moosh Boosh</h2>
									</div>
									<div className="panel-body">
										<ol style={olStyle}>
											<li>
												We'll send a coupon to your email address. 
											</li>
											<li>
												Show the coupon at the local business to redeem your Moosh Boosh
											</li>
										</ol>
										<div className="row">
											<div className="col-xs-9">
												<input className="form-control" placeholder="Enter your email address"/>
											</div>
											<div className="col-xs-3">
												<button type="button"className="btn btn-default">Submit</button>
											</div>
										</div>
							</div>
						</div>
					</div>
		
						<div className="col-xs-4">
							<video width="300" controls poster="images/milk_bar.jpg" ></video>
						</div>
					</div>
					</div>
		
  				</div>{/*container*/}
  				
  				<div style={middleContainer}>
  					<div className="container">
  						<h2 style={headerStyle}>More About Milk Bar</h2>
						<div style={middlePanelContainer} className="row">
							<div className="col-xs-4 col-xs-offset-2">
								<div className="panel panel-default ">
									<div style={panelHeader} className="panel-heading">
										<h2 style={panelTitle}>About Milk Bar</h2>
									</div>
									<div className="panel-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo 
									</div>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="panel panel-default ">
									<div style={panelHeader} className="panel-heading">
										<h2 style={panelTitle}>Go Get It!</h2>
									</div>
									<div className="panel-body">
										<image style={imageStyle} src={"images/map.png"} />
									</div>
								</div>
							</div>
						</div> {/*middle panel container*/}
					
					</div> {/* container*/}
					
					
  				</div> {/* middle container*/}
  				
  				<div style={bottomContainer}>
  					<div className="container">
  						<h2 style={bottomHeader}>While you're in the East Village...</h2>
  						<p style={leadStyle} className="lead">Check out these other amazing local businesses.</p>
						<div style={middlePanelContainer} className="row">
							<div className="col-xs-4">
								<div className="panel panel-default ">
										<div style={panelHeader} className="panel-heading">
											<h2 style={panelTitle}>Motorino</h2>
										</div>
										<div className="panel-body">
												<image style={imageStyle} src={"images/milk_bar.jpg"} />
										</div>
								</div>
							</div>
						
							<div className="col-xs-4">
								<div className="panel panel-default ">
										<div style={panelHeader} className="panel-heading">
											<h2 style={panelTitle}>Cafe Ost</h2>
										</div>
										<div className="panel-body">
												<image style={imageStyle} src={"images/ost.jpg"} />
										</div>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="panel panel-default ">
										<div style={panelHeader} className="panel-heading">
											<h2 style={panelTitle}>Davey's</h2>
										</div>
										<div className="panel-body">
												<image style={imageStyle} src={"images/daveys.jpg"} />
										</div>
								</div>
							</div>
						
						</div> {/*bottom panel container*/}
					
					</div> {/* container*/}
					
					
  				</div> {/* middle container*/}
      
      
      		</div>)
  }
})



var backgroundStyle = {
  marginTop: '20px'
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

var leadStyle ={
	textAlign: 'center',
	color: '#fff'
};

var lowerBackground = {
	background: "yellow",
	paddingBottom: '80px'
}

var submitButton = {
	marginTop:'20px'
}

var panelHeader  = {
	background: "#000",
	color: "#fff"
}

var pageHead  = {
	textAlign: "center",
	marginBottom: '20px'
}

var olStyle = {
	listStylePosition: 'inside',
	paddingLeft: '0px'
}
var panelTitle  = {
	fontSize: "20px",
	marginTop: "8px",
	marginBottom: "8px"
}

var middleContainer = {
	background: '#FFC2A4',
	paddingTop: "30px",
	paddingBottom: "30px"
}

var bottomContainer = {
	  background: 'url(' + 'images/flatiron.jpg' + ') no-repeat center',
	  paddingTop: '30px'
}


var middlePanelContainer = {
	marginTop: "50px"
}

var middlePanel = {
	width: "200px"
}

var bottomHeader = {
	textAlign: 'center',
	color: '#fff'
}

var topContainer  = { 
	paddingTop: '30px',
	paddingBottom: '30px'
}
