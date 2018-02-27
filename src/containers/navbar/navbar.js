import React, { Component } from 'react'
import SchoppingCart from '../../assets/icons/shopping-cart.svg'
import Award from '../../assets/icons/award.svg'
import User from '../../assets/icons/user.svg'
import Star from '../../assets/icons/star.svg'
import Phone from '../../assets/icons/phone.svg'

import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <img src={User} alt="user-icon" />
        <img className="navbar-favourites" src={Star} alt="favourites-icon" />
        <div className="navbar-main-button">
          <img src={SchoppingCart} alt="shopping-cart-icon" />
        </div>
        <img className="navbar-award" src={Award} alt="awards-icon" />
        <img src={Phone} alt="make-call-icon" />
      </nav>
    )
  }
}

export default Navbar
