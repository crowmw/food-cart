import * as types from '../../actions/actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  entities: {}
}

export const entities = (state = initialState.entities, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORY_DISHES_SUCCESS:
      return action.dishes || state
    default:
      return state
  }
}

const dishesReducer = combineReducers({
  entities
})

export default dishesReducer
