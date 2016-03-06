import React from 'react'

export default React.createClass({
  getInitialState() {
    return {neighborhood: 'default'};
  },
  onChange(){
   var neighborhood = this.refs.selectControl.value;
  	this.setState({
  	neighborhood: neighborhood
  	});
  	this.props.transitionTo('/give/' + neighborhood + '/the-basics')
  },
  
  render() {
    return (
    <div style={backgroundStyle}>
    	<div style={containerStyle} >
			<select ref="selectControl" value={this.state.neighborhood} onChange={this.onChange} style={selectStyle} className="form-control">
			 <option value="default" disabled>Choose your neighborhood</option>
			  <option value="1">1</option>
			  <option>2</option>
			  <option>3</option>
			  <option>4</option>
			  <option>5</option>
			</select>
    	</div>
    
    </div>
    )
  }
})
var backgroundStyle = {
  background: 'url(' + 'images/choose_neighborhood.jpg' + ') no-repeat center center fixed',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  msBackgroundSize: 'cover',
  BackgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var containerStyle = {
	display: 'inline-block',
}	


var selectStyle = {
	width: '300px',
}	