import { initialState } from '../store'

const booksReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        stock: action.payload,
      }

    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state
  }
}

export default booksReducer
// a pure function cannot deal with external side-effects!
