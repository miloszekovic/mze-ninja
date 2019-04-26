import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()}<br /><Link to="/">mze.ninja</Link></p>
      </footer>
    )
  }
}

export default Footer