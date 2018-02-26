import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import './app.css'
// import Topbar from './topbar/topbarComponent'
import Categories from './categories/categories'

const RedView = () => <div style={{ height: 300, backgroundColor: 'red' }}>Red</div>
const BlueView = () => <div style={{ height: 300, backgroundColor: 'blue' }}>Blue</div>
const GreenView = () => <div style={{ height: 300, backgroundColor: 'green' }}>Green</div>
const YellowView = () => <div style={{ height: 300, backgroundColor: 'yellow' }}>Yellow</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="topbar">
            <Link to="/">Menu</Link> |
            <Link to="/blue">Blue</Link> |
            <Link to="/green">Green</Link> |
            <Link to="/yellow">Yellow</Link> |
            <Link to="/red">Red</Link>
          </header>
          <div className="background-swipeable" />
          <SwipeableViews preventNext={true} containerStyle={{ height: '100%' }}>
            <Route path="/" component={Categories} />
            <Route path="/blue" component={BlueView} />
            <Route path="/green" component={GreenView} />
            <Route path="/yellow" component={YellowView} />
            <Route path="/red" component={RedView} />
          </SwipeableViews>
        </div>
      </Router>
    )
  }
}

export default App
