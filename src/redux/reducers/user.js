import { initialState } from '../store'

// add items to the cart
// remove items from the cart
// set the user name

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        firstName: action.payload,
      }

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state
  }
}

export default userReducer
