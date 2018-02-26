import { combineReducers } from 'redux'
import categoryReducer from './categories/categories'
import dishesReducer from './dishes/dishes'

export const rootReducer = combineReducers({
  category: categoryReducer,
  dishes: dishesReducer
})

export default rootReducer
