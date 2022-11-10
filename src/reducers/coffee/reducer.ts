import produce from 'immer'
import { ActionType } from './actions'

export interface CoffeeData {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CoffeeState {
  cart: CoffeeData[]
}

interface Action {
  type: keyof typeof ActionType
  payload?: any
}

export function coffeeReducer(state: CoffeeState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.product)
      })

    case ActionType.INCREMENT_PRODUCT: {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (productIndex < 0) return state

      return produce(state, (draft) => {
        draft.cart[productIndex].quantity =
          draft.cart[productIndex].quantity + 1
      })
    }

    case ActionType.DECREMENT_PRODUCT: {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (productIndex < 0) return state

      return produce(state, (draft) => {
        draft.cart[productIndex].quantity =
          draft.cart[productIndex].quantity - 1
      })
    }

    case ActionType.REMOVE_TO_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (product) => product.id !== action.payload.id,
        )
      })
    }

    case ActionType.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cart = []
      })
    }

    default:
      return state
  }
}
