import { createContext, ReactNode, useReducer } from 'react'
import { incrementProductCartAction } from '../reducers/coffee/actions'
import { CoffeeData, coffeeReducer } from '../reducers/coffee/reducer'

interface CoffeeContextType {
  cart: CoffeeData[]
  incrementProduct: (id: string) => void
  decrementProduct: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [state, dispatch] = useReducer(coffeeReducer, { cart: [] })

  function incrementProduct(id: string) {
    console.log(id)
    dispatch(incrementProductCartAction(id))
  }

  function decrementProduct(id: string) {
    console.log(id)
    dispatch(incrementProductCartAction(id))
  }

  console.log(state.cart)
  const cart = state.cart

  return (
    <CoffeeContext.Provider
      value={{ incrementProduct, decrementProduct, cart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
