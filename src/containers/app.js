import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes'
import './app.css'
// import Topbar from './topbar/topbarComponent'
import Categories from './categories/categoriesComponent'

const RedView = () => <div style={{ height: 300, backgroundColor: 'red' }}>Red</div>
const BlueView = () => <div style={{ height: 300, backgroundColor: 'blue' }}>Blue</div>
const GreenView = () => <div style={{ height: 300, backgroundColor: 'green' }}>Green</div>
const YellowView = () => <div style={{ height: 300, backgroundColor: 'yellow' }}>Yellow</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Topbar />
          <div>
            <Link to="/">Menu</Link> |
            <Link to="/blue">Blue</Link> |
            <Link to="/green">Green</Link> |
            <Link to="/yellow">Yellow</Link> |
            <Link to="/red">Red</Link>
          </div>

          <SwipeableRoutes>
            <Route path="/" component={Categories} />
            <Route path="/blue" component={BlueView} />
            <Route path="/green" component={GreenView} />
            <Route path="/yellow" component={YellowView} />
            <Route path="/red" component={RedView} />
          </SwipeableRoutes>
        </div>
      </Router>
    )
  }
}

export default App
