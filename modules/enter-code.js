import React from 'react'
import { Link, hashHistory } from 'react-router'


export default React.createClass({
  handleSubmit() {
  	hashHistory.push('/redeem/loading');
  },
  render() {
    return (
      <div>
Enter Code
	<button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
})