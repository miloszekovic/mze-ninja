import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        &copy; {new Date().getFullYear()}<br /><Link to="/">MZE.NINJA</Link>
      </footer>
    )
  }
}

export default Footer