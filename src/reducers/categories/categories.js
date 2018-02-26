import { combineReducers } from 'redux'
import * as types from '../../actions/actionTypes'

export const initialState = {
  entities: {}
}

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return action.category || state
    default:
      return state
  }
}

const categoriesReducer = combineReducers({
  entities
})

export default categoriesReducer
