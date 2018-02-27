import React from 'react'
import PropTypes from 'prop-types'

import './category.css'
import PizzaIcon from '../../assets/images/pizza_small.png'

import ChevronRight from '../../assets/icons/chevron-right.svg'

const Category = (props, context) => {
  const { name, dishesCount } = props
  return (
    <li className="Category" onClick={() => context.router.history.push(`/category/${props.id}`)}>
      <img className="category-icon" src={PizzaIcon} alt={name} />
      <div className="category-description">
        <h3 className="category-name">{name}</h3>
        <span>{`${dishesCount} ${dishesCount < 5 && dishesCount !== 0 ? 'dania' : 'dań'}`}</span>
      </div>
      <div className="circle">
        <img src={ChevronRight} alt="cheveron-right-icon" />
      </div>
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
