import categoriesReducer, * as reducer from './categories'
import * as types from '../../actions/actionTypes'

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('entities', () => {
    it('should set categories on FETCH_CATEGORIES_SUCCESS', () => {
      const expected = {
        pizza: {
          id: 'pizza',
          index: 0,
          name: 'Pizza',
          dishes: ['margherita', 'funghi', 'capriciosa']
        }
      }
      expect(
        reducer.entities(reducer.initialState.entities, {
          type: types.FETCH_CATEGORIES_SUCCESS,
          category: expected
        })
      ).toEqual(expected)
    })

    it('should set previous state on empty FETCH_CATEGORIES_SUCCESS', () => {
      const expected = {
        pizza: {
          id: 'pizza',
          index: 0,
          name: 'Pizza',
          dishes: ['margherita', 'funghi', 'capriciosa']
        }
      }
      expect(
        reducer.entities(
          {
            pizza: {
              id: 'pizza',
              index: 0,
              name: 'Pizza',
              dishes: ['margherita', 'funghi', 'capriciosa']
            }
          },
          {
            type: types.FETCH_CATEGORIES_SUCCESS
          }
        )
      ).toEqual(expected)
    })
  })
})
