import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Category from '../../components/category/category'
import './categories.css'

import { fetchCategories } from '../../actions/categories/categories'
import { getCategoriesList } from '../../selectors/category'

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <ul className="Categories">
        {categories.map(category => (
          <Category
            key={category.id}
            id={category.id}
            name={category.name}
            dishesCount={category.dishesCount}
          />
        ))}
      </ul>
    )
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators(
    {
      fetchCategories
    },
    dispatch
  )
}

const mapState = state => {
  return {
    categories: getCategoriesList(state)
  }
}

export default connect(mapState, mapDispatch)(Categories)
