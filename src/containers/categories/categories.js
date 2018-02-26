import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Category from '../../components/category'
import './categories.css'

import { fetchCategories } from '../../actions/categories/categories'
import { getCategoriesList } from '../../selectors/category'

class CategoriesComponent extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div className="categories-component">
        <ul>
          {categories.map(category => (
            <Category name={category.name} dishesCount={category.dishesCount} />
          ))}
        </ul>
      </div>
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

export default connect(mapState, mapDispatch)(CategoriesComponent)
