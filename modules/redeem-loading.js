import React from 'react'
import { Link, hashHistory } from 'react-router'


export default React.createClass({
  nextState() {
  	this.props.route.transitionToRedeemConfirm();
  },
  render() {
    return (
      <div>
      Loading Moosh Boosh
      
      <button onClick={this.nextState}>Go to confirm</button>
      </div>
    )
  }
})