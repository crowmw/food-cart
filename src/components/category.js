import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './category.css'
import PizzaIcon from '../assets/images/pizza_small.png'

const Category = (props, context) => {
  const { name, dishesCount } = props
  return (
    <li
      className="category-component"
      onClick={() => context.router.history.push(`/category/${props.id}`)}
    >
      <img src={PizzaIcon} alt={name} />
      <div className="category-component-description">
        <h3>{name}</h3>
        <span>{`${dishesCount} ${dishesCount < 5 && dishesCount !== 0 ? 'dania' : 'dań'}`}</span>
      </div>
      <div className="circle">></div>
    </li>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  dishesCount: PropTypes.number.isRequired
}

Category.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
}

export default Category
