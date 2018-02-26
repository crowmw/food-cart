import { combineReducers } from 'redux'
import categoryReducer from './categories/categories'

export const rootReducer = combineReducers({
  category: categoryReducer
})

export default rootReducer
