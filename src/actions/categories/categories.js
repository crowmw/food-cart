import { normalize } from 'normalizr'
import { arrayOfCategorySchema, arrayOfDishSchema } from '../../utils/normalizeSchema'
import * as types from '../actionTypes'
import api from '../../utils/api'

export const fetchCategories = () => (dispatch, getState) => {
  dispatch(fetchingCategories())
  return dispatch(() =>
    api
      .get('/categories')
      .then(res => {
        if (res.data && res.status === 200) {
          const normalized = normalize(res.data, arrayOfCategorySchema)
          return dispatch(fetchCategoriesSuccess(normalized.entities.category))
        }
      })
      .catch(err => {
        return dispatch(fetchCategoriesError(err))
      })
  )
}

export const fetchingCategories = () => {
  return {
    type: types.FETCHING_CATEGORIES
  }
}

export const fetchCategoriesSuccess = category => {
  return {
    type: types.FETCH_CATEGORIES_SUCCESS,
    category
  }
}

export const fetchCategoriesError = error => {
  return {
    type: types.FETCH_CATEGORIES_ERROR,
    error
  }
}

export const fetchCategoryDishes = categoryKey => (dispatch, getState) => {
  dispatch(fetchingCategoryDishes(categoryKey))
  return dispatch(() => {
    api
      .get(`/categories/${categoryKey}/dishes`)
      .then(res => {
        if (res.data && res.status === 200) {
          const normalized = normalize(res.data, arrayOfDishSchema)
          return dispatch(fetchCategoryDishesSuccess(categoryKey, normalized.entities.dish))
        }
      })
      .catch(err => {
        return dispatch(fetchCategoryDishesError(err))
      })
  })
}

export const fetchingCategoryDishes = categoryKey => {
  return {
    type: types.FETCHING_CATEGORY_DISHES,
    categoryKey
  }
}

export const fetchCategoryDishesSuccess = (categoryKey, dishes) => {
  return {
    type: types.FETCH_CATEGORY_DISHES_SUCCESS,
    categoryKey,
    dishes
  }
}

export const fetchCategoryDishesError = error => {
  return {
    type: types.FETCH_CATEGORY_DISHES_ERROR,
    error
  }
}
