import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAdapter from 'axios-mock-adapter'
import api from '../../utils/api'
import axios from 'axios'
import * as actions from './categories'
import * as types from '../actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mock = new mockAdapter(api)

mock.onGet('/categories').reply(200, [
  {
    dishes: ['margherita', 'funghi', 'capriciosa'],
    id: 'pizza',
    index: 0,
    name: 'Pizza'
  }
])

describe('categoriesActions', () => {
  describe('fetchCategories', () => {
    afterEach(() => {
      mock.reset()
      mock.restore()
    })

    it('creates FETCH_CATEGORIES_SUCCESS when fetching categories has been done', () => {
      const expectedActions = [
        { type: types.FETCHING_CATEGORIES },
        {
          type: types.FETCH_CATEGORIES_SUCCESS,
          category: {
            pizza: {
              id: 'pizza',
              index: 0,
              name: 'Pizza',
              dishes: ['margherita', 'funghi', 'capriciosa']
            }
          }
        }
      ]

      const store = mockStore({ category: { entities: {} } })

      return store.dispatch(actions.fetchCategories()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
