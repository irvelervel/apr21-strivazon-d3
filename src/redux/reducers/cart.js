import { initialState } from '../store'

// add items to the cart
// remove items from the cart
// set the user name

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // state.products.push(action.payload)
      // SUPER WRONG!!
      // a reducer is a pure function
      // YOU CANNOT MUTATE YOUR ARGUMENTS

      //   [
      //       {
      //           book: {},
      //           qty: 1
      //       }
      //   ]

      // fetch()
      // DON'T DO FETCHES HERE!!

      let bookInCart = state.products.findIndex((b) => b.book.id === action.payload.id)

      let newProducts = [...state.products]
      if (bookInCart === -1) {
        newProducts.push({
          book: action.payload,
          qty: 1,
        })
      } else {
        newProducts[bookInCart].qty++
      }

      return {
        // every time you return an object out of a case
        // you're managing the whole state
        ...state,
        products: newProducts,
      }

    case 'REMOVE_FROM_CART':
      let newProductsArray = [...state.products]

      if (newProductsArray[action.payload].qty === 1) {
        newProductsArray = newProductsArray.filter((b, i) => i !== action.payload)
      } else {
        newProductsArray[action.payload].qty--
      }

      return {
        ...state,
        products: newProductsArray,
      }

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state
  }
}

export default cartReducer
