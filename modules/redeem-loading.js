import React from 'react'
import { Link, hashHistory } from 'react-router'


export default React.createClass({
  handleSubmit() {
  	this.props.transitionTo('/redeem/confirm');
  },
  render() {
    return (
      <div>
      Loading Moosh Boosh
      
      <button onClick={this.handleSubmit}>Go to confirm</button>
      </div>
    )
  }
})