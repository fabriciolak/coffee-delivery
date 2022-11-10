import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/Coffee'
import {
  Cart,
  CartContent,
  CartInfo,
  CartOrderButton,
  CartRemoveButton,
} from './styles'

interface CartItemProps {
  id: string
  name: string
  image: string
  price: number
  quantity: number
}

export function CartItem({ id, name, image, price, quantity }: CartItemProps) {
  const { cart, removeFromCart, decrementProduct, incrementProduct } =
    useContext(CoffeeContext)

  function handleDeleteProductFromCart() {
    if (id) {
      removeFromCart(id)
    }
  }

  const productCartExists = cart && cart.find((item) => item.id)

  function handleUpdateProductAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (quantity <= 1) return

      if (productCartExists) decrementProduct(id)
    } else {
      if (productCartExists) incrementProduct(id)
    }
  }

  return (
    <Cart>
      <CartContent>
        <img src={image} alt="" />
        <CartInfo>
          <strong>{name}</strong>
          <div>
            <CartOrderButton>
              <button
                type="button"
                onClick={() => handleUpdateProductAmount('remove')}
              >
                <Minus color="#8047F8" size={14} weight="regular" />
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => handleUpdateProductAmount('add')}
              >
                <Plus color="#8047F8" size={14} weight="regular" />
              </button>
            </CartOrderButton>
            <CartRemoveButton onClick={handleDeleteProductFromCart}>
              <Trash color="#8047F8" size={16} weight="regular" />
              <span>REMOVER</span>
            </CartRemoveButton>
          </div>
        </CartInfo>
      </CartContent>
      <strong>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </strong>
    </Cart>
  )
}
