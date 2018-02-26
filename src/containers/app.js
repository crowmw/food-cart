import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes'
import './app.css'
// import Topbar from './topbar/topbarComponent'
import Categories from './categories/categories'
import Dishes from './dishes/dishes'

const RedView = () => <div style={{ height: 300, backgroundColor: 'red' }}>Red</div>
const BlueView = () => <div style={{ height: 300, backgroundColor: 'blue' }}>Blue</div>
const GreenView = () => <div style={{ height: 300, backgroundColor: 'green' }}>Green</div>
const YellowView = () => <div style={{ height: 300, backgroundColor: 'yellow' }}>Yellow</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="topbar" />
          <div className="background-swipeable" />
          <SwipeableRoutes disabled={false} containerStyle={{ height: '100%' }}>
            <Route path="/" component={Categories} />
            <Route path="/category/:category" component={Dishes} />
          </SwipeableRoutes>
        </div>
      </Router>
    )
  }
}

export default App
