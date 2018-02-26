import { createSelector } from 'reselect'

export const getEntities = state => state.category.entities

export const getEntity = (state, categoryKey) => state.category.entities[categoryKey]

//MEMOIZED

export const getCategoriesList = createSelector(getEntities, categories => {
  return Object.keys(categories)
    .map((categoryKey, index) => {
      return {
        id: categoryKey,
        name: categories[categoryKey].name,
        dishesCount: categories[categoryKey].dishes.length,
        image: null,
        index: categories[categoryKey].index
      }
    })
    .sort((a, b) => a.index - b.index)
})
