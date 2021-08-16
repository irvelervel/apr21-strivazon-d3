// our async operations, like fetches, will be done here
// redux-thunk will allow us to create more powerful action creators
// that are now not just capable of returning an object, the action,
// but they will be able now to return FUNCTIONS

export const addToCartAction = (book) => {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  }
}

// export const addToCartAction = (book) => ({
//   type: 'ADD_TO_CART',
//   payload: book,
// })

export const addToCartActionThunk = (book) => {
  return (dispatch, getState) => {
    // this is a function!
    // you can do everything you want here!
    // ...
    dispatch({
      type: 'ADD_TO_CART',
      payload: book,
    })
  }
}

export const fetchBooksAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch('https://striveschool-api.herokuapp.com/food-books')
      if (resp.ok) {
        let books = await resp.json()
        dispatch({
          type: 'FETCH_BOOKS',
          payload: books,
        })
        dispatch({
          type: 'FETCH_BOOKS_ERROR',
          payload: false,
        })
        console.log(getState())
      } else {
        console.log('error')
        dispatch({
          type: 'FETCH_BOOKS_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'FETCH_BOOKS_ERROR',
        payload: true,
      })
    }
  }
}

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_FROM_CART',
  payload: index,
})

export const setUserNameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})
