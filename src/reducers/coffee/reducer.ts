import produce, { setAutoFreeze } from 'immer'
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

    default:
      return state
  }
}
