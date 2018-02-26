import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './category.css'
import PizzaIcon from '../assets/images/pizza_small.png'

class CategoryComponent extends Component {
  render() {
    const { name, dishesCount } = this.props
    return (
      <li className="category-component">
        <img src={PizzaIcon} alt={name} />
        <div className="category-component-description">
          <h3>{name}</h3>
          <span>{`${dishesCount} ${dishesCount < 5 && dishesCount !== 0 ? 'dania' : 'dań'}`}</span>
        </div>
        <div className="circle">></div>
      </li>
    )
  }
}

CategoryComponent.propTypes = {
  name: PropTypes.string.isRequired,
  dishesCount: PropTypes.number.isRequired
}

export default CategoryComponent
