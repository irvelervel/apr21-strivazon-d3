import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

import thunk from 'redux-thunk'
import booksReducer from '../reducers/books'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  // cart
  cart: {
    products: [],
  },
  // user
  user: {
    firstName: '',
  },
  // books
  books: {
    stock: [],
    // here we're gonna have objects like this:
    // {
    //   book,
    //   qty
    // }
    error: false,
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: booksReducer,
})

export const configureStore = createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
// 3 arguments:
// reducer
// initialState
// any enhancer
