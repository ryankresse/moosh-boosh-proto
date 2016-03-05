import React from 'react'
import { hashHistory } from 'react-router';
export default React.createClass({
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
		</div>
  	
    <span>{this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.props.transitionTo
          })}</span>
    </div>
  )
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