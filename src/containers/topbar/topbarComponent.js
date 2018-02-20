import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class TopbarComponent extends Component {
  render() {
    return (
      <div className="topbar-component">
        <Link to="/cat" className="topbar-component menuButton">
          MENU
        </Link>
        <Link to="/1" className="topbar-component menuButton">
          TEST1
        </Link>
        <Link to="/2" className="topbar-component menuButton">
          TEST2
        </Link>
        <Link to="/3" className="topbar-component menuButton">
          TEST3
        </Link>
      </div>
    )
  }
}

export default TopbarComponent
