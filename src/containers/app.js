import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes'
import './app.css'
import Navbar from './navbar/navbar'
import Categories from './categories/categories'
import Dishes from './dishes/dishes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="background-swipeable" />
          <SwipeableRoutes disabled={false} containerStyle={{ height: '100%' }}>
            <Route path="/" component={Categories} />
            <Route path="/category/:category" component={Dishes} />
          </SwipeableRoutes>
          <Navbar />
        </div>
      </Router>
    )
  }
}

export default App
