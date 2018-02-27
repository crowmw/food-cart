import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeGetCategoryEntities } from '../../selectors/dishes'

import { fetchCategoryDishes } from '../../actions/categories/categories'

import Dish from '../../components/dish/dish'

import './dishes.css'

class Dishes extends Component {
  componentWillMount() {
    this.props.fetchCategoryDishes(this.props.match.params.category)
  }

  render() {
    const { dishes, match } = this.props
    console.log(dishes)
    return (
      <div className="Dishes">
        <h2 className="dishes-header">{`${match.params.category} menu`}</h2>
        <ul className="dishes-list">
          {dishes &&
            dishes.map((dish, index) => {
              return (
                <Dish
                  key={dish.id}
                  name={dish.name}
                  description={dish.description}
                  weight={dish.weight}
                  price={dish.price}
                  stars={dish.stars}
                  ingredients={dish.ingredients}
                />
              )
            })}
        </ul>
      </div>
    )
  }
}

const makeMapState = (state, props) => {
  const getCategoryDishes = makeGetCategoryEntities()
  const mapState = (state, props) => {
    return {
      dishes: getCategoryDishes(state, props.match.params.category)
    }
  }
  return mapState
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchCategoryDishes
    },
    dispatch
  )
}

export default connect(makeMapState, mapDispatch)(Dishes)
