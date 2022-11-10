import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { OrderSchemaType } from '../page/Checkout'
import {
  incrementProductCartAction,
  decrementProductCartAction,
  addProductCartAction,
  removeProductCartAction,
  clearCartAction,
} from '../reducers/coffee/actions'
import { CoffeeData, coffeeReducer } from '../reducers/coffee/reducer'

interface CoffeeContextProps {
  children: ReactNode
}

type ProductCartTotal = {
  total: number
  quantityProducts: number
}

interface confirmOrderData extends OrderSchemaType {
  method: 'credit' | 'debit' | 'cash'
}

interface CoffeeContextType {
  cart: CoffeeData[]
  totalProducts: ProductCartTotal
  confirmOrder: confirmOrderData
  methodPayment: 'credit' | 'debit' | 'cash'
  handleConfirmOrder: (k: OrderSchemaType) => void
  setMethodPayment: (k: 'credit' | 'debit' | 'cash') => void
  incrementProduct: (id: string) => void
  decrementProduct: (id: string) => void
  addToCart: (product: CoffeeData) => void
  removeFromCart: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [state, dispatch] = useReducer(coffeeReducer, { cart: [] })
  const [totalProducts, setTotalProducts] = useState<ProductCartTotal>({
    total: 0,
    quantityProducts: 0,
  })

  const [confirmOrder, setConfirmOrder] = useState<confirmOrderData>(
    {} as confirmOrderData,
  )

  const [methodPayment, setMethodPayment] = useState<
    'credit' | 'debit' | 'cash'
  >('credit')

  function incrementProduct(id: string) {
    dispatch(incrementProductCartAction(id))
  }

  function decrementProduct(id: string) {
    dispatch(decrementProductCartAction(id))
  }

  function addToCart(product: CoffeeData) {
    dispatch(addProductCartAction(product))
  }

  function removeFromCart(id: string) {
    dispatch(removeProductCartAction(id))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  function handleConfirmOrder(data: OrderSchemaType) {
    setConfirmOrder({ ...data, method: methodPayment })

    clearCart()
  }

  const cart = state.cart

  console.log(cart)

  const newCart = new Map()

  console.log(confirmOrder)

  cart.forEach((item) => {
    newCart.set(item.id, item)
  })

  useEffect(() => {
    const totalPayable = cart.reduce(
      (acc, product) => {
        return {
          total: acc.total + product.quantity * product.price,
          quantityProducts: acc.quantityProducts + product.quantity,
        }
      },
      { total: 0, quantityProducts: 0 },
    )

    setTotalProducts(totalPayable)
  }, [cart])

  return (
    <CoffeeContext.Provider
      value={{
        cart: [...newCart.values()] || [],
        incrementProduct,
        decrementProduct,
        addToCart,
        removeFromCart,
        totalProducts,
        setMethodPayment,
        confirmOrder,
        handleConfirmOrder,
        methodPayment,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
