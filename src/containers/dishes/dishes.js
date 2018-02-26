import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeGetCategoryEntities } from '../../selectors/dishes'

import { fetchCategoryDishes } from '../../actions/categories/categories'

class Dishes extends Component {
  componentWillMount() {
    this.props.fetchCategoryDishes(this.props.match.params.category)
  }

  render() {
    const { dishes } = this.props
    console.log(dishes)
    return (
      <ul className="Dishes">
        {dishes &&
          dishes.map((dish, index) => {
            return <li key={dish.id}>{dish.name}</li>
          })}
      </ul>
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
