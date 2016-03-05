import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import EnterCode from './enter-code';
import RedeemLoading from './redeem-loading';
import RedeemConfirm from './redeem-confirm';
export default React.createClass({
  
  transitionTo(url) {
  	hashHistory.push(url);
  },
  
  render() {
    return (
      <div> {this.props.children && React.cloneElement(this.props.children, {
            transitionTo: this.props.transitionTo
          })}
          })}</div>
    )
  }
})