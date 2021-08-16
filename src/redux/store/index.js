import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

import thunk from 'redux-thunk'
import booksReducer from '../reducers/books'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
  key: 'root',
  storage,
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: booksReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(configureStore)

export { configureStore, persistor }
