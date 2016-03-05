import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
          {/* add this */}
        {this.props.children}

      </div>
    )
  }
})