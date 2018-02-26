import { normalize } from 'normalizr'
import { arrayOfCategorySchema } from '../../utils/normalizeSchema'
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
