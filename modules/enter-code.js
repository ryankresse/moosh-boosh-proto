import React from 'react'
import { Link, hashHistory } from 'react-router'


export default React.createClass({
  handleSubmit() {
  	this.props.transitionTo('/redeem/loading');
  },
  render() {
    return (
      <div style={divStyle}>
		Enter Code
		<button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
})

var divStyle = {
  color: 'white',
  backgroundColor: 'green'
};