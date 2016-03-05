import React from 'react'
import { hashHistory } from 'react-router';
export default React.createClass({
  render() {
  	return (
    <span>{this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.props.transitionTo
          })}</span>
  )
  }
})
