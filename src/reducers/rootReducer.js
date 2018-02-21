import { combineReducers } from 'redux'
import categoryReducer from './categoriesReducer'

const rootReducer = combineReducers({
  category: categoryReducer
})

export default rootReducer
