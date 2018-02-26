import { createSelector } from 'reselect'

import { getEntity as getCategoryEntity } from './category'

export const getEntities = state => state.dishes.entities

export const getCategoryDishes = (state, categoryKey) => {
  const category = getCategoryEntity(state, categoryKey)
  const dishes = getEntities(state)
  let result = []
  if (Object.keys(dishes).length > 0 && category) {
    for (let dish of category.dishes) {
      result.push(dishes[dish])
    }
  }
  return result
}

export const makeGetCategoryEntities = () => createSelector(getCategoryDishes, dishes => dishes)
